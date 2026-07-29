import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /sports-injuries-franklin-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Franklin Sports Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/sports-injuries-franklin-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/sports-injuries-franklin-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Franklin Sports Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/sports-injuries-franklin-tn/) scaffolded.</p>
      </main>
    </>
  );
}
