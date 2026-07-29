import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { ContactPage } from "../_ui/utility/ContactPage";

// Route: /contact-us/
// Category: utility (Utility page)
// Source sitemap: page-sitemap.xml
// Live title: "Contact Us | Schedule Your Wellness Appointment Online"

export const metadata = metadataFor("/contact-us/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/contact-us/")} />
      <ContactPage />
    </>
  );
}
