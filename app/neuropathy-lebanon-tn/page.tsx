import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /neuropathy-lebanon-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Lebanon Neuropathy - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/neuropathy-lebanon-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-lebanon-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Lebanon Neuropathy - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/neuropathy-lebanon-tn/) scaffolded.</p>
      </main>
    </>
  );
}
