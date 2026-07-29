import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /back-pain-relief-woodbury-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Woodbury Back Pain Relief - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/back-pain-relief-woodbury-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/back-pain-relief-woodbury-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Woodbury Back Pain Relief - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/back-pain-relief-woodbury-tn/) scaffolded.</p>
      </main>
    </>
  );
}
