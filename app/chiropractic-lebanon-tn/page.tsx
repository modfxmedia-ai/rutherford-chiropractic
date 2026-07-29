import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-lebanon-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Lebanon Chiropractic - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-lebanon-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-lebanon-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Lebanon Chiropractic - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/chiropractic-lebanon-tn/) scaffolded.</p>
      </main>
    </>
  );
}
