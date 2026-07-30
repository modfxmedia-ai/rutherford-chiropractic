import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /the-hidden-reason-your-lower-back-pain-makes-your-knees-ache-too/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "The Hidden Reason Your Lower Back Pain Makes Your Knees Ache Too"

export const metadata = metadataFor("/the-hidden-reason-your-lower-back-pain-makes-your-knees-ache-too/");

export default function Page() {
  const post = getBlogPost("the-hidden-reason-your-lower-back-pain-makes-your-knees-ache-too")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/the-hidden-reason-your-lower-back-pain-makes-your-knees-ache-too/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
