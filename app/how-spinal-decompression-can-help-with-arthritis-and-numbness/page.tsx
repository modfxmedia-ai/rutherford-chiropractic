import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /how-spinal-decompression-can-help-with-arthritis-and-numbness/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "How Spinal Decompression Can Help with Arthritis and Numbness - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/how-spinal-decompression-can-help-with-arthritis-and-numbness/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/how-spinal-decompression-can-help-with-arthritis-and-numbness/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"How Spinal Decompression Can Help with Arthritis and Numbness - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/how-spinal-decompression-can-help-with-arthritis-and-numbness/) scaffolded.</p>
      </main>
    </>
  );
}
