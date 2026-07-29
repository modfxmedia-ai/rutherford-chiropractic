import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /sports-injuries-eagleville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Eagleville Sports Injuries - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/sports-injuries-eagleville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/sports-injuries-eagleville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Eagleville Sports Injuries - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/sports-injuries-eagleville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
