// One-off content-generation script (not part of the app runtime).
// Parses the already-scraped WordPress blog HTML in `scraped/html/` and
// produces:
//   - app/_lib/blog-data.json   (lightweight list metadata for index/related)
//   - app/_lib/blog-body.json   (per-slug sanitized body HTML)
//   - scripts/blog-image-manifest.json (remote->local image download list)
//
// Run with: node scripts/extract-blog.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { load } from "cheerio";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// All real routes that exist as folders under app/ (excludes app/_ui, _lib,
// and file-only entries like layout.tsx/page.tsx at the root).
const VALID_SLUGS = new Set(
  readdirSync(path.join(ROOT, "app")).filter((name) => {
    if (name.startsWith("_") || name.startsWith(".")) return false;
    return statSync(path.join(ROOT, "app", name)).isDirectory();
  })
);

const sitemapXml = readFileSync(
  path.join(ROOT, "scraped/sitemaps/post-sitemap.xml"),
  "utf8"
);
const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const contentMap = JSON.parse(
  readFileSync(path.join(ROOT, "content-map.json"), "utf8")
);
const metaByPath = new Map(contentMap.routes.map((r) => [r.path, r.meta]));

const SITE = "https://rutherfordchiropractic.com";

function slugFromUrl(url) {
  const p = url.replace(SITE, "").replace(/^\/|\/$/g, "");
  return p; // "" for homepage, but blog posts always have a slug
}

// Raw `article:section` values seen on the live site that are really the
// same bucket as one of our canonical categories (normalize before falling
// back to keyword-based detection for "Uncategorized" posts).
const RAW_SECTION_ALIASES = {
  Chiropractor: "Chiropractic Care",
  "Sciatica Pain": "Sciatica",
  "Sports Injury": "Sports Injuries",
  "Whiplash Treatment": "Auto Injuries",
};

// Category keyword mapping (site's real taxonomy is mostly "Uncategorized")
const CATEGORY_RULES = [
  [/neuropathy/i, "Neuropathy"],
  [/spinal.decompression/i, "Spinal Decompression"],
  [/sciatica/i, "Sciatica"],
  [/(auto.injur|car.accident|whiplash)/i, "Auto Injuries"],
  [/sports.injur|runner|athlete/i, "Sports Injuries"],
  [/(back.pain|disc|spine|spinal)/i, "Back Pain"],
  [/(neck.pain)/i, "Neck Pain"],
  [/(joint|arthritis)/i, "Joint Health"],
  [/(weight.loss)/i, "Weight Loss"],
];

function friendlyCategory(rawSection, title, slug) {
  if (rawSection && rawSection !== "Uncategorized") {
    return RAW_SECTION_ALIASES[rawSection] || rawSection;
  }
  const hay = `${title} ${slug}`;
  for (const [re, label] of CATEGORY_RULES) {
    if (re.test(hay)) return label;
  }
  return "Chiropractic Care";
}

function rewriteHref(href) {
  if (!href) return href;
  if (href.startsWith("#")) return href;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  if (href.startsWith(SITE) || href.startsWith(SITE.replace("https://", "http://"))) {
    let p = href.replace(/^https?:\/\/rutherfordchiropractic\.com/, "");
    if (p.startsWith("/category/")) return "/blog/";
    if (p.startsWith("/author/")) return "/blog/";
    if (p.startsWith("/tag/")) return "/blog/";
    p = p.split("#")[0].split("?")[0];
    if (p === "" || p === "/") return "/";
    const slug = p.replace(/^\/|\/$/g, "");
    if (!VALID_SLUGS.has(slug)) {
      // Live site sometimes links to numbered duplicate slugs
      // (e.g. "-2"/"-3") for pages that only exist once in this rebuild —
      // fall back to the de-suffixed slug when it resolves to a real route.
      const deSuffixed = slug.replace(/-\d+$/, "");
      if (VALID_SLUGS.has(deSuffixed)) return `/${deSuffixed}/`;
      return "/blog/"; // last-resort fallback so no link 404s
    }
    return `/${slug}/`;
  }
  return href; // external — leave as-is, handled with target=_blank at render
}

function largestFromSrcset(srcset, fallback) {
  if (!srcset) return fallback;
  const candidates = srcset.split(",").map((s) => s.trim().split(" "));
  candidates.sort((a, b) => (parseInt(a[1]) || 0) - (parseInt(b[1]) || 0));
  return candidates[candidates.length - 1]?.[0] || fallback;
}

const imageManifest = [];
const posts = [];
const bodyMap = {};
const externalLinkDomains = new Set();
const unresolvedInternalLinks = new Set();

for (const url of urls) {
  const slug = slugFromUrl(url);
  if (slug === "blog") continue; // index handled separately
  const file = path.join(ROOT, "scraped/html", `_${slug}.html`);
  let html;
  try {
    html = readFileSync(file, "utf8");
  } catch {
    console.error("MISSING HTML for", slug);
    continue;
  }
  const $ = load(html);

  const title = $("h1.entry-title").first().text().trim();
  const publishedTime =
    $('meta[property="article:published_time"]').attr("content") || null;
  const rawSection = $('meta[property="article:section"]').attr("content") || "";
  const category = friendlyCategory(rawSection, title, slug);

  // Featured image: the <img> that sits inside .et_post_meta_wrapper,
  // right after the post-meta paragraph, before .entry-content.
  const featuredImg = $(".et_post_meta_wrapper > img").first();
  let featuredImage = null;
  if (featuredImg.length) {
    const remote = largestFromSrcset(
      featuredImg.attr("srcset"),
      featuredImg.attr("src")
    );
    const alt = featuredImg.attr("alt") || title;
    const ext = path.extname(new URL(remote).pathname) || ".jpg";
    const localPath = `/media/blog/${slug}-featured${ext}`;
    featuredImage = {
      src: localPath,
      alt,
      width: parseInt(featuredImg.attr("width")) || 1080,
      height: parseInt(featuredImg.attr("height")) || 675,
    };
    imageManifest.push({ remote, local: `public${localPath}` });
  }

  const $content = $(".entry-content").first();

  // Rewrite internal links
  $content.find("a[href]").each((_, el) => {
    const $el = $(el);
    const href = $el.attr("href");
    const rewritten = rewriteHref(href);
    $el.attr("href", rewritten);
    if (rewritten.startsWith("http")) {
      try {
        const host = new URL(rewritten).host;
        if (host !== "rutherfordchiropractic.com") {
          externalLinkDomains.add(host);
          $el.attr("target", "_blank");
          $el.attr("rel", "noopener noreferrer");
        }
      } catch {
        /* ignore malformed */
      }
    } else if (rewritten.startsWith("/")) {
      unresolvedInternalLinks.add(rewritten);
    }
  });

  // Rewrite inline body images (rare — a handful of posts)
  let inlineIdx = 0;
  $content.find("img").each((_, el) => {
    const $el = $(el);
    const remote = largestFromSrcset($el.attr("srcset"), $el.attr("src"));
    if (!remote) return;
    inlineIdx += 1;
    const ext = path.extname(new URL(remote).pathname) || ".jpg";
    const localPath = `/media/blog/${slug}-inline-${inlineIdx}${ext}`;
    imageManifest.push({ remote, local: `public${localPath}` });
    $el.attr("src", localPath);
    $el.removeAttr("srcset");
    $el.removeAttr("sizes");
    $el.attr("loading", "lazy");
  });

  const bodyHtml = $content.html()?.trim() || "";
  const textOnly = $content.text().replace(/\s+/g, " ").trim();
  const routePath = `/${slug}/`;
  const excerpt = metaByPath.get(routePath)?.description || textOnly.slice(0, 160);

  posts.push({
    slug,
    path: routePath,
    title,
    category,
    publishedAt: publishedTime,
    featuredImage,
    excerpt,
  });
  bodyMap[slug] = bodyHtml;
}

// Sort newest first (matches sitemap order already, but be explicit)
posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

writeFileSync(
  path.join(ROOT, "app/_lib/blog-data.json"),
  JSON.stringify(posts, null, 2)
);
writeFileSync(
  path.join(ROOT, "app/_lib/blog-body.json"),
  JSON.stringify(bodyMap, null, 2)
);
writeFileSync(
  path.join(ROOT, "scripts/blog-image-manifest.json"),
  JSON.stringify(imageManifest, null, 2)
);

console.log(`Extracted ${posts.length} posts.`);
console.log(`Image manifest: ${imageManifest.length} images.`);
console.log("External link domains:", [...externalLinkDomains]);
console.log(
  "Unresolved internal link samples:",
  [...unresolvedInternalLinks].slice(0, 40)
);
