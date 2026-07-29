import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /the-hidden-link-between-lower-back-problems-and-neuropathy-in-your-feet-and-hands-and-why-no-one-told-you-earlier/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "The Hidden Link Between Lower Back Problems and Neuropathy in Your Feet and Hands (And Why No One Told You Earlier) - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/the-hidden-link-between-lower-back-problems-and-neuropathy-in-your-feet-and-hands-and-why-no-one-told-you-earlier/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/the-hidden-link-between-lower-back-problems-and-neuropathy-in-your-feet-and-hands-and-why-no-one-told-you-earlier/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"The Hidden Link Between Lower Back Problems and Neuropathy in Your Feet and Hands (And Why No One Told You Earlier) - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/the-hidden-link-between-lower-back-problems-and-neuropathy-in-your-feet-and-hands-and-why-no-one-told-you-earlier/) scaffolded.</p>
      </main>
    </>
  );
}
