// One-off codegen script (not part of the app runtime).
// Regenerates app/<slug>/page.tsx for every location-landing slug in
// content-map.json to render <LocationPageTemplate>, while preserving the
// existing metadataFor/jsonLdFor/JsonLdBlocks wiring untouched (that infra
// already fully satisfies SEO parity — see repo memory).
//
// Usage: node scripts/generate-location-pages.mjs [service1 service2 ...]
// With no args, regenerates ALL location-landing pages. Pass one or more
// service slugs (e.g. "chiropractic") to regenerate only that service's
// city pages, per the service-by-service rollout plan.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const contentMap = JSON.parse(readFileSync(path.join(ROOT, "content-map.json"), "utf8"));
const locations = JSON.parse(readFileSync(path.join(ROOT, "app/_lib/locations.json"), "utf8"));
const routes = contentMap.routes.filter((r) => r.category === "location-landing");

const filterServices = process.argv.slice(2);

let written = 0;
for (const route of routes) {
  const slug = route.path.replace(/^\/|\/$/g, "");
  const data = locations[slug];
  if (!data) continue; // shouldn't happen — every location-landing route was extracted
  if (filterServices.length > 0 && !filterServices.includes(data.service)) continue;

  const dir = path.join(ROOT, "app", slug);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const contents = `import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /${slug}/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: ${JSON.stringify(route.meta?.title ?? "")}
export const metadata = metadataFor("/${slug}/");

export default function Page() {
  const data = getLocationPage("${slug}")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/${slug}/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
`;

  writeFileSync(path.join(dir, "page.tsx"), contents);
  written += 1;
}

console.log(`Regenerated ${written} location page.tsx file(s).`);
