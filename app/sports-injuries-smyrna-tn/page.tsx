import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /sports-injuries-smyrna-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Smyrna Sports Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/sports-injuries-smyrna-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/sports-injuries-smyrna-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Smyrna Sports Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/sports-injuries-smyrna-tn/) scaffolded.</p>
      </main>
    </>
  );
}
