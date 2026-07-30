import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /chiropractic-spinal-decompression-therapy-4/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chiropractic Spinal Decompression Therapy"

export const metadata = metadataFor("/chiropractic-spinal-decompression-therapy-4/");

export default function Page() {
  const post = getBlogPost("chiropractic-spinal-decompression-therapy-4")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-spinal-decompression-therapy-4/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
