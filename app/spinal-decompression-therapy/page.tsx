import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /spinal-decompression-therapy/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Get Relief from Headaches & Migraines with Spinal Decompression Therapy - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/spinal-decompression-therapy/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/spinal-decompression-therapy/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Get Relief from Headaches & Migraines with Spinal Decompression Therapy - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/spinal-decompression-therapy/) scaffolded.</p>
      </main>
    </>
  );
}
