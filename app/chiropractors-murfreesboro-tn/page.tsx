import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractors-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chiropractors Murfreesboro TN - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chiropractors-murfreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractors-murfreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Chiropractors Murfreesboro TN - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/chiropractors-murfreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
