import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /spinal-decompression-in-murfreesboro-a-non-surgical-path-to-real-relief/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Spinal Decompression in Murfreesboro - A Non-Surgical Path to Real Relief"

export const metadata = metadataFor("/spinal-decompression-in-murfreesboro-a-non-surgical-path-to-real-relief/");

export default function Page() {
  const post = getBlogPost("spinal-decompression-in-murfreesboro-a-non-surgical-path-to-real-relief")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/spinal-decompression-in-murfreesboro-a-non-surgical-path-to-real-relief/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
