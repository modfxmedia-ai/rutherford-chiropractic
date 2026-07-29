import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /auto-injuries-shelbyville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Shelbyville Auto Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/auto-injuries-shelbyville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/auto-injuries-shelbyville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Shelbyville Auto Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/auto-injuries-shelbyville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
