/**
 * <JsonLd json="..." /> — renders a JSON-LD <script> tag.
 *
 * Usage:
 *   import { JsonLd } from "@/components/JsonLd";
 *   import { buildFeatureSchema } from "@/lib/schema-helpers";
 *
 *   <JsonLd json={buildFeatureSchema({ ... })} />
 *
 * Why separate from the helpers: keeps the schema construction (pure functions,
 * easy to test) separate from the React-only rendering layer. Helpers can be
 * unit-tested without a React tree.
 */
export function JsonLd({ json }: { json: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
