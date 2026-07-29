import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-brentwood-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Brentwood Chiropractic - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/chiropractic-brentwood-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-brentwood-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Brentwood Chiropractic - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/chiropractic-brentwood-tn/) scaffolded.</p>
      </main>
    </>
  );
}
