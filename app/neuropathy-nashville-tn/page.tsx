import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /neuropathy-nashville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Nashville Neuropathy - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/neuropathy-nashville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-nashville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Nashville Neuropathy - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/neuropathy-nashville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
