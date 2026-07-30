import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /overcome-runners-knee-with-chiropractic-care/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Overcome Runner’s Knee with Chiropractic Care"

export const metadata = metadataFor("/overcome-runners-knee-with-chiropractic-care/");

export default function Page() {
  const post = getBlogPost("overcome-runners-knee-with-chiropractic-care")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/overcome-runners-knee-with-chiropractic-care/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
