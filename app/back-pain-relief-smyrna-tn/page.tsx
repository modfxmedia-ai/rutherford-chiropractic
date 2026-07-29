import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /back-pain-relief-smyrna-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Smyrna Back Pain Relief - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/back-pain-relief-smyrna-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/back-pain-relief-smyrna-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Smyrna Back Pain Relief - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/back-pain-relief-smyrna-tn/) scaffolded.</p>
      </main>
    </>
  );
}
