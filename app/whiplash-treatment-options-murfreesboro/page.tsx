import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /whiplash-treatment-options-murfreesboro/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Understanding Whiplash Treatment Options in Murfreesboro"

export const metadata = metadataFor("/whiplash-treatment-options-murfreesboro/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/whiplash-treatment-options-murfreesboro/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Understanding Whiplash Treatment Options in Murfreesboro"}</h1>
        <p>Blog post route (/whiplash-treatment-options-murfreesboro/) scaffolded.</p>
      </main>
    </>
  );
}
