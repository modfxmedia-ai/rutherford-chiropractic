import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /neuropathy-smyrna-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Smyrna Neuropathy - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/neuropathy-smyrna-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-smyrna-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Smyrna Neuropathy - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/neuropathy-smyrna-tn/) scaffolded.</p>
      </main>
    </>
  );
}
