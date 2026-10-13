// Exports the raw treatment-side fields of the given condition records from
// lib/detailed-conditions-content.ts, for copy review. Paths in the output are
// the same paths scripts/apply-copy-edits.ts accepts.
// Usage: node_modules/.bin/jiti scripts/export-copy-region.ts out.json slug1 slug2 ...
import { writeFileSync } from 'fs';
import { detailedConditionsContent } from '../lib/detailed-conditions-content';
import { getConditionBySlug } from '../lib/conditions-data';
import { REHAB_PROGRESSION_SLUGS, REHAB_SCOPE_NOTES } from '../lib/rehab-progression';

const [outPath, ...slugs] = process.argv.slice(2);
const EDITABLE = [
  'evidenceSnapshot',
  'exerciseProgression',
  'selfManagement',
  'evidenceBasedTreatment',
  'prognosis',
  'timeline',
  'keyResearch',
  'researchInsights',
] as const;
const CONTEXT = ['summary', 'clinicalPresentation', 'clinicalObservations', 'clinicalRedFlags', 'faqs'] as const;

const out = slugs.map((slug) => {
  const d = detailedConditionsContent[slug] as Record<string, unknown> | undefined;
  const base = getConditionBySlug(slug) as unknown as Record<string, unknown> | undefined;
  if (!d || !base) throw new Error(`no record for ${slug}`);
  const editable: Record<string, unknown> = {};
  for (const k of EDITABLE) if (d[k] !== undefined) editable[k] = d[k];
  const context: Record<string, unknown> = { name: base.name };
  for (const k of CONTEXT) if (d[k] !== undefined) context[k] = d[k];
  const baseOnly = EDITABLE.filter((k) => d[k] === undefined && base[k] !== undefined);
  return {
    slug,
    rehabRendered: REHAB_PROGRESSION_SLUGS.has(slug),
    rehabScopeNote: REHAB_SCOPE_NOTES[slug],
    baseOnlyFields: baseOnly,
    editable,
    context,
  };
});

writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(`${out.length} records -> ${outPath}`);
for (const r of out) if (r.baseOnlyFields.length) console.log(`  ${r.slug}: base-only ${r.baseOnlyFields.join(', ')}`);
