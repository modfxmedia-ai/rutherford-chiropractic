import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /everyday-habits-quietly-damage-spine/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Everyday Habits That Quietly Damage Your Spine in Murfreesboro - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/everyday-habits-quietly-damage-spine/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/everyday-habits-quietly-damage-spine/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Everyday Habits That Quietly Damage Your Spine in Murfreesboro - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/everyday-habits-quietly-damage-spine/) scaffolded.</p>
      </main>
    </>
  );
}
