import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /when-to-see-chiropractor/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chronic Pain? When to See a Chiropractor in Murfreesboro - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/when-to-see-chiropractor/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/when-to-see-chiropractor/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Chronic Pain? When to See a Chiropractor in Murfreesboro - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/when-to-see-chiropractor/) scaffolded.</p>
      </main>
    </>
  );
}
