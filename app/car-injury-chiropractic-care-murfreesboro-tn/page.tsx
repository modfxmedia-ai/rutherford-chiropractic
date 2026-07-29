import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /car-injury-chiropractic-care-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Car Injury Chiropractic Care Murfreesboro TN - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/car-injury-chiropractic-care-murfreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/car-injury-chiropractic-care-murfreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Car Injury Chiropractic Care Murfreesboro TN - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/car-injury-chiropractic-care-murfreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
