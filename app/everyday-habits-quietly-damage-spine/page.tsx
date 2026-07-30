import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /everyday-habits-quietly-damage-spine/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Everyday Habits That Quietly Damage Your Spine in Murfreesboro"

export const metadata = metadataFor("/everyday-habits-quietly-damage-spine/");

export default function Page() {
  const post = getBlogPost("everyday-habits-quietly-damage-spine")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/everyday-habits-quietly-damage-spine/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
