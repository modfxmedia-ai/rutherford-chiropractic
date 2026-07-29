import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /auto-injury-headaches-and-dizziness/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Auto Injury Headaches and Dizziness: Signs You Need a Chiropractor - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/auto-injury-headaches-and-dizziness/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/auto-injury-headaches-and-dizziness/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Auto Injury Headaches and Dizziness: Signs You Need a Chiropractor - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/auto-injury-headaches-and-dizziness/) scaffolded.</p>
      </main>
    </>
  );
}
