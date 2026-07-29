import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /neuropathy-eagleville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Eagleville Neuropathy - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/neuropathy-eagleville-tn/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-eagleville-tn/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Eagleville Neuropathy - Chiropractic Murfreesboro TN"}</h1>
        <p>Location landing page route (/neuropathy-eagleville-tn/) scaffolded.</p>
      </main>
    </>
  );
}
