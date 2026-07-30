import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /stop-losing-sleep-the-real-reason-your-shoulder-pain-wont-let-you-rest/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Stop Losing Sleep: The Real Reason Your Shoulder Pain Won’t Let You Rest"

export const metadata = metadataFor("/stop-losing-sleep-the-real-reason-your-shoulder-pain-wont-let-you-rest/");

export default function Page() {
  const post = getBlogPost("stop-losing-sleep-the-real-reason-your-shoulder-pain-wont-let-you-rest")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/stop-losing-sleep-the-real-reason-your-shoulder-pain-wont-let-you-rest/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
