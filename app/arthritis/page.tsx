import { ConditionPageTemplate } from "../_ui/conditions/ConditionPageTemplate";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { conditionMetadata, conditionJsonLd } from "../_lib/conditions-seo";
import { getCondition } from "../_lib/conditions";

// Route: /arthritis/
// Category: condition (new taxonomy, not on the live WordPress origin)

const condition = getCondition("arthritis")!;

export const metadata = conditionMetadata(condition);

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={conditionJsonLd(condition)} />
      <ConditionPageTemplate condition={condition} />
    </>
  );
}
