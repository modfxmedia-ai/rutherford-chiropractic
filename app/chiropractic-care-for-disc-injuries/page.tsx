import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-care-for-disc-injuries/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chiropractic Care for Disc Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-care-for-disc-injuries/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-care-for-disc-injuries/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Chiropractic Care for Disc Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/chiropractic-care-for-disc-injuries/) scaffolded.</p>
      </main>
    </>
  );
}
