import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /best-chiropractor-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Best Chiropractor Murfreesboro TN"

export const metadata = metadataFor("/best-chiropractor-murfreesboro-tn/");

export default function Page() {
  const post = getBlogPost("best-chiropractor-murfreesboro-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/best-chiropractor-murfreesboro-tn/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
