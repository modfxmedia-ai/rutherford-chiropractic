import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /auto-injury-headaches-and-dizziness/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Auto Injury Headaches and Dizziness: Signs You Need a Chiropractor"

export const metadata = metadataFor("/auto-injury-headaches-and-dizziness/");

export default function Page() {
  const post = getBlogPost("auto-injury-headaches-and-dizziness")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/auto-injury-headaches-and-dizziness/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
