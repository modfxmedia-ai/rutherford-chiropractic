import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /fixing-work-related-spine-misalignment-with-spinal-decompression/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Fixing Work-Related Spine Misalignment with Spinal Decompression - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/fixing-work-related-spine-misalignment-with-spinal-decompression/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/fixing-work-related-spine-misalignment-with-spinal-decompression/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Fixing Work-Related Spine Misalignment with Spinal Decompression - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/fixing-work-related-spine-misalignment-with-spinal-decompression/) scaffolded.</p>
      </main>
    </>
  );
}
