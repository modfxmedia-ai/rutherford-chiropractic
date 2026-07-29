import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /why-your-pain-moves-around-one-day-its-your-back-the-next-its-your-leg/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Why Your Pain Moves Around — One Day It’s Your Back, The Next It’s Your Leg - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/why-your-pain-moves-around-one-day-its-your-back-the-next-its-your-leg/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/why-your-pain-moves-around-one-day-its-your-back-the-next-its-your-leg/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Why Your Pain Moves Around — One Day It’s Your Back, The Next It’s Your Leg - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/why-your-pain-moves-around-one-day-its-your-back-the-next-its-your-leg/) scaffolded.</p>
      </main>
    </>
  );
}
