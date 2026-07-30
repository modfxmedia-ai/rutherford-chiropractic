import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /neuropathy-woodbury-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Woodbury Neuropathy - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/neuropathy-woodbury-tn/");

export default function Page() {
  const data = getLocationPage("neuropathy-woodbury-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-woodbury-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
