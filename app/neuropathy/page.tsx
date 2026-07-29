import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { ServicePageTemplate } from "../_ui/services/ServicePageTemplate";
import { getServicePage } from "../_lib/services";

// Route: /neuropathy/
// Category: core-service (Core service page)
// Source sitemap: page-sitemap.xml
// Live title: "Neuropathy in Murfreesboro | Nerve Pain Relief & Therapy"

const service = getServicePage("neuropathy");

export const metadata = metadataFor("/neuropathy/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy/")} />
      <ServicePageTemplate data={service} />
    </>
  );
}
