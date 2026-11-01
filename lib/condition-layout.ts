/**
 * Which condition pages render with the "case" template
 * (components/conditions/case/ConditionCasePage.tsx) while it is piloted.
 * Everything else keeps ConditionFlowPage. Remove the switch once the new
 * template has rolled out to every page.
 */
export const CASE_SLUGS = new Set<string>(['patellar-tendinopathy']);

export const usesCaseLayout = (slug: string) => CASE_SLUGS.has(slug);
