import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /blog/
// Category: blog-index (Blog index)
// Source sitemap: post-sitemap.xml
// Live title: "Our Chiropractic Blog | Natural Health & Pain Care Tips"

export const metadata = metadataFor("/blog/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/blog/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Our Chiropractic Blog | Natural Health & Pain Care Tips"}</h1>
        <p>Blog index route (/blog/) scaffolded.</p>
      </main>
    </>
  );
}
