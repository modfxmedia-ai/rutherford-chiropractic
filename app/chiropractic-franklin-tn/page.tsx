import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-franklin-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Franklin Chiropractic - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-franklin-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-franklin-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Franklin Chiropractic - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/chiropractic-franklin-tn/) scaffolded.</p>
      </main>
    </>
  );
}
