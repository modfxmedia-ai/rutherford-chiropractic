import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /how-neuropathy-affects-your-sleep/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "How Neuropathy Affects Your Sleep and Tips for Better Rest - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/how-neuropathy-affects-your-sleep/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/how-neuropathy-affects-your-sleep/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"How Neuropathy Affects Your Sleep and Tips for Better Rest - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/how-neuropathy-affects-your-sleep/) scaffolded.</p>
      </main>
    </>
  );
}
