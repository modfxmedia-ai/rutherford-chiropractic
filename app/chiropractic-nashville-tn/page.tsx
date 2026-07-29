import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /chiropractic-nashville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Chiropractic in Nashville | Find Relief at Rutherford Spine and Wellness Center"

export const metadata = metadataFor("/chiropractic-nashville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-nashville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Chiropractic in Nashville | Find Relief at Rutherford Spine and Wellness Center"}</h1>
        <p>Location landing page route (/chiropractic-nashville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
