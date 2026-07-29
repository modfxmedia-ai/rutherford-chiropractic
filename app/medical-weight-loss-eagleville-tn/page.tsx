import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /medical-weight-loss-eagleville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Medical Weight Loss in Eagleville | Sustainable Results at Rutherford Spine and Wellness Center"

export const metadata = metadataFor("/medical-weight-loss-eagleville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss-eagleville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Medical Weight Loss in Eagleville | Sustainable Results at Rutherford Spine and Wellness Center"}</h1>
        <p>Location landing page route (/medical-weight-loss-eagleville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
