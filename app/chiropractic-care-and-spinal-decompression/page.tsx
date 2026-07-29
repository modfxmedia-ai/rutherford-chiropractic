import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-care-and-spinal-decompression/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Relieve Pain and Restore Wellness with Chiropractic Care and Spinal Decompression - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-care-and-spinal-decompression/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-care-and-spinal-decompression/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Relieve Pain and Restore Wellness with Chiropractic Care and Spinal Decompression - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/chiropractic-care-and-spinal-decompression/) scaffolded.</p>
      </main>
    </>
  );
}
