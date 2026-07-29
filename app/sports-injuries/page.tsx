import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { ServicePageTemplate } from "../_ui/services/ServicePageTemplate";
import { getServicePage } from "../_lib/services";

// Route: /sports-injuries/
// Category: core-service (Core service page)
// Source sitemap: page-sitemap.xml
// Live title: "SPORTS INJURIES - Chiropractic Murfreesboro TN"

const service = getServicePage("sports-injuries");

export const metadata = metadataFor("/sports-injuries/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/sports-injuries/")} />
      <ServicePageTemplate data={service} />
    </>
  );
}
