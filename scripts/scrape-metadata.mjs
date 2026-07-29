// Fetches every URL from the two WordPress sitemaps and extracts
// title / description / canonical / JSON-LD schema blocks so we can
// preserve them 1:1 inside Next.js `generateMetadata` later.
//
// Output: content-map.json at the workspace root.
//
// Usage: node scripts/scrape-metadata.mjs

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SITEMAP_DIR = path.join(ROOT, "scraped", "sitemaps");
const CACHE_DIR = path.join(ROOT, "scraped", "html");
const OUT = path.join(ROOT, "content-map.json");

const ORIGIN = "https://rutherfordchiropractic.com";

// ---------------------------------------------------------------------------
// 1. Parse both sitemaps (url + lastmod)
// ---------------------------------------------------------------------------
function parseSitemap(file, sourceLabel) {
  const xml = readFileSync(file, "utf8");
  const entries = [];
  const urlBlockRegex = /<url>([\s\S]*?)<\/url>/g;
  let m;
  while ((m = urlBlockRegex.exec(xml))) {
    const block = m[1];
    const loc = /<loc>([^<]+)<\/loc>/.exec(block)?.[1];
    const lastmod = /<lastmod>([^<]+)<\/lastmod>/.exec(block)?.[1];
    if (loc) entries.push({ url: loc, lastmod: lastmod ?? null, source: sourceLabel });
  }
  return entries;
}

const pageEntries = parseSitemap(path.join(SITEMAP_DIR, "page-sitemap.xml"), "page");
const postEntries = parseSitemap(path.join(SITEMAP_DIR, "post-sitemap.xml"), "post");
const allEntries = [...pageEntries, ...postEntries];

console.log(`Sitemap page: ${pageEntries.length} URLs`);
console.log(`Sitemap post: ${postEntries.length} URLs`);
console.log(`Total: ${allEntries.length} URLs`);

// ---------------------------------------------------------------------------
// 2. Fetch each URL (with local file cache so re-runs are fast)
// ---------------------------------------------------------------------------
import { mkdirSync } from "node:fs";
mkdirSync(CACHE_DIR, { recursive: true });

function cachePath(url) {
  const slug = url.replace(ORIGIN, "").replace(/\/$/, "") || "__root__";
  const safe = slug.replace(/[^a-z0-9._-]/gi, "_");
  return path.join(CACHE_DIR, `${safe}.html`);
}

async function fetchWithCache(url) {
  const file = cachePath(url);
  if (existsSync(file)) return readFileSync(file, "utf8");
  const res = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "accept-language": "en-US,en;q=0.9",
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  const html = await res.text();
  writeFileSync(file, html);
  return html;
}

// ---------------------------------------------------------------------------
// 3. Extract metadata from HTML
// ---------------------------------------------------------------------------
function decodeEntities(s) {
  if (!s) return s;
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&#8211;/g, "\u2013")
    .replace(/&#8212;/g, "\u2014")
    .replace(/&#([0-9]+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

function pickAttr(tag, attr) {
  const re = new RegExp(`${attr}\\s*=\\s*"([^"]*)"`, "i");
  const m = re.exec(tag);
  return m ? decodeEntities(m[1]) : null;
}

function extract(html) {
  const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  const title = titleMatch ? decodeEntities(titleMatch[1].trim()) : null;

  let description = null;
  let ogTitle = null;
  let ogDescription = null;
  let ogImage = null;
  let ogType = null;
  let twitterCard = null;
  let robots = null;
  let canonical = null;

  const metaRe = /<meta\b[^>]*>/gi;
  let mm;
  while ((mm = metaRe.exec(html))) {
    const tag = mm[0];
    const name = pickAttr(tag, "name")?.toLowerCase();
    const property = pickAttr(tag, "property")?.toLowerCase();
    const content = pickAttr(tag, "content");
    if (!content) continue;
    if (name === "description") description = content;
    else if (name === "robots") robots = content;
    else if (name === "twitter:card") twitterCard = content;
    else if (property === "og:title") ogTitle = content;
    else if (property === "og:description") ogDescription = content;
    else if (property === "og:image") ogImage = content;
    else if (property === "og:type") ogType = content;
  }

  const linkRe = /<link\b[^>]*>/gi;
  let lm;
  while ((lm = linkRe.exec(html))) {
    const tag = lm[0];
    const rel = pickAttr(tag, "rel")?.toLowerCase();
    if (rel === "canonical") {
      canonical = pickAttr(tag, "href");
      break;
    }
  }

  const jsonLdBlocks = [];
  const ldRe =
    /<script\b[^>]*type\s*=\s*"application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let sm;
  while ((sm = ldRe.exec(html))) {
    const raw = sm[1].trim();
    try {
      jsonLdBlocks.push(JSON.parse(raw));
    } catch (e) {
      jsonLdBlocks.push({ __parseError: true, raw });
    }
  }

  return {
    title,
    description,
    canonical,
    robots,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      image: ogImage,
      type: ogType,
    },
    twitter: { card: twitterCard },
    jsonLd: jsonLdBlocks,
  };
}

// ---------------------------------------------------------------------------
// 4. Categorize each URL
// ---------------------------------------------------------------------------
const CORE_SERVICES = [
  "/chiropractic/",
  "/spinal-decompression/",
  "/neuropathy/",
  "/back-pain-relief/",
  "/auto-injuries/",
  "/sports-injuries/",
  "/medical-weight-loss/",
];
const UTILITY = ["/contact-us/", "/financing/", "/new-patients/", "/new-patient-forms/"];
const CITIES = [
  "murfreesboro",
  "nashville",
  "franklin",
  "brentwood",
  "smyrna",
  "la-vergne",
  "lebanon",
  "shelbyville",
  "woodbury",
  "eagleville",
];
const LOCATION_SERVICES = [
  "chiropractic",
  "spinal-decompression",
  "neuropathy",
  "back-pain-relief",
  "auto-injuries",
  "sports-injuries",
  "medical-weight-loss",
];

function categorize(pathname, source) {
  if (pathname === "/") return "home";
  if (CORE_SERVICES.includes(pathname)) return "core-service";
  if (UTILITY.includes(pathname)) return "utility";
  if (pathname === "/blog/") return "blog-index";

  // Location landing? /{service}-{city}-tn/
  const m = /^\/([a-z-]+)-tn\/$/.exec(pathname);
  if (m) {
    const stem = m[1];
    for (const svc of LOCATION_SERVICES) {
      if (stem.startsWith(`${svc}-`)) {
        const city = stem.slice(svc.length + 1);
        if (CITIES.includes(city)) return "location-landing";
      }
    }
  }
  // Anything remaining that came from post-sitemap is a blog post
  if (source === "post") return "blog-post";
  return "other";
}

// ---------------------------------------------------------------------------
// 5. Main
// ---------------------------------------------------------------------------
const routes = [];
let idx = 0;
for (const entry of allEntries) {
  idx++;
  const pathname = entry.url.replace(ORIGIN, "");
  const category = categorize(pathname, entry.source);
  process.stdout.write(`[${idx}/${allEntries.length}] ${pathname} (${category})\n`);

  let meta = null;
  let fetchError = null;
  try {
    const html = await fetchWithCache(entry.url);
    meta = extract(html);
  } catch (e) {
    fetchError = String(e.message || e);
    console.warn(`  ! ${fetchError}`);
  }

  routes.push({
    path: pathname,
    url: entry.url,
    lastmod: entry.lastmod,
    source: entry.source,
    category,
    fetchError,
    meta,
  });
}

// ---------------------------------------------------------------------------
// 6. Group + write
// ---------------------------------------------------------------------------
const grouped = {
  home: [],
  "core-service": [],
  utility: [],
  "location-landing": [],
  "blog-index": [],
  "blog-post": [],
  other: [],
};
for (const r of routes) grouped[r.category].push(r);

const output = {
  generatedAt: new Date().toISOString(),
  origin: ORIGIN,
  totals: {
    all: routes.length,
    ...Object.fromEntries(Object.entries(grouped).map(([k, v]) => [k, v.length])),
  },
  routes,
  grouped,
};

writeFileSync(OUT, JSON.stringify(output, null, 2));
console.log(`\nWrote ${OUT}`);
console.log("Totals:", output.totals);
