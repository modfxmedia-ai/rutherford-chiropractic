import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /overcome-runners-knee-with-chiropractic-care/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Overcome Runner’s Knee with Chiropractic Care"

export const metadata = metadataFor("/overcome-runners-knee-with-chiropractic-care/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/overcome-runners-knee-with-chiropractic-care/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Overcome Runner’s Knee with Chiropractic Care"}</h1>
        <p>Blog post route (/overcome-runners-knee-with-chiropractic-care/) scaffolded.</p>
      </main>
    </>
  );
}
