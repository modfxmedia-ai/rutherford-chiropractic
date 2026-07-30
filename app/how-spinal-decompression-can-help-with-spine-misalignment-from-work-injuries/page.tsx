import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /how-spinal-decompression-can-help-with-spine-misalignment-from-work-injuries/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "How Spinal Decompression Can Help with Spine Misalignment from Work Injuries"

export const metadata = metadataFor("/how-spinal-decompression-can-help-with-spine-misalignment-from-work-injuries/");

export default function Page() {
  const post = getBlogPost("how-spinal-decompression-can-help-with-spine-misalignment-from-work-injuries")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/how-spinal-decompression-can-help-with-spine-misalignment-from-work-injuries/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
