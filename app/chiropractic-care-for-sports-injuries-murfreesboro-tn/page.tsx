import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /chiropractic-care-for-sports-injuries-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chiropractic Care for Sports Injuries Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-care-for-sports-injuries-murfreesboro-tn/");

export default function Page() {
  const post = getBlogPost("chiropractic-care-for-sports-injuries-murfreesboro-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-care-for-sports-injuries-murfreesboro-tn/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
