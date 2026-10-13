// Dumps the rendered treatment-side copy of every condition page as JSON, for
// copy review: evidence snapshot, rehab phases (only where they render), self
// care, clinic techniques, recovery text, research cards and FAQs.
// Usage: node_modules/.bin/jiti scripts/dump-treatment-copy.ts > out.json
import { getAllConditions } from '../lib/conditions-data';
import { getDetailedCondition } from '../lib/detailed-conditions-content';
import { REHAB_PROGRESSION_SLUGS } from '../lib/rehab-progression';

const out = getAllConditions().map((base) => {
  const c = getDetailedCondition(base.slug, base);
  const s = c.evidenceSnapshot;
  return {
    slug: c.slug,
    name: c.name,
    category: c.category,
    snapshot: {
      primary: s?.primaryStrategy || s?.firstLine,
      secondary: s?.secondaryStrategy || s?.imaging,
      prevention: s?.preventionStrategy || s?.management,
    },
    rehab: c.exerciseProgression && REHAB_PROGRESSION_SLUGS.has(c.slug) ? c.exerciseProgression : undefined,
    selfManagement: c.selfManagement,
    techniques: c.treatmentApproach?.techniques,
    prognosis: c.prognosis ? { timeline: c.prognosis.timeline, naturalHistory: c.prognosis.naturalHistory, factors: c.prognosis.factors } : undefined,
    timeline: c.timeline,
    research: (c.keyResearch ?? []).map((r) => ({
      title: r.finding || r.title,
      body: r.detail || r.findings,
      relevance: r.clinicalRelevance || r.relevance,
    })),
    researchInsights: c.researchInsights,
    faqs: c.faqs,
  };
});

console.log(JSON.stringify(out, null, 2));
