import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /medical-weight-loss-franklin-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Medical Weight Loss in Franklin | Rutherford Spine and Wellness Center"

export const metadata = metadataFor("/medical-weight-loss-franklin-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss-franklin-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Medical Weight Loss in Franklin | Rutherford Spine and Wellness Center"}</h1>
        <p>Location landing page route (/medical-weight-loss-franklin-tn/) scaffolded.</p>
      </main>
    </>
  );
}
