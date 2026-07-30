import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /when-to-see-chiropractor/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Chronic Pain? When to See a Chiropractor in Murfreesboro"

export const metadata = metadataFor("/when-to-see-chiropractor/");

export default function Page() {
  const post = getBlogPost("when-to-see-chiropractor")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/when-to-see-chiropractor/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
