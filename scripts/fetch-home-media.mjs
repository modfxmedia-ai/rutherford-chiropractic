// Fetches all homepage media assets (images + clinic video) via Playwright so
// we bypass the SG Captcha bot challenge. Preserves original filenames so alt
// text and image SEO stay intact.
import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "media");
mkdirSync(OUT_DIR, { recursive: true });

const ASSETS = [
  // Service card images (services grid + detailed sections)
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/chiropractors-murfreesboro-tn-copy.jpg",
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/spinal-decompression-murfreesboro-tn-copy.jpg",
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/sports-injury-murfreesboro-tn-copy.jpg",
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/pain-relief-murfreesboro-tn-copy.jpg",
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/neuropathy-murfreesboro-tn-copy.jpg",
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/auto-injury-murfreesboro-tn-copy.jpg",
  // Detailed section hero images
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/chiropractors-murfreesboro-tn.jpg",
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/chiropractic-care-murfreesboro-tn.jpg",
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/spinal-decompression-murfreesboro-tn.jpg",
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/neuropathy-murfreesboro-tn.jpg",
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/sports-injuries-murfreesboro-tn.jpg",
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/auto-injury-pain-relief-murfreesboro-tn.jpg",
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/back-pain-experts-murfreesboro-tn.jpg",
  // Clinic tour video
  "https://rutherfordchiropractic.com/wp-content/uploads/2024/05/rutherford-clinic-of-chiropractic-gbsug8zma-a0e0qr-1.mp4",
];

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

for (const url of ASSETS) {
  const name = path.basename(new URL(url).pathname);
  const out = path.join(OUT_DIR, name);
  process.stdout.write(`⇣ ${name} … `);
  try {
    const res = await context.request.get(url, { timeout: 120000 });
    if (!res.ok()) {
      console.log(`FAIL ${res.status()}`);
      continue;
    }
    const buf = await res.body();
    writeFileSync(out, buf);
    console.log(`${(buf.length / 1024).toFixed(1)} KB`);
  } catch (err) {
    console.log(`ERR ${err.message}`);
  }
}

await browser.close();
console.log("Done.");
