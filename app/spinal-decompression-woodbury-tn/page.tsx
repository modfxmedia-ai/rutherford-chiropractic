import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /spinal-decompression-woodbury-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Woodbury Spinal Decompression - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/spinal-decompression-woodbury-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/spinal-decompression-woodbury-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Woodbury Spinal Decompression - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/spinal-decompression-woodbury-tn/) scaffolded.</p>
      </main>
    </>
  );
}
