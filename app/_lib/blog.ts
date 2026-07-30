import blogData from "./blog-data.json";
import blogBody from "./blog-body.json";

export type BlogPostMeta = {
  slug: string;
  path: string;
  title: string;
  category: string;
  publishedAt: string | null;
  featuredImage: { src: string; alt: string; width: number; height: number } | null;
  excerpt: string;
};

const POSTS = blogData as BlogPostMeta[];
const BODY = blogBody as Record<string, string>;

/** All blog posts, newest first (already sorted at extraction time). */
export function getAllBlogPosts(): BlogPostMeta[] {
  return POSTS;
}

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Sanitized body HTML (Gutenberg blocks: headings/paragraphs/links/images),
 * already rewritten so internal links + image srcs point at local routes. */
export function getBlogBodyHtml(slug: string): string {
  return BODY[slug] ?? "";
}

/** Up to `limit` other posts sharing the same category, falling back to the
 * most recent posts if there aren't enough category matches. */
export function getRelatedPosts(
  slug: string,
  category: string,
  limit = 3
): BlogPostMeta[] {
  const sameCategory = POSTS.filter(
    (p) => p.slug !== slug && p.category === category
  );
  const rest = POSTS.filter(
    (p) => p.slug !== slug && p.category !== category
  );
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getAllCategories(): string[] {
  return [...new Set(POSTS.map((p) => p.category))].sort();
}

export function formatBlogDate(iso: string | null): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

/** Rough reading-time estimate (whole minutes, minimum 1) from a body-HTML
 * string, at ~200 words/minute — used in the post hero's meta row. */
export function getReadingTime(bodyHtml: string): number {
  const words = bodyHtml
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
