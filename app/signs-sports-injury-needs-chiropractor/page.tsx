import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /signs-sports-injury-needs-chiropractor/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "When to See a Chiropractor for Sports Injuries"

export const metadata = metadataFor("/signs-sports-injury-needs-chiropractor/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/signs-sports-injury-needs-chiropractor/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"When to See a Chiropractor for Sports Injuries"}</h1>
        <p>Blog post route (/signs-sports-injury-needs-chiropractor/) scaffolded.</p>
      </main>
    </>
  );
}
