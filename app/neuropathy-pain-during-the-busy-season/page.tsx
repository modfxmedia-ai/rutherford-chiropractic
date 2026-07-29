import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /neuropathy-pain-during-the-busy-season/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Holiday Relief: Managing Neuropathy Pain During the Busy Season - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/neuropathy-pain-during-the-busy-season/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-pain-during-the-busy-season/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Holiday Relief: Managing Neuropathy Pain During the Busy Season - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/neuropathy-pain-during-the-busy-season/) scaffolded.</p>
      </main>
    </>
  );
}
