import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /auto-injuries-murfreesboro-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Murfreesboro Auto Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/auto-injuries-murfreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/auto-injuries-murfreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Murfreesboro Auto Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/auto-injuries-murfreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
