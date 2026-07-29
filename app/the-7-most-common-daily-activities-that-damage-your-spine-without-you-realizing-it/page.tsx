import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /the-7-most-common-daily-activities-that-damage-your-spine-without-you-realizing-it/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "The 7 Most Common Daily Activities That Damage Your Spine Without You Realizing It - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/the-7-most-common-daily-activities-that-damage-your-spine-without-you-realizing-it/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/the-7-most-common-daily-activities-that-damage-your-spine-without-you-realizing-it/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"The 7 Most Common Daily Activities That Damage Your Spine Without You Realizing It - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/the-7-most-common-daily-activities-that-damage-your-spine-without-you-realizing-it/) scaffolded.</p>
      </main>
    </>
  );
}
