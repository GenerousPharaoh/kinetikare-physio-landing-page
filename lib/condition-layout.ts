/**
 * Which condition pages render with the atlas template
 * (components/conditions/atlas/ConditionAtlasPage.tsx) while it is piloted.
 * Everything else keeps ConditionFlowPage. Remove the switch once the atlas
 * template has rolled out to every page.
 */
export const ATLAS_SLUGS = new Set<string>(['patellar-tendinopathy']);

export const usesAtlasLayout = (slug: string) => ATLAS_SLUGS.has(slug);
