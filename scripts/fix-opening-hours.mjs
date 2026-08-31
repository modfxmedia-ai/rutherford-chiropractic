// One-off: replace stale "Mon+Fri 09:00-18:00" OpeningHoursSpecification blocks
// baked into content-map.json's scraped JSON-LD with the real schedule
// (Mon-Thu 8am-6pm, Fri 8am-12pm, Sat/Sun closed). Mirrors the pattern
// established by remove-em-dashes.mjs / fix-seo-audit.mjs.
import { readFileSync, writeFileSync } from "node:fs";

const path = new URL("../content-map.json", import.meta.url);
const data = JSON.parse(readFileSync(path, "utf8"));

const NEW_SPEC = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Friday"],
    opens: "08:00",
    closes: "12:00",
  },
];

let count = 0;

function walk(node) {
  if (Array.isArray(node)) {
    node.forEach(walk);
    return;
  }
  if (node && typeof node === "object") {
    for (const key of Object.keys(node)) {
      if (key === "openingHoursSpecification" && Array.isArray(node[key])) {
        node[key] = NEW_SPEC.map((spec) => ({ ...spec }));
        count += 1;
      } else {
        walk(node[key]);
      }
    }
  }
}

walk(data);

writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
console.log(`Updated ${count} openingHoursSpecification blocks.`);
