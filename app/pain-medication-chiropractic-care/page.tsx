import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /pain-medication-chiropractic-care/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Reducing Reliance on Pain Medication: Chiropractic Care and Safe Tapering"

export const metadata = metadataFor("/pain-medication-chiropractic-care/");

export default function Page() {
  const post = getBlogPost("pain-medication-chiropractic-care")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/pain-medication-chiropractic-care/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
