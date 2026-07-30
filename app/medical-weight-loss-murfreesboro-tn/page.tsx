import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /medical-weight-loss-murfreesboro-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Medical Weight Loss in Murfreesboro - Your Path to a Healthier You"
export const metadata = metadataFor("/medical-weight-loss-murfreesboro-tn/");

export default function Page() {
  const data = getLocationPage("medical-weight-loss-murfreesboro-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss-murfreesboro-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
