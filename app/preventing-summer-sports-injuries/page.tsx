import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /preventing-summer-sports-injuries/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Summer Sports Injury Prevention Tips in Murfreesboro"

export const metadata = metadataFor("/preventing-summer-sports-injuries/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/preventing-summer-sports-injuries/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Summer Sports Injury Prevention Tips in Murfreesboro"}</h1>
        <p>Blog post route (/preventing-summer-sports-injuries/) scaffolded.</p>
      </main>
    </>
  );
}
