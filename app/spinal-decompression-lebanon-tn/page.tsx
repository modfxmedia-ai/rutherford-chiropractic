import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /spinal-decompression-lebanon-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Lebanon Spinal Decompression - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/spinal-decompression-lebanon-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/spinal-decompression-lebanon-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Lebanon Spinal Decompression - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/spinal-decompression-lebanon-tn/) scaffolded.</p>
      </main>
    </>
  );
}
