import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /when-touch-hurts-coping-with-extreme-sensitivity-from-neuropathy-42/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "When Touch Hurts: Coping with Extreme Sensitivity from Neuropathy - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/when-touch-hurts-coping-with-extreme-sensitivity-from-neuropathy-42/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/when-touch-hurts-coping-with-extreme-sensitivity-from-neuropathy-42/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"When Touch Hurts: Coping with Extreme Sensitivity from Neuropathy - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/when-touch-hurts-coping-with-extreme-sensitivity-from-neuropathy-42/) scaffolded.</p>
      </main>
    </>
  );
}
