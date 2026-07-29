import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /best-chiropractor-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Best Chiropractor Murfreesboro TN - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/best-chiropractor-murfreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/best-chiropractor-murfreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Best Chiropractor Murfreesboro TN - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/best-chiropractor-murfreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
