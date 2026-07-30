// Codegen: overwrite each scaffolded blog-post `page.tsx` with the shared
// BlogPostTemplate wiring. Run with: node scripts/generate-blog-pages.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const posts = JSON.parse(
  readFileSync(path.join(ROOT, "app/_lib/blog-data.json"), "utf8")
);

let written = 0;
for (const post of posts) {
  const dir = path.join(ROOT, "app", post.slug);
  const file = path.join(dir, "page.tsx");
  if (!existsSync(file)) {
    console.error("MISSING scaffold for", post.slug);
    continue;
  }
  const content = `import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { BlogPostTemplate } from "../_ui/blog/BlogPostTemplate";
import { getBlogPost } from "../_lib/blog";

// Route: ${post.path}
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: ${JSON.stringify(post.title)}

export const metadata = metadataFor("${post.path}");

export default function Page() {
  const post = getBlogPost("${post.slug}")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("${post.path}")} />
      <BlogPostTemplate post={post} />
    </>
  );
}
`;
  writeFileSync(file, content);
  written += 1;
}

console.log(`Generated ${written}/${posts.length} post pages.`);
