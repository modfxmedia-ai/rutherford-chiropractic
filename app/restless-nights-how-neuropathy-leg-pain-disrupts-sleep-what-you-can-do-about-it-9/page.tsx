import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /restless-nights-how-neuropathy-leg-pain-disrupts-sleep-what-you-can-do-about-it-9/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Restless Nights: How Neuropathy Leg Pain Disrupts Sleep & What You Can Do About It - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/restless-nights-how-neuropathy-leg-pain-disrupts-sleep-what-you-can-do-about-it-9/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/restless-nights-how-neuropathy-leg-pain-disrupts-sleep-what-you-can-do-about-it-9/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Restless Nights: How Neuropathy Leg Pain Disrupts Sleep & What You Can Do About It - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/restless-nights-how-neuropathy-leg-pain-disrupts-sleep-what-you-can-do-about-it-9/) scaffolded.</p>
      </main>
    </>
  );
}
