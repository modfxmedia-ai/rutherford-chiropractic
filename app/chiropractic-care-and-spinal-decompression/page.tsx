import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /chiropractic-care-and-spinal-decompression/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Relieve Pain and Restore Wellness with Chiropractic Care and Spinal Decompression"

export const metadata = metadataFor("/chiropractic-care-and-spinal-decompression/");

export default function Page() {
  const post = getBlogPost("chiropractic-care-and-spinal-decompression")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-care-and-spinal-decompression/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
