import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /chiropractic-spinal-decompression-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chiropractic Spinal Decompression Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-spinal-decompression-murfreesboro-tn/");

export default function Page() {
  const post = getBlogPost("chiropractic-spinal-decompression-murfreesboro-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-spinal-decompression-murfreesboro-tn/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
