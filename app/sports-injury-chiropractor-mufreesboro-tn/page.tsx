import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /sports-injury-chiropractor-mufreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Sports Injury Chiropractor Mufreesboro TN - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/sports-injury-chiropractor-mufreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/sports-injury-chiropractor-mufreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Sports Injury Chiropractor Mufreesboro TN - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/sports-injury-chiropractor-mufreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
