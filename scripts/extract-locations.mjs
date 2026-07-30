// One-off content-generation script (not part of the app runtime).
// Parses the already-scraped WordPress HTML for the 69 city/service
// "location-landing" pages (see content-map.json) and produces:
//   - app/_lib/locations.json  (structured per-slug content for LocationPageTemplate)
//
// Every one of these live pages renders its main content TWICE back-to-back
// (a verified, byte-for-byte duplicate block — confirmed by diffing the
// "differentiators" <ul> from both halves). This script keeps only the
// FIRST occurrence of each unique <h2> section (stopping the moment a
// heading text repeats) so the extracted content is a clean, de-duplicated
// single copy — not a design change, just dropping an accidental live-site
// render duplication artifact.
//
// Sections are classified by CONTENT, not fixed position — most (56/69)
// pages have 7 unique <h2>s (intro / differentiators+ul / process+ol[+reviews]
// / region / additional-support / FAQ / final-cta), but some service types
// (e.g. sports-injuries) omit the "region/coverage" heading entirely (6
// headings), and a handful of Murfreesboro pages are an older, much shorter
// WordPress template (plain paragraphs only, no differentiators/process/
// FAQ/cta headings at all). Classifying each <h2> block by what it contains
// (has a <ul> => differentiators, has an <ol> => process, has <h3> children
// => FAQ, first block => intro, last block => cta, anything else =>
// generic "extra" section) handles every variant without guessing counts.
//
// A few stray paragraphs with literal "=== MAP_EMBED ===" / "=== FAQ ===" /
// "=== RELATED_SERVICES ===" / "=== FINAL_CTA ===" placeholder text appear
// on the live site itself (not something this repo introduced) — those
// marker-only paragraphs are dropped; any real prose around them (e.g. the
// mileage-to-Murfreesboro sentence) is kept. The auto-generated WordPress
// "The post X appeared first on Y" RSS-excerpt boilerplate (seen on the
// older-template pages) is dropped the same way.
//
// Run with: node scripts/extract-locations.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { load } from "cheerio";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SITE = "https://rutherfordchiropractic.com";

const VALID_SLUGS = new Set(
  readdirSync(path.join(ROOT, "app")).filter((name) => {
    if (name.startsWith("_") || name.startsWith(".")) return false;
    return statSync(path.join(ROOT, "app", name)).isDirectory();
  })
);

const SERVICES = [
  "spinal-decompression",
  "back-pain-relief",
  "medical-weight-loss",
  "auto-injuries",
  "sports-injuries",
  "neuropathy",
  "chiropractic",
];

function parseSlug(slug) {
  const service = SERVICES.find((s) => slug.startsWith(`${s}-`));
  if (!service) return null;
  const cityPart = slug.slice(service.length + 1).replace(/-tn$/, "");
  const city = cityPart
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
  return { service, city };
}

function rewriteHref(href) {
  if (!href) return href;
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  if (href.startsWith(SITE) || href.startsWith(SITE.replace("https://", "http://"))) {
    let p = href.replace(/^https?:\/\/rutherfordchiropractic\.com/, "");
    p = p.split("#")[0].split("?")[0];
    if (p === "" || p === "/") return "/";
    const slug = p.replace(/^\/|\/$/g, "");
    if (!VALID_SLUGS.has(slug)) return "/blog/";
    return `/${slug}/`;
  }
  return href;
}

function rewriteLinksIn($, $el) {
  $el.find("a[href]").each((_, a) => {
    const $a = $(a);
    $a.attr("href", rewriteHref($a.attr("href")));
  });
}

const NOISE_RE = /^\s*===.*===\s*$|^\s*The post .* appeared first on .*\.\s*$|^&nbsp;$|^\s*$/i;
// Some paragraphs interleave marker lines with real prose, joined by <br>
// (e.g. "=== MAP_EMBED ===<br>real sentence<br>=== FINAL_CTA ===", or
// "=== TESTIMONIALS ===<br><!-- no reviews available --><br>=== COVERAGE_AREA ==="
// with no real content at all). Split on <br> and drop any line that's
// marker-only (or an HTML comment) before testing/keeping the rest.
const MARKER_LINE_RE = /^\s*(===.*===|<!--.*-->)\s*$/i;

/** `seenText` is a per-page Set shared across every paragraph list on the
 * page (intro/extra sections/distance/cta) — several of these live pages
 * repeat the exact same 2-3 filler paragraphs verbatim in more than one
 * section (confirmed: e.g. chiropractic-brentwood-tn's intro paragraphs
 * re-appear again right before the final CTA heading). That's a second,
 * smaller-scale content-duplication artifact on the live site (independent
 * from the whole-block repeat this script already drops) — deduping by
 * exact paragraph text keeps every *unique* sentence from the live page
 * while not visibly repeating the same paragraph twice on one rendered page. */
function cleanParagraphs($, els, seenText) {
  const out = [];
  for (const el of els) {
    const $el = $(el);
    rewriteLinksIn($, $el);
    let html = $el.html()?.trim();
    if (!html) continue;
    html = html
      .split(/<br\s*\/?>/i)
      .map((line) => line.trim())
      .filter((line) => line && !MARKER_LINE_RE.test(line))
      .join("<br>")
      .trim();
    if (!html) continue;
    const text = html.replace(/<[^>]+>/g, " ").trim();
    if (!text || NOISE_RE.test(text)) continue;
    if (seenText) {
      const key = text.toLowerCase();
      if (seenText.has(key)) continue;
      seenText.add(key);
    }
    out.push(html);
  }
  return out;
}

/** `<li><strong>Title</strong> – description…</li>` -> {title, html}.
 * Falls back to {html: full li innerHTML} when there's no leading <strong>. */
function parseListItems($, listEl) {
  const items = [];
  $(listEl)
    .find("li")
    .each((_, li) => {
      const $li = $(li);
      rewriteLinksIn($, $li);
      const $strong = $li.find("strong").first();
      if ($strong.length && $li.contents().first().is("strong")) {
        const title = $strong.text().trim();
        const rest = $li.html() || "";
        const afterStrong = rest.slice(rest.indexOf("</strong>") + "</strong>".length);
        const html = afterStrong.replace(/^\s*[–—-]\s*/, "").trim();
        items.push({ title, html });
      } else {
        items.push({ html: ($li.html() || "").trim() });
      }
    });
  return items;
}

function parseReviewsIn($, blockNodes) {
  for (const n of blockNodes) {
    if (n.tag === "div" && $(n.el).hasClass("lpm-reviews-section")) {
      const div = $(n.el);
      const out = [];
      div.find(".lpm-review-card").each((_, card) => {
        const $card = $(card);
        const stars = $card.find(".lpm-star-filled").length;
        const text = $card
          .find(".lpm-review-text")
          .text()
          .trim()
          .replace(/^[“"]|[”"]$/g, "");
        const authorLine = $card.find(".lpm-review-author").clone();
        const date = authorLine.find(".lpm-review-date").text().trim();
        authorLine.find(".lpm-review-date").remove();
        const author = authorLine.text().replace(/^—\s*/, "").trim();
        out.push({ stars, text, author, date });
      });
      return out;
    }
  }
  return undefined;
}

const contentMap = JSON.parse(readFileSync(path.join(ROOT, "content-map.json"), "utf8"));
const routes = contentMap.routes.filter((r) => r.category === "location-landing");

const locations = {};
let ok = 0;
const failed = [];
const shapeStats = { standard: 0, noRegion: 0, legacy: 0 };

for (const route of routes) {
  const slug = route.path.replace(/^\/|\/$/g, "");
  const parsed = parseSlug(slug);
  if (!parsed) {
    failed.push([slug, "unrecognized service prefix"]);
    continue;
  }
  const file = path.join(ROOT, "scraped/html", `_${slug}.html`);
  let html;
  try {
    html = readFileSync(file, "utf8");
  } catch {
    failed.push([slug, "missing scraped HTML"]);
    continue;
  }
  const $ = load(html);
  const content = $(".entry-content").first();
  if (!content.length) {
    failed.push([slug, "no .entry-content"]);
    continue;
  }
  const h1 = $("h1.entry-title").first().text().trim();

  // Split into blocks at each *unique* h2 (stop at the first repeated
  // heading text — that's where the live page's duplicate render begins).
  const kids = content.children().toArray();
  const seenHeadings = new Set();
  const blocks = []; // { heading, nodes: [{tag, el}] }
  let current = null;
  for (const el of kids) {
    if (el.tagName === "h2") {
      const text = $(el).text().trim();
      if (seenHeadings.has(text)) break;
      seenHeadings.add(text);
      current = { heading: text, nodes: [] };
      blocks.push(current);
      continue;
    }
    // Content before the first h2 (rare) is treated as part of an implicit
    // intro block so nothing is silently dropped.
    if (!current) {
      current = { heading: "", nodes: [] };
      blocks.push(current);
    }
    current.nodes.push({ tag: el.tagName, el });
  }

  const seenParagraphText = new Set();
  const hasTag = (nodes, tag) => nodes.some((n) => n.tag === tag);

  const introBlock = blocks[0];
  const differentiatorsBlock = blocks.find((b) => hasTag(b.nodes, "ul"));
  const processBlock = blocks.find((b) => hasTag(b.nodes, "ol"));
  const faqBlock = blocks.find((b) => hasTag(b.nodes, "h3"));
  const ctaBlock =
    blocks.length > 1 && blocks[blocks.length - 1] !== faqBlock
      ? blocks[blocks.length - 1]
      : undefined;
  const claimed = new Set([introBlock, differentiatorsBlock, processBlock, faqBlock, ctaBlock]);
  const extraSections = blocks
    .filter((b) => b !== introBlock && !claimed.has(b))
    .map((b) => ({
      heading: b.heading,
      paragraphs: cleanParagraphs(
        $,
        b.nodes.filter((n) => n.tag === "p").map((n) => n.el),
        seenParagraphText
      ),
    }))
    .filter((s) => s.paragraphs.length > 0);

  const introParagraphs = cleanParagraphs(
    $,
    introBlock.nodes.filter((n) => n.tag === "p").map((n) => n.el),
    seenParagraphText
  );

  function listFrom(block) {
    if (!block) return { ordered: false, items: [] };
    const node = block.nodes.find((n) => n.tag === "ul" || n.tag === "ol");
    if (!node) return { ordered: false, items: [] };
    return { ordered: node.tag === "ol", items: parseListItems($, node.el) };
  }

  const faqItems = [];
  let lastFaqAnswerPos = -1;
  if (faqBlock) {
    const nodes = faqBlock.nodes;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].tag === "h3") {
        const question = $(nodes[i].el).text().trim();
        const answerNode = nodes[i + 1]?.tag === "p" ? nodes[i + 1].el : null;
        if (answerNode) {
          rewriteLinksIn($, $(answerNode));
          const answerHtml = $(answerNode).html()?.trim() || "";
          faqItems.push({ question, answer: answerHtml });
          lastFaqAnswerPos = i + 1;
        }
      }
    }
  }

  // Trailing paragraphs in the FAQ block after the last Q/A pair (the
  // "mileage from Murfreesboro" sentence, plus marker-only noise dropped by
  // cleanParagraphs).
  const distanceParagraphs = faqBlock
    ? cleanParagraphs(
        $,
        faqBlock.nodes
          .slice(lastFaqAnswerPos + 1)
          .filter((n) => n.tag === "p")
          .map((n) => n.el),
        seenParagraphText
      )
    : [];

  const ctaParagraphs = ctaBlock
    ? cleanParagraphs(
        $,
        ctaBlock.nodes.filter((n) => n.tag === "p").map((n) => n.el),
        seenParagraphText
      )
    : [];

  const reviews = processBlock ? parseReviewsIn($, processBlock.nodes) : undefined;

  locations[slug] = {
    slug,
    service: parsed.service,
    city: parsed.city,
    h1,
    intro: { heading: introBlock.heading, paragraphs: introParagraphs },
    differentiators: {
      heading: differentiatorsBlock?.heading || "",
      list: listFrom(differentiatorsBlock),
    },
    process: {
      heading: processBlock?.heading || "",
      list: listFrom(processBlock),
      reviews,
    },
    extraSections,
    faq: { heading: faqBlock?.heading || "", items: faqItems },
    distanceParagraphs,
    cta: { heading: ctaBlock?.heading || "", paragraphs: ctaParagraphs },
  };

  if (!differentiatorsBlock && !processBlock && !faqBlock) shapeStats.legacy += 1;
  else if (extraSections.length === 0) shapeStats.noRegion += 1;
  else shapeStats.standard += 1;

  ok += 1;
}

writeFileSync(path.join(ROOT, "app/_lib/locations.json"), JSON.stringify(locations, null, 2));

console.log(`Extracted ${ok}/${routes.length} location pages.`);
console.log("Shape breakdown:", shapeStats);
if (failed.length) {
  console.log("Failed:", failed);
}
