import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /why-one-knee-or-hip-hurts-more-than-the-other-and-the-hidden-alignment-problem-most-people-never-realize/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Why One Knee or Hip Hurts More Than the Other and the Hidden Alignment Problem Most People Never Realize - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/why-one-knee-or-hip-hurts-more-than-the-other-and-the-hidden-alignment-problem-most-people-never-realize/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/why-one-knee-or-hip-hurts-more-than-the-other-and-the-hidden-alignment-problem-most-people-never-realize/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Why One Knee or Hip Hurts More Than the Other and the Hidden Alignment Problem Most People Never Realize - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/why-one-knee-or-hip-hurts-more-than-the-other-and-the-hidden-alignment-problem-most-people-never-realize/) scaffolded.</p>
      </main>
    </>
  );
}
