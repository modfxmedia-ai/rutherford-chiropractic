import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /chronic-back-pain-needs-spinal-decompression/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Why Your Chronic Back Pain May Need Spinal Decompression"

export const metadata = metadataFor("/chronic-back-pain-needs-spinal-decompression/");

export default function Page() {
  const post = getBlogPost("chronic-back-pain-needs-spinal-decompression")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chronic-back-pain-needs-spinal-decompression/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
