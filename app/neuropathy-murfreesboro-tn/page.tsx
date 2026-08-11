import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /neuropathy-murfreesboro-tn/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Neuropathy Murfreesboro TN"

export const metadata = metadataFor("/neuropathy-murfreesboro-tn/");

export default function Page() {
  const post = getBlogPost("neuropathy-murfreesboro-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-murfreesboro-tn/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
