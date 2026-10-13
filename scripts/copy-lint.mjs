// Checks patient-facing copy against the site's wording rules (CLAUDE.md,
// "Content review rules"). Reads either an edits file for
// scripts/apply-copy-edits.ts (checks every `new` string) or any JSON file
// (checks every string in it).
// Usage: node scripts/copy-lint.mjs file.json [more.json ...]
import { readFileSync } from 'fs';

const ERRORS = [
  [/—|–/, 'em or en dash'],
  [/\s-\s/, '" - " used as a dash'],
  [/\bspeciali[sz](t|ts|ed|ing|es)\b/i, 'specialist wording'],
  [/\bexpert\b/i, '"expert"'],
  [/\bmanipulat/i, '"manipulation" (write joint mobilization)'],
  [/\b(proven|gold standard|superior|cutting[- ]edge|state[- ]of[- ]the[- ]art)\b/i, 'efficacy or marketing claim'],
  [/\beffective(ly|ness)?\b/i, '"effective" (write can help / may help)'],
  [/\b(almost everyone|never lasts|the one thing|the key is|real culprit|actually changes|reframe)\b/i, 'categorical claim'],
  [/\b(we|our|us)\b/i, 'we/us/our'],
  [/\bconservative (care|management|treatment)/i, '"conservative care" (write non-surgical care)'],
  [/\b(SMD|RCTs?|WOMAC|VAS|KOOS|NPRS|95% CI|CI:|p\s*[=<]\s*0)/, 'statistics or abbreviation a patient will not know'],
  [/\bI order (an? )?(MRI|X-ray|imaging|scan|ultrasound)/i, 'Kareem cannot order imaging'],
];
const WARNINGS = [
  [/\badvanced\b/i, '"advanced" (fine for disease stage, never for his practice)'],
  [/\b(ESWT|NSAIDs?|PRP|EMG|MRI|DOMS|ROM)\b/, 'abbreviation: spell out on first use'],
  [/\b(eccentric|isometric|concentric|proprioception|neuromuscular|closed[- ]chain|open[- ]chain|plyometric|frontal[- ]plane|kinetic chain|loading capacity)\b/i, 'jargon: plain words first, term in brackets'],
  [/\b(always|never|guarantee)/i, 'check for a categorical claim'],
  [/\d+-\d+/, 'number range with a hyphen (write 6 to 12)'],
];

let errors = 0;
let warnings = 0;
for (const file of process.argv.slice(2)) {
  const data = JSON.parse(readFileSync(file, 'utf8'));
  const isEdits = Array.isArray(data) && data.every((e) => e && typeof e.slug === 'string' && typeof e.path === 'string');
  const strings = [];
  const walk = (v, where) => {
    if (typeof v === 'string') strings.push([where, v]);
    else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${where}[${i}]`));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, where ? `${where}.${k}` : k);
  };
  if (isEdits) {
    for (const e of data) {
      if (typeof e.new === 'string' && typeof e.old !== 'string') {
        console.log(`ERROR ${e.slug} ${e.path}: string edit without "old"`);
        errors++;
      }
      if (e.op !== 'remove') walk(e.new, `${e.slug} ${e.path}`);
      if (/selfManagement$/.test(e.path) && Array.isArray(e.new)) {
        for (const [i, item] of e.new.entries()) {
          for (const t of [item.rationale, ...(item.precautions ?? [])]) {
            if (t && !/[.!?]$/.test(t.trim())) {
              console.log(`ERROR ${e.slug} selfManagement[${i}]: "${t.slice(0, 60)}" does not end with a full stop`);
              errors++;
            }
          }
        }
      }
    }
  } else walk(data, '');
  for (const [where, s] of strings) {
    for (const [re, label] of ERRORS) {
      const m = re.exec(s);
      if (m) {
        console.log(`ERROR ${where}: ${label}: "...${s.slice(Math.max(0, m.index - 40), m.index + 40)}..."`);
        errors++;
      }
    }
    for (const [re, label] of WARNINGS) {
      const m = re.exec(s);
      if (m) {
        console.log(`warn  ${where}: ${label}: "...${s.slice(Math.max(0, m.index - 40), m.index + 40)}..."`);
        warnings++;
      }
    }
  }
}
console.log(`${errors} errors, ${warnings} warnings`);
process.exit(errors ? 1 : 0);
