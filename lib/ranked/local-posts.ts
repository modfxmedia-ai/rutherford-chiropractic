import { getAllBlogPosts } from '@/app/_lib/blog'
import { DEFAULT_COVER, DEFAULT_COVER_ALT, DEFAULT_CTA } from './config'
import type { BlogPostData } from './types'

/** Existing compiled/MDX posts win on slug collision with Ranked imports. */
export function getLocalBlogPosts(): BlogPostData[] {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    metaDescription: post.excerpt,
    h1: post.title,
    publishDate: (post.publishedAt ?? '').slice(0, 10) || '2020-01-01',
    intro: post.excerpt,
    coverImage: post.featuredImage?.src || DEFAULT_COVER,
    coverAlt: post.featuredImage?.alt || DEFAULT_COVER_ALT,
    sections: [],
    cta: DEFAULT_CTA,
  }))
}
