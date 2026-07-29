import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /sports-injuries-shelbyville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Shelbyville Sports Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/sports-injuries-shelbyville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/sports-injuries-shelbyville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Shelbyville Sports Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/sports-injuries-shelbyville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
