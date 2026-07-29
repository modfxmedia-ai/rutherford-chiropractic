import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-smyrna-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Chiropractic in Smyrna | Spinal Care & Pain Relief at Rutherford Spine and Wellness Center"

export const metadata = metadataFor("/chiropractic-smyrna-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-smyrna-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Chiropractic in Smyrna | Spinal Care & Pain Relief at Rutherford Spine and Wellness Center"}</h1>
        <p>Location landing page route (/chiropractic-smyrna-tn/) scaffolded.</p>
      </main>
    </>
  );
}
