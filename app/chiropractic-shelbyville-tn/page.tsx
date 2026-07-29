import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-shelbyville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Shelbyville Chiropractic - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-shelbyville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-shelbyville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Shelbyville Chiropractic - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/chiropractic-shelbyville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
