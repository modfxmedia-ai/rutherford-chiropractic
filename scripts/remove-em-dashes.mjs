// One-off cleanup script: replace every em dash ("—", U+2014) with " - "
// across all RENDERED content in the site (JSON content data + app/ source),
// while leaving code comments untouched (comment lines are skipped via a
// simple heuristic: trimmed line starts with `//`, `/*`, or `*`).
//
// Scope: content-map.json + app/_lib/*.json (blog-data, blog-body,
// locations) get a full replace (pure data, no comments to worry about).
// Every .ts/.tsx under app/ gets a line-by-line replace that skips
// comment-only lines. `scraped/`, `scripts/`, node_modules, .next are
// intentionally NOT touched — they're raw scrape archives / dev tooling,
// not rendered site content.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function replaceDashes(text) {
  return text
    .replace(/\s*—\s*/g, " - ")
    .replace(/\s*\\u2014\s*/g, " - ")
    .replace(/\s*&mdash;\s*/g, " - ")
    .replace(/\s*&#8212;\s*/g, " - ");
}

function hasDash(text) {
  return (
    text.includes("—") ||
    text.includes("\\u2014") ||
    text.includes("&mdash;") ||
    text.includes("&#8212;")
  );
}

function isCommentLine(line) {
  const t = line.trim();
  return (
    t.startsWith("//") ||
    t.startsWith("/*") ||
    t.startsWith("*") ||
    t === ""
  );
}

function processTsFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  if (!hasDash(original)) return false;
  const lines = original.split("\n");
  const next = lines.map((line) =>
    isCommentLine(line) ? line : replaceDashes(line)
  );
  const result = next.join("\n");
  if (result !== original) {
    fs.writeFileSync(filePath, result, "utf8");
    return true;
  }
  return false;
}

function processDataFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  if (!hasDash(original)) return false;
  const result = replaceDashes(original);
  fs.writeFileSync(filePath, result, "utf8");
  return true;
}

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
}

const changed = [];

// Data files (full replace, no comment concept)
for (const rel of [
  "content-map.json",
  "app/_lib/blog-data.json",
  "app/_lib/blog-body.json",
  "app/_lib/locations.json",
]) {
  const full = path.join(root, rel);
  if (fs.existsSync(full) && processDataFile(full)) changed.push(rel);
}

// All app/ .ts/.tsx source files (comment-aware replace)
const tsFiles = [];
walk(path.join(root, "app"), tsFiles);
for (const full of tsFiles) {
  const rel = path.relative(root, full);
  if (processTsFile(full)) changed.push(rel);
}

console.log(`Modified ${changed.length} files:`);
for (const f of changed) console.log(" -", f);
