import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /why-your-back-locks-up-when-you-try-to-stand-straight-and-what-its-really-telling-you/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Why Your Back Locks Up When You Try to Stand Straight — And What It’s Really Telling You - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/why-your-back-locks-up-when-you-try-to-stand-straight-and-what-its-really-telling-you/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/why-your-back-locks-up-when-you-try-to-stand-straight-and-what-its-really-telling-you/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Why Your Back Locks Up When You Try to Stand Straight — And What It’s Really Telling You - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/why-your-back-locks-up-when-you-try-to-stand-straight-and-what-its-really-telling-you/) scaffolded.</p>
      </main>
    </>
  );
}
