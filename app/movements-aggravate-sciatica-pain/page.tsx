import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /movements-aggravate-sciatica-pain/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Common Habits That Make Sciatica Pain Worse"

export const metadata = metadataFor("/movements-aggravate-sciatica-pain/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/movements-aggravate-sciatica-pain/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Common Habits That Make Sciatica Pain Worse"}</h1>
        <p>Blog post route (/movements-aggravate-sciatica-pain/) scaffolded.</p>
      </main>
    </>
  );
}
