import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /why-your-joints-pop-crack-or-click-when-you-move/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Why Your Joints Pop, Crack, or Click When You Move"

export const metadata = metadataFor("/why-your-joints-pop-crack-or-click-when-you-move/");

export default function Page() {
  const post = getBlogPost("why-your-joints-pop-crack-or-click-when-you-move")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/why-your-joints-pop-crack-or-click-when-you-move/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
