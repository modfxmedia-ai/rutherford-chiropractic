import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /how-spinal-decompression-can-alleviate-pain-from-work-related-injuries/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "How Spinal Decompression Can Alleviate Pain from Work-Related Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/how-spinal-decompression-can-alleviate-pain-from-work-related-injuries/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/how-spinal-decompression-can-alleviate-pain-from-work-related-injuries/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"How Spinal Decompression Can Alleviate Pain from Work-Related Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/how-spinal-decompression-can-alleviate-pain-from-work-related-injuries/) scaffolded.</p>
      </main>
    </>
  );
}
