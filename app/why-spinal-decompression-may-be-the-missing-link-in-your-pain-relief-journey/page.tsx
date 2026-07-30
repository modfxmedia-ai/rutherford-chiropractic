import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /why-spinal-decompression-may-be-the-missing-link-in-your-pain-relief-journey/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Why Spinal Decompression May Be the Missing Link in Your Pain Relief Journey"

export const metadata = metadataFor("/why-spinal-decompression-may-be-the-missing-link-in-your-pain-relief-journey/");

export default function Page() {
  const post = getBlogPost("why-spinal-decompression-may-be-the-missing-link-in-your-pain-relief-journey")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/why-spinal-decompression-may-be-the-missing-link-in-your-pain-relief-journey/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
