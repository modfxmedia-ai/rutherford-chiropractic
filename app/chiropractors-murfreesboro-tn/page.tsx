import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /chiropractors-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chiropractors Murfreesboro TN"

export const metadata = metadataFor("/chiropractors-murfreesboro-tn/");

export default function Page() {
  const post = getBlogPost("chiropractors-murfreesboro-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractors-murfreesboro-tn/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
