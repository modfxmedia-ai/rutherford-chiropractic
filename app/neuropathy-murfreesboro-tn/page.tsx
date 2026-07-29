import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /neuropathy-murfreesboro-tn/
// Category: location-landing (Location landing page)
// Source sitemap: post-sitemap.xml
// Live title: "Neuropathy Murfreesboro TN - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/neuropathy-murfreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-murfreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Neuropathy Murfreesboro TN - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/neuropathy-murfreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
