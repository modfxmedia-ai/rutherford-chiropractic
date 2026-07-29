import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /i-just-stood-up-and-my-leg-gave-out-what-sciatica-pain-is-really-telling-you/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "I Just Stood Up and My Leg Gave Out: What Sciatica Pain Is Really Telling You - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/i-just-stood-up-and-my-leg-gave-out-what-sciatica-pain-is-really-telling-you/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/i-just-stood-up-and-my-leg-gave-out-what-sciatica-pain-is-really-telling-you/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"I Just Stood Up and My Leg Gave Out: What Sciatica Pain Is Really Telling You - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/i-just-stood-up-and-my-leg-gave-out-what-sciatica-pain-is-really-telling-you/) scaffolded.</p>
      </main>
    </>
  );
}
