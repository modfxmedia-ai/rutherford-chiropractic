import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /sciatica-while-driving-seat-setup-posture-treatment/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Sciatica While Driving in Murfreesboro: Seat Setup, Posture, Treatment - Chiropractic Murfreesboro TN"

export const metadata = metadataFor("/sciatica-while-driving-seat-setup-posture-treatment/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/sciatica-while-driving-seat-setup-posture-treatment/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Sciatica While Driving in Murfreesboro: Seat Setup, Posture, Treatment - Chiropractic Murfreesboro TN"}</h1>
        <p>Blog post route (/sciatica-while-driving-seat-setup-posture-treatment/) scaffolded.</p>
      </main>
    </>
  );
}
