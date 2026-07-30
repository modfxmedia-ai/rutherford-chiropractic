import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /weight-loss-chiropractor-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Weight Loss Chiropractor Murfreesboro TN"

export const metadata = metadataFor("/weight-loss-chiropractor-murfreesboro-tn/");

export default function Page() {
  const post = getBlogPost("weight-loss-chiropractor-murfreesboro-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/weight-loss-chiropractor-murfreesboro-tn/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
