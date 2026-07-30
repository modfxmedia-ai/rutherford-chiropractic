import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /living-with-neuropathy-7-real-life-hacks-to-make-everyday-tasks-easier-and-less-painful-7/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Living with Neuropathy: 7 Real-Life Hacks to Make Everyday Tasks Easier and Less Painful"

export const metadata = metadataFor("/living-with-neuropathy-7-real-life-hacks-to-make-everyday-tasks-easier-and-less-painful-7/");

export default function Page() {
  const post = getBlogPost("living-with-neuropathy-7-real-life-hacks-to-make-everyday-tasks-easier-and-less-painful-7")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/living-with-neuropathy-7-real-life-hacks-to-make-everyday-tasks-easier-and-less-painful-7/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
