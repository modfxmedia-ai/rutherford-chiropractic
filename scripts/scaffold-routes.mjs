// Reads content-map.json and creates an `app/{slug}/page.tsx` for every URL.
// Each page is a placeholder that wires generateMetadata + JSON-LD from the
// scraped content-map so we don't lose any SEO signal.
//
// Usage: node scripts/scaffold-routes.mjs

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const APP = path.join(ROOT, "app");
const MAP = JSON.parse(readFileSync(path.join(ROOT, "content-map.json"), "utf8"));

const HOMEPAGE_TEMPLATE = `import { metadataFor, jsonLdFor } from "./_lib/content-map";
import { JsonLdBlocks } from "./_lib/JsonLdBlocks";

export const metadata = metadataFor("/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>Rutherford Spine &amp; Wellness Center</h1>
        <p>Homepage route ({"/"}) scaffolded.</p>
      </main>
    </>
  );
}
`;

function categoryLabel(category) {
  return (
    {
      home: "Homepage",
      "core-service": "Core service page",
      utility: "Utility page",
      "location-landing": "Location landing page",
      "blog-index": "Blog index",
      "blog-post": "Blog post",
      other: "Page",
    }[category] || "Page"
  );
}

function pageTemplate(entry) {
  const p = entry.path;
  const label = categoryLabel(entry.category);
  const title = entry.meta?.title ?? p;
  return `import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: ${p}
// Category: ${entry.category} (${label})
// Source sitemap: ${entry.source}-sitemap.xml
// Live title: ${JSON.stringify(title)}

export const metadata = metadataFor(${JSON.stringify(p)});

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor(${JSON.stringify(p)})} />
      <main>
        {/* Routing placeholder \u2014 visual design lands in a later step. */}
        <h1>{${JSON.stringify(title)}}</h1>
        <p>${label} route (${p}) scaffolded.</p>
      </main>
    </>
  );
}
`;
}

let created = 0;
let overwritten = 0;
let skipped = 0;

for (const entry of MAP.routes) {
  const p = entry.path;
  if (p === "/") {
    // Homepage overwrite of the create-next-app placeholder.
    const file = path.join(APP, "page.tsx");
    writeFileSync(file, HOMEPAGE_TEMPLATE);
    overwritten++;
    continue;
  }

  // strip leading + trailing slashes; every URL is a single-segment slug
  const slug = p.replace(/^\//, "").replace(/\/$/, "");
  if (!slug || slug.includes("/")) {
    console.warn(`  ! unexpected slug shape: ${p}`);
    continue;
  }
  const dir = path.join(APP, slug);
  mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "page.tsx");
  const src = pageTemplate(entry);
  if (existsSync(file)) {
    const cur = readFileSync(file, "utf8");
    if (cur === src) {
      skipped++;
      continue;
    }
    writeFileSync(file, src);
    overwritten++;
  } else {
    writeFileSync(file, src);
    created++;
  }
}

console.log(`Created: ${created}`);
console.log(`Overwritten: ${overwritten}`);
console.log(`Unchanged: ${skipped}`);
console.log(`Total routes: ${MAP.routes.length}`);
