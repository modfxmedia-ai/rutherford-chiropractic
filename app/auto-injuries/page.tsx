import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { ServicePageTemplate } from "../_ui/services/ServicePageTemplate";
import { getServicePage } from "../_lib/services";

// Route: /auto-injuries/
// Category: core-service (Core service page)
// Source sitemap: page-sitemap.xml
// Live title: "Auto Injuries - Chiropractic Murfreesboro TN"

const service = getServicePage("auto-injuries");

export const metadata = metadataFor("/auto-injuries/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/auto-injuries/")} />
      <ServicePageTemplate data={service} />
    </>
  );
}
