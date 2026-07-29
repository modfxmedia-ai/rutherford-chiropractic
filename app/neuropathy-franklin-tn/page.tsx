import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /neuropathy-franklin-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Franklin Neuropathy - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/neuropathy-franklin-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-franklin-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Franklin Neuropathy - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/neuropathy-franklin-tn/) scaffolded.</p>
      </main>
    </>
  );
}
