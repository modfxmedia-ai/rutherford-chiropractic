import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /neck-pain-after-car-accident-needs-chiropractor/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "When Neck Pain After a Car Accident Means You Need a Chiropractor - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/neck-pain-after-car-accident-needs-chiropractor/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neck-pain-after-car-accident-needs-chiropractor/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"When Neck Pain After a Car Accident Means You Need a Chiropractor - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/neck-pain-after-car-accident-needs-chiropractor/) scaffolded.</p>
      </main>
    </>
  );
}
