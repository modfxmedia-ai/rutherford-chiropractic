import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /pain-medication-chiropractic-care/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Reducing Reliance on Pain Medication: Chiropractic Care and Safe Tapering - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/pain-medication-chiropractic-care/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/pain-medication-chiropractic-care/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Reducing Reliance on Pain Medication: Chiropractic Care and Safe Tapering - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/pain-medication-chiropractic-care/) scaffolded.</p>
      </main>
    </>
  );
}
