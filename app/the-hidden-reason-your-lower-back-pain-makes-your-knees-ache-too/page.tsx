import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /the-hidden-reason-your-lower-back-pain-makes-your-knees-ache-too/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "The Hidden Reason Your Lower Back Pain Makes Your Knees Ache Too - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/the-hidden-reason-your-lower-back-pain-makes-your-knees-ache-too/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/the-hidden-reason-your-lower-back-pain-makes-your-knees-ache-too/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"The Hidden Reason Your Lower Back Pain Makes Your Knees Ache Too - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/the-hidden-reason-your-lower-back-pain-makes-your-knees-ache-too/) scaffolded.</p>
      </main>
    </>
  );
}
