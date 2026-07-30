import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /first-spinal-decompression-visit/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "First Spinal Decompression Visit in Murfreesboro: What to Expect"

export const metadata = metadataFor("/first-spinal-decompression-visit/");

export default function Page() {
  const post = getBlogPost("first-spinal-decompression-visit")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/first-spinal-decompression-visit/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
