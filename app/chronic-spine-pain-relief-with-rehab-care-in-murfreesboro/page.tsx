import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /chronic-spine-pain-relief-with-rehab-care-in-murfreesboro/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chronic Spine Pain Relief With Rehab Care in Murfreesboro"

export const metadata = metadataFor("/chronic-spine-pain-relief-with-rehab-care-in-murfreesboro/");

export default function Page() {
  const post = getBlogPost("chronic-spine-pain-relief-with-rehab-care-in-murfreesboro")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chronic-spine-pain-relief-with-rehab-care-in-murfreesboro/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
