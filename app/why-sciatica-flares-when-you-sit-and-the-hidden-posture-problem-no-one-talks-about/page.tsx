import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /why-sciatica-flares-when-you-sit-and-the-hidden-posture-problem-no-one-talks-about/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Why Sciatica Gets Worse When Sitting: Posture Problems"

export const metadata = metadataFor("/why-sciatica-flares-when-you-sit-and-the-hidden-posture-problem-no-one-talks-about/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/why-sciatica-flares-when-you-sit-and-the-hidden-posture-problem-no-one-talks-about/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Why Sciatica Gets Worse When Sitting: Posture Problems"}</h1>
        <p>Blog post route (/why-sciatica-flares-when-you-sit-and-the-hidden-posture-problem-no-one-talks-about/) scaffolded.</p>
      </main>
    </>
  );
}
