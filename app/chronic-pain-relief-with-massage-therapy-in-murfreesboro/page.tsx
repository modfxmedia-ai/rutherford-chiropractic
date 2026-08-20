import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /chronic-pain-relief-with-massage-therapy-in-murfreesboro/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chronic Pain Relief With Massage Therapy in Murfreesboro"

export const metadata = metadataFor("/chronic-pain-relief-with-massage-therapy-in-murfreesboro/");

export default function Page() {
  const post = getBlogPost("chronic-pain-relief-with-massage-therapy-in-murfreesboro")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chronic-pain-relief-with-massage-therapy-in-murfreesboro/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
