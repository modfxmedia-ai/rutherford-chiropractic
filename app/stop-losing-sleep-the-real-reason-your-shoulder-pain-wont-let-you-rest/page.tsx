import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /stop-losing-sleep-the-real-reason-your-shoulder-pain-wont-let-you-rest/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Shoulder Pain Preventing Sleep? Causes and Treatment"

export const metadata = metadataFor("/stop-losing-sleep-the-real-reason-your-shoulder-pain-wont-let-you-rest/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/stop-losing-sleep-the-real-reason-your-shoulder-pain-wont-let-you-rest/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Shoulder Pain Preventing Sleep? Causes and Treatment"}</h1>
        <p>Blog post route (/stop-losing-sleep-the-real-reason-your-shoulder-pain-wont-let-you-rest/) scaffolded.</p>
      </main>
    </>
  );
}
