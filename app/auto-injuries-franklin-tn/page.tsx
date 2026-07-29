import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /auto-injuries-franklin-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Franklin Auto Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/auto-injuries-franklin-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/auto-injuries-franklin-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Franklin Auto Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/auto-injuries-franklin-tn/) scaffolded.</p>
      </main>
    </>
  );
}
