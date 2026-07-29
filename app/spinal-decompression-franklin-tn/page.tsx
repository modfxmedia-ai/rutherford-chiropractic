import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /spinal-decompression-franklin-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Franklin Spinal Decompression - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/spinal-decompression-franklin-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/spinal-decompression-franklin-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Franklin Spinal Decompression - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/spinal-decompression-franklin-tn/) scaffolded.</p>
      </main>
    </>
  );
}
