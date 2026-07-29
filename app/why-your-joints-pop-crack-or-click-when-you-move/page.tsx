import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /why-your-joints-pop-crack-or-click-when-you-move/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Why Your Joints Pop, Crack, or Click When You Move"

export const metadata = metadataFor("/why-your-joints-pop-crack-or-click-when-you-move/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/why-your-joints-pop-crack-or-click-when-you-move/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Why Your Joints Pop, Crack, or Click When You Move"}</h1>
        <p>Blog post route (/why-your-joints-pop-crack-or-click-when-you-move/) scaffolded.</p>
      </main>
    </>
  );
}
