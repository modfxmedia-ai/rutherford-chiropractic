import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /spinal-decompression-nashville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Nashville Spinal Decompression - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/spinal-decompression-nashville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/spinal-decompression-nashville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Nashville Spinal Decompression - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/spinal-decompression-nashville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
