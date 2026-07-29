import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /back-pain-relief-eagleville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Eagleville Back Pain Relief - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/back-pain-relief-eagleville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/back-pain-relief-eagleville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Eagleville Back Pain Relief - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/back-pain-relief-eagleville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
