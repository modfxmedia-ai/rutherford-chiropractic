// Fetches the client logo via Playwright so it bypasses SG Captcha bot
// challenge (same reason we scraped HTML with Playwright).
import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "brand");
mkdirSync(OUT_DIR, { recursive: true });

const LOGO_URL =
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/cropped-rutherford-spine-wellness-center-murfreesboro-tn.png";

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
});
const page = await context.newPage();
console.log("Warming up on homepage…");
await page.goto("https://rutherfordchiropractic.com/", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
for (let i = 0; i < 15; i++) {
  const html = await page.content().catch(() => "");
  if (html.length > 5000 && !html.includes("sgcaptcha")) break;
  await page.waitForTimeout(1000);
}

console.log("Downloading logo…");
const res = await context.request.get(LOGO_URL);
if (!res.ok()) throw new Error(`Logo download failed: ${res.status()}`);
const buf = await res.body();
const out = path.join(OUT_DIR, "rutherford-logo.png");
writeFileSync(out, buf);
console.log(`Saved ${buf.length} bytes → ${out}`);

await browser.close();
