import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /medical-weight-loss-murfreesboro-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Medical Weight Loss in Murfreesboro - Your Path to a Healthier You"

export const metadata = metadataFor("/medical-weight-loss-murfreesboro-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss-murfreesboro-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Medical Weight Loss in Murfreesboro - Your Path to a Healthier You"}</h1>
        <p>Location landing page route (/medical-weight-loss-murfreesboro-tn/) scaffolded.</p>
      </main>
    </>
  );
}
