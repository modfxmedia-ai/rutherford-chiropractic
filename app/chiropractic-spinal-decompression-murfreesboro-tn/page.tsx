import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-spinal-decompression-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chiropractic Spinal Decompression Murfreesboro TN - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-spinal-decompression-murfreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-spinal-decompression-murfreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Chiropractic Spinal Decompression Murfreesboro TN - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/chiropractic-spinal-decompression-murfreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
