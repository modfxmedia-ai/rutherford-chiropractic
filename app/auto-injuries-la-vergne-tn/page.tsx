import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /auto-injuries-la-vergne-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "La Vergne Auto Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/auto-injuries-la-vergne-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/auto-injuries-la-vergne-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"La Vergne Auto Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/auto-injuries-la-vergne-tn/) scaffolded.</p>
      </main>
    </>
  );
}
