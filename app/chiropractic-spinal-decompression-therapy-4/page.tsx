import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-spinal-decompression-therapy-4/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chiropractic Spinal Decompression Therapy - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-spinal-decompression-therapy-4/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-spinal-decompression-therapy-4/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Chiropractic Spinal Decompression Therapy - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/chiropractic-spinal-decompression-therapy-4/) scaffolded.</p>
      </main>
    </>
  );
}
