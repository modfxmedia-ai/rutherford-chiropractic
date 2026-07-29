import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chronic-neck-pain-with-spinal-decompression/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Say Goodbye to Chronic Neck Pain with Spinal Decompression - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chronic-neck-pain-with-spinal-decompression/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chronic-neck-pain-with-spinal-decompression/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Say Goodbye to Chronic Neck Pain with Spinal Decompression - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/chronic-neck-pain-with-spinal-decompression/) scaffolded.</p>
      </main>
    </>
  );
}
