import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: /the-hidden-link-between-lower-back-problems-and-neuropathy-in-your-feet-and-hands-and-why-no-one-told-you-earlier/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "The Hidden Link Between Lower Back Problems and Neuropathy in Your Feet and Hands (And Why No One Told You Earlier)"

export const metadata = metadataFor("/the-hidden-link-between-lower-back-problems-and-neuropathy-in-your-feet-and-hands-and-why-no-one-told-you-earlier/");

export default function Page() {
  const post = getBlogPost("the-hidden-link-between-lower-back-problems-and-neuropathy-in-your-feet-and-hands-and-why-no-one-told-you-earlier")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/the-hidden-link-between-lower-back-problems-and-neuropathy-in-your-feet-and-hands-and-why-no-one-told-you-earlier/")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
