import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /first-spinal-decompression-visit/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "First Spinal Decompression Visit Guide in Murfreesboro"

export const metadata = metadataFor("/first-spinal-decompression-visit/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/first-spinal-decompression-visit/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"First Spinal Decompression Visit Guide in Murfreesboro"}</h1>
        <p>Blog post route (/first-spinal-decompression-visit/) scaffolded.</p>
      </main>
    </>
  );
}
