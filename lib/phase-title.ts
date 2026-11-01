/**
 * Rehab phase titles carry their time span in brackets:
 * "Static Holds and Pain Control (Weeks 1 to 4)". Split that into the name
 * and the span, and drop a leading "Phase 1:" so the rendered number is
 * never duplicated.
 */
export function splitPhaseTitle(title: string): { name: string; when?: string } {
  const clean = title.replace(/^\s*phase\s*\d+\s*[:.\-]\s*/i, '').trim();
  const m = clean.match(/^(.*?)\s*\(([^)]*)\)\s*$/);
  if (m) return { name: m[1].trim(), when: m[2].trim() };
  return { name: clean };
}
