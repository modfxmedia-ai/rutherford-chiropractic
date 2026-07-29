import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The live WordPress site indexes every URL with a trailing slash
  // (e.g. /chiropractic/, /back-pain-relief-nashville-tn/). Preserve that
  // shape 1:1 so we don't force 301s on every existing SERP entry.
  trailingSlash: true,
};

export default nextConfig;
