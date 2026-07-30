import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /medical-weight-loss-eagleville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Medical Weight Loss in Eagleville | Sustainable Results at Rutherford Spine and Wellness Center"
export const metadata = metadataFor("/medical-weight-loss-eagleville-tn/");

export default function Page() {
  const data = getLocationPage("medical-weight-loss-eagleville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss-eagleville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
