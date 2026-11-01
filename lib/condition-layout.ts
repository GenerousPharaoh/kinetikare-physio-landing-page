/**
 * Every condition page renders with the "case" template
 * (components/conditions/case/ConditionCasePage.tsx) since 2026-10-31.
 * ConditionFlowPage is kept as the fallback behind this switch; set a slug
 * in LEGACY_SLUGS to send one page back to it while a problem is fixed.
 */
export const LEGACY_SLUGS: ReadonlySet<string> = new Set<string>();

export const usesCaseLayout = (slug: string) => !LEGACY_SLUGS.has(slug);
