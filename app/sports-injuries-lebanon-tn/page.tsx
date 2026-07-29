import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /sports-injuries-lebanon-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Lebanon Sports Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/sports-injuries-lebanon-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/sports-injuries-lebanon-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Lebanon Sports Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/sports-injuries-lebanon-tn/) scaffolded.</p>
      </main>
    </>
  );
}
