import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /neuropathy-brentwood-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Brentwood Neuropathy - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/neuropathy-brentwood-tn/");

export default function Page() {
  const data = getLocationPage("neuropathy-brentwood-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-brentwood-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
