import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /chiropractic-relief-for-headaches-and-pain/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chiropractic Relief for Headaches and Pain"

export const metadata = metadataFor("/chiropractic-relief-for-headaches-and-pain/");

export default function Page() {
  const post = getBlogPost("chiropractic-relief-for-headaches-and-pain")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-relief-for-headaches-and-pain/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
