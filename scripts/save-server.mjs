// Tiny local HTTP server used ONLY as a one-off dev tool to receive binary
// image bytes POSTed from a Playwright-controlled browser page (which has
// passed the origin's SG Captcha) and write them to disk — avoids shuttling
// large base64 blobs through the chat tool's text output.
import { createServer } from "node:http";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const PORT = 8721;

const server = createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  if (req.method !== "POST") {
    res.writeHead(405);
    res.end("method not allowed");
    return;
  }
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const relPath = url.searchParams.get("path");
  if (!relPath || relPath.includes("..")) {
    res.writeHead(400);
    res.end("bad path");
    return;
  }
  const chunks = [];
  req.on("data", (c) => chunks.push(c));
  req.on("end", () => {
    const buf = Buffer.concat(chunks);
    mkdirSync(dirname(relPath), { recursive: true });
    writeFileSync(relPath, buf);
    console.log(`saved ${relPath} (${buf.length} bytes)`);
    res.writeHead(200);
    res.end("ok");
  });
});

server.listen(PORT, () => {
  console.log(`save-server listening on :${PORT}`);
});
