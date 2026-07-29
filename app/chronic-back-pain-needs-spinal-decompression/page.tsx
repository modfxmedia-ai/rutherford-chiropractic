import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chronic-back-pain-needs-spinal-decompression/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Spinal Decompression Options for Chronic Back Pain Relief"

export const metadata = metadataFor("/chronic-back-pain-needs-spinal-decompression/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chronic-back-pain-needs-spinal-decompression/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Spinal Decompression Options for Chronic Back Pain Relief"}</h1>
        <p>Blog post route (/chronic-back-pain-needs-spinal-decompression/) scaffolded.</p>
      </main>
    </>
  );
}
