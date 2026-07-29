import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /weight-loss-chiropractor-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Weight Loss Chiropractor Murfreesboro TN - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/weight-loss-chiropractor-murfreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/weight-loss-chiropractor-murfreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Weight Loss Chiropractor Murfreesboro TN - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/weight-loss-chiropractor-murfreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
