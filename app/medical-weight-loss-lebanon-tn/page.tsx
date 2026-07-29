import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /medical-weight-loss-lebanon-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Lebanon Medical Weight Loss - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/medical-weight-loss-lebanon-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss-lebanon-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Lebanon Medical Weight Loss - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/medical-weight-loss-lebanon-tn/) scaffolded.</p>
      </main>
    </>
  );
}
