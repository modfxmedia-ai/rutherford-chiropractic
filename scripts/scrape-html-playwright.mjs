// Playwright-based scraper. The live site is protected by SG Captcha which
// serves a meta-refresh challenge to non-browser clients. We solve it once by
// visiting the site in a real headless Chromium, then reuse the resulting
// cookie state to fetch every URL.
//
// Output: overwrites scraped/html/*.html cache; run scrape-metadata.mjs after.

import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CACHE_DIR = path.join(ROOT, "scraped", "html");
const URL_LIST = path.join(ROOT, "scraped", "sitemaps", "all-urls.txt");
mkdirSync(CACHE_DIR, { recursive: true });

const ORIGIN = "https://rutherfordchiropractic.com";

function cachePath(url) {
  const slug = url.replace(ORIGIN, "").replace(/\/$/, "") || "__root__";
  const safe = slug.replace(/[^a-z0-9._-]/gi, "_");
  return path.join(CACHE_DIR, `${safe}.html`);
}

function isChallengePage(html) {
  return (
    !html ||
    html.length < 500 ||
    html.includes("sgcaptcha") ||
    html.includes("meta http-equiv=\"refresh\"")
  );
}

const urls = readFileSync(URL_LIST, "utf8")
  .split("\n")
  .map((s) => s.trim())
  .filter(Boolean);

const toFetch = urls.filter((u) => {
  const p = cachePath(u);
  if (!existsSync(p)) return true;
  const h = readFileSync(p, "utf8");
  return isChallengePage(h);
});
console.log(`URLs total: ${urls.length}`);
console.log(`Need to (re)fetch: ${toFetch.length}`);
if (toFetch.length === 0) process.exit(0);

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  locale: "en-US",
  viewport: { width: 1280, height: 800 },
});
const page = await context.newPage();

// Warm up + solve challenge on homepage
console.log("Warming up (solving SG Captcha)...");
await page.goto(ORIGIN + "/", { waitUntil: "domcontentloaded", timeout: 60000 });
// Wait for any refresh redirect to complete
for (let i = 0; i < 20; i++) {
  let html = "";
  try {
    html = await page.content();
  } catch {
    await page.waitForTimeout(1500);
    continue;
  }
  if (!isChallengePage(html)) break;
  await page.waitForTimeout(1500);
}
try {
  await page.waitForLoadState("networkidle", { timeout: 10000 });
} catch {}
console.log("Warmed. Cookies:", (await context.cookies()).map((c) => c.name).join(","));

let done = 0;
for (const url of toFetch) {
  done++;
  const out = cachePath(url);
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    let html = "";
    for (let i = 0; i < 10; i++) {
      try {
        html = await page.content();
      } catch {
        await page.waitForTimeout(1000);
        continue;
      }
      if (!isChallengePage(html)) break;
      await page.waitForTimeout(1500);
    }
    if (isChallengePage(html)) {
      console.warn(`[${done}/${toFetch.length}] ! challenge stuck: ${url}`);
    } else {
      writeFileSync(out, html);
      console.log(`[${done}/${toFetch.length}] ok (${html.length}B): ${url}`);
    }
  } catch (e) {
    console.warn(`[${done}/${toFetch.length}] ! ${e.message}: ${url}`);
  }
}

await browser.close();
console.log("Done.");
