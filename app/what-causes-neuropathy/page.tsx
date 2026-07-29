import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /what-causes-neuropathy/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "What Causes Neuropathy? - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/what-causes-neuropathy/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/what-causes-neuropathy/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"What Causes Neuropathy? - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/what-causes-neuropathy/) scaffolded.</p>
      </main>
    </>
  );
}
