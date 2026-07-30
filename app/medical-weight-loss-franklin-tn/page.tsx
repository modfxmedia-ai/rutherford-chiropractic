import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /medical-weight-loss-franklin-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Medical Weight Loss in Franklin | Rutherford Spine and Wellness Center"
export const metadata = metadataFor("/medical-weight-loss-franklin-tn/");

export default function Page() {
  const data = getLocationPage("medical-weight-loss-franklin-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss-franklin-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
