import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /how-spinal-decompression-can-help-with-different-types-of-neuropathy/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "How Spinal Decompression Can Help with Different Types of Neuropathy"

export const metadata = metadataFor("/how-spinal-decompression-can-help-with-different-types-of-neuropathy/");

export default function Page() {
  const post = getBlogPost("how-spinal-decompression-can-help-with-different-types-of-neuropathy")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/how-spinal-decompression-can-help-with-different-types-of-neuropathy/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
