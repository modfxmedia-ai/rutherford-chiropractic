import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /chiropractic-eagleville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Eagleville Chiropractic - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/chiropractic-eagleville-tn/");

export default function Page() {
  const data = getLocationPage("chiropractic-eagleville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-eagleville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
