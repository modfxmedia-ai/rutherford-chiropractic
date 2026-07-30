import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogIndexPage } from "../_ui/blog/BlogIndexPage";
import { getAllBlogPosts } from "../_lib/blog";

// Route: /blog/
// Category: blog-index (Blog index)
// Source sitemap: post-sitemap.xml
// Live title: "Our Chiropractic Blog | Natural Health & Pain Care Tips"

export const metadata = metadataFor("/blog/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/blog/")} />
      <BlogIndexPage posts={getAllBlogPosts()} />
    </>
  );
}
