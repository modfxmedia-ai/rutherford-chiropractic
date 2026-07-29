import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /spinal-decompression-in-murfreesboro-a-non-surgical-path-to-real-relief/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Spinal Decompression in Murfreesboro — A Non-Surgical Path to Real Relief - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/spinal-decompression-in-murfreesboro-a-non-surgical-path-to-real-relief/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/spinal-decompression-in-murfreesboro-a-non-surgical-path-to-real-relief/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Spinal Decompression in Murfreesboro — A Non-Surgical Path to Real Relief - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/spinal-decompression-in-murfreesboro-a-non-surgical-path-to-real-relief/) scaffolded.</p>
      </main>
    </>
  );
}
