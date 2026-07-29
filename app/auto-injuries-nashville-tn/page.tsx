import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /auto-injuries-nashville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Nashville Auto Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/auto-injuries-nashville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/auto-injuries-nashville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Nashville Auto Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/auto-injuries-nashville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
