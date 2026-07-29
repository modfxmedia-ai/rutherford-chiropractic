import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-care-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chiropractic Care Murfreesboro TN - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-care-murfreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-care-murfreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Chiropractic Care Murfreesboro TN - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/chiropractic-care-murfreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
