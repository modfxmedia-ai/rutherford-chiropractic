import type { JsonLd } from "./content-map";

/**
 * Renders one or more JSON-LD schema blocks that Yoast SEO emitted on the
 * WordPress origin. We preserve them verbatim so search-engine equity is
 * transferred cleanly to the Next.js port.
 */
export function JsonLdBlocks({ blocks }: { blocks: JsonLd[] }) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((block, i) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
