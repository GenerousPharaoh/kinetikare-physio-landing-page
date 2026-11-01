/**
 * Checks every condition page served by a local production server against
 * its data: the page responds, uses the case template, carries one H1 with
 * the condition name, and renders a section for every block the data has
 * (symptoms, clinic note, warning signs, treatment, self-care items, FAQs,
 * science, each study). Run after `npm run build` and `next start -p 4040`:
 *
 *   node_modules/.bin/jiti scripts/case-template-check.ts [baseUrl]
 */
import { getAllConditions } from '../lib/conditions-data';
import { getDetailedCondition } from '../lib/detailed-conditions-content';

const base = process.argv[2] ?? 'http://127.0.0.1:4040';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');

const has = (html: string, text: string) => html.includes(escapeHtml(text)) || html.includes(text);

async function main() {
  const conditions = getAllConditions();
  const failures: string[] = [] as string[];
  let ok = 0;
  for (const base_ of conditions) {
    const c = getDetailedCondition(base_.slug, base_);
    const url = `${base}/conditions/${c.slug}`;
    const res = await fetch(url);
    const html = await res.text();
    const problems: string[] = [] as string[];
    if (res.status !== 200) problems.push(`status ${res.status}`);
    if (!html.includes('data-case-page')) problems.push('not the case template');
    const h1s = html.match(/<h1\b[^>]*>/g) ?? [];
    if (h1s.length !== 1) problems.push(`${h1s.length} h1 elements`);
    if (!has(html, c.name)) problems.push('name missing');
    const expectSection = (cond: unknown, id: string) => {
      if (cond && !html.includes(`id="${id}"`)) problems.push(`section #${id} missing`);
    };
    expectSection(c.clinicalPresentation, 'symptoms');
    expectSection(c.clinicalObservations?.body, 'in-clinic');
    expectSection((c.clinicalRedFlags?.length || c.redFlags?.length || c.whenToSeek?.length), 'red-flags');
    expectSection(c.evidenceSnapshot || c.selfManagement || c.treatmentApproach, 'treatment');
    expectSection(c.prognosis || c.timeline?.length, 'recovery');
    expectSection(c.differentialDiagnosis?.length, 'similar');
    expectSection(c.faqs?.length, 'faqs');
    expectSection(c.pathophysiology || c.overview || c.biomechanics, 'science');
    expectSection(c.keyResearch?.length || c.researchInsights?.length, 'research');
    for (const item of c.selfManagement ?? []) if (!has(html, item.strategy)) problems.push(`self-care missing: ${item.strategy.slice(0, 40)}`);
    for (const faq of c.faqs ?? []) if (!has(html, faq.question)) problems.push(`faq missing: ${faq.question.slice(0, 40)}`);
    for (const r of c.keyResearch ?? []) {
      const t = r.finding || r.title;
      if (t && !has(html, t)) problems.push(`study missing: ${t.slice(0, 40)}`);
    }
    for (const d of c.differentialDiagnosis ?? []) if (!has(html, d.condition)) problems.push(`differential missing: ${d.condition}`);
    for (const s of c.clinicalPresentation?.primarySymptoms ?? []) if (!has(html, s)) problems.push(`symptom missing: ${s.slice(0, 40)}`);
    for (const f of c.clinicalRedFlags ?? []) if (!has(html, f.sign)) problems.push(`red flag missing: ${f.sign.slice(0, 40)}`);
    const sources: string[] = html.match(/data-booking-source="[a-z_]+"/g) ?? [];
    for (const s of ['condition_intro', 'condition_footer', 'condition_rail']) {
      if (!sources.includes(`data-booking-source="${s}"`)) problems.push(`booking source ${s} missing`);
    }
    if (problems.length) failures.push(`${c.slug}: ${problems.join('; ')}`);
    else ok++;
  }
  console.log(`${ok}/${conditions.length} pages pass`);
  for (const f of failures) console.log('FAIL', f);
  if (failures.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
