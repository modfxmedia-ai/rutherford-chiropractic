import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /back-pain-chiropractor-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Back Pain Chiropractor Murfreesboro TN - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/back-pain-chiropractor-murfreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/back-pain-chiropractor-murfreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Back Pain Chiropractor Murfreesboro TN - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/back-pain-chiropractor-murfreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
