import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /hidden-joint-pain-triggers/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Hidden Joint Pain Triggers Active Murfreesboro Residents Overlook - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/hidden-joint-pain-triggers/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/hidden-joint-pain-triggers/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Hidden Joint Pain Triggers Active Murfreesboro Residents Overlook - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/hidden-joint-pain-triggers/) scaffolded.</p>
      </main>
    </>
  );
}
