import type { Metadata } from "next";
import contentMap from "../../content-map.json";

export type JsonLd = Record<string, unknown>;

export type RouteEntry = {
  path: string;
  url: string;
  lastmod: string | null;
  source: "page" | "post";
  category:
    | "home"
    | "core-service"
    | "utility"
    | "location-landing"
    | "blog-index"
    | "blog-post"
    | "other";
  fetchError: string | null;
  meta: {
    title: string | null;
    description: string | null;
    canonical: string | null;
    robots: string | null;
    openGraph: {
      title: string | null;
      description: string | null;
      image: string | null;
      type: string | null;
    };
    twitter: { card: string | null };
    jsonLd: JsonLd[];
  } | null;
};

const map = contentMap as unknown as {
  generatedAt: string;
  origin: string;
  totals: Record<string, number>;
  routes: RouteEntry[];
  grouped: Record<string, RouteEntry[]>;
};

// Single source of truth for the production origin: prefer the env var (so
// changing domains/Vercel projects only requires an env change) and fall
// back to the scraped content-map value if it's ever unset.
export const ORIGIN = process.env.NEXT_PUBLIC_SITE_URL ?? map.origin;
export const ROUTES = map.routes;

// Sitewide fallback social-share image for any page that has no dedicated
// OG image of its own (e.g. most migrated WordPress routes never had one).
export const DEFAULT_OG_IMAGE = "/media/blog-banner.jpeg";

const byPath = new Map<string, RouteEntry>();
for (const r of ROUTES) byPath.set(r.path, r);

export function getRoute(path: string): RouteEntry {
  const r = byPath.get(path);
  if (!r) throw new Error(`No content-map entry for ${path}`);
  return r;
}

/**
 * Build a Next.js `Metadata` object from a scraped route entry.
 * Preserves the exact live title, description, canonical, OG, and Twitter tags.
 */
export function metadataFor(path: string): Metadata {
  const entry = getRoute(path);
  const m = entry.meta;
  if (!m) return {};
  const ogImage = m.openGraph.image ?? DEFAULT_OG_IMAGE;
  const meta: Metadata = {
    title: m.title ?? undefined,
    description: m.description ?? undefined,
    alternates: m.canonical ? { canonical: m.canonical } : undefined,
    robots: m.robots ?? undefined,
    openGraph: {
      title: m.openGraph.title ?? undefined,
      description: m.openGraph.description ?? undefined,
      url: m.canonical ?? undefined,
      images: [ogImage],
      type:
        (m.openGraph.type as
          | "article"
          | "website"
          | undefined) ?? undefined,
    },
    twitter: m.twitter.card
      ? {
          card: m.twitter.card as "summary" | "summary_large_image",
          title: m.openGraph.title ?? m.title ?? undefined,
          description: m.openGraph.description ?? m.description ?? undefined,
          images: [ogImage],
        }
      : undefined,
  };
  return meta;
}

export function jsonLdFor(path: string): JsonLd[] {
  return getRoute(path).meta?.jsonLd ?? [];
}
