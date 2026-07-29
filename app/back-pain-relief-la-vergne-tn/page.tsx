import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /back-pain-relief-la-vergne-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "La Vergne Back Pain Relief - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/back-pain-relief-la-vergne-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/back-pain-relief-la-vergne-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"La Vergne Back Pain Relief - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/back-pain-relief-la-vergne-tn/) scaffolded.</p>
      </main>
    </>
  );
}
