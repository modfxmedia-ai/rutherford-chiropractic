import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-murfreesboro-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Murfreesboro Chiropractic - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-murfreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-murfreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Murfreesboro Chiropractic - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/chiropractic-murfreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
