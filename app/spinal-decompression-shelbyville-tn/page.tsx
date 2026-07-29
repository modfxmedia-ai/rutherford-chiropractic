import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /spinal-decompression-shelbyville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Shelbyville Spinal Decompression - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/spinal-decompression-shelbyville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/spinal-decompression-shelbyville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Shelbyville Spinal Decompression - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/spinal-decompression-shelbyville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
