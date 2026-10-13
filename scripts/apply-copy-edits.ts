// Applies copy edits to lib/detailed-conditions-content.ts by field path, so a
// reviewer can work from exported JSON (scripts/export-copy-region.ts) instead
// of hand-editing the 15,000-line source.
//
// Edits file: a JSON array of
//   { "slug": "meniscus-tears", "path": "evidenceSnapshot.primaryStrategy", "old": "...", "new": "..." }
//   { "slug": "...", "path": "selfManagement", "new": [ { "strategy": "...", "rationale": "..." } ] }
//   { "slug": "...", "path": "keyResearch[2]", "op": "remove" }
// A string edit must carry `old`, which has to equal the current value, so a
// stale or mistyped path is refused rather than written. A missing key at the
// end of a path is inserted into its object.
//
// Usage:
//   node_modules/.bin/jiti scripts/apply-copy-edits.ts edits.json [more.json ...]
//   node_modules/.bin/jiti scripts/apply-copy-edits.ts --verify edits.json [...]
//   node_modules/.bin/jiti scripts/apply-copy-edits.ts --dry edits.json [...]   (check only, writes nothing)
import { readFileSync, writeFileSync } from 'fs';

type Edit = { slug: string; path: string; old?: unknown; new?: unknown; op?: 'set' | 'remove' };
type Child = { key: string | null; start: number; valStart: number };

const FILE = 'lib/detailed-conditions-content.ts';
const args = process.argv.slice(2);
const verify = args[0] === '--verify';
const dry = args[0] === '--dry';
const files = verify || dry ? args.slice(1) : args;
const edits: Edit[] = files.flatMap((f) => JSON.parse(readFileSync(f, 'utf8')) as Edit[]);

function parsePath(path: string): Array<string | number> {
  const segs: Array<string | number> = [];
  for (const part of path.split('.')) {
    const m = /^([A-Za-z_$][\w$-]*)?((?:\[\d+\])*)$/.exec(part);
    if (!m) throw new Error(`bad path segment "${part}" in ${path}`);
    if (m[1]) segs.push(m[1]);
    for (const idx of Array.from(m[2].matchAll(/\[(\d+)\]/g))) segs.push(Number(idx[1]));
  }
  return segs;
}

if (verify) {
  // Separate process from the apply run, so the module is loaded fresh.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { detailedConditionsContent } = require('../lib/detailed-conditions-content');
  let bad = 0;
  for (const e of edits) {
    let v: unknown = detailedConditionsContent[e.slug];
    for (const seg of parsePath(e.path)) v = v == null ? undefined : (v as Record<string | number, unknown>)[seg];
    if (e.op === 'remove') continue;
    if (JSON.stringify(v) !== JSON.stringify(e.new)) {
      bad++;
      console.log(`MISMATCH ${e.slug} ${e.path}`);
    }
  }
  console.log(`verify: ${edits.length - bad} of ${edits.length} edits read back as written`);
  process.exit(bad ? 1 : 0);
}

let src = readFileSync(FILE, 'utf8');

function skipWs(s: string, i: number): number {
  for (;;) {
    if (/\s/.test(s[i] ?? '')) i++;
    else if (s.startsWith('//', i)) {
      const n = s.indexOf('\n', i);
      i = n < 0 ? s.length : n;
    } else if (s.startsWith('/*', i)) i = s.indexOf('*/', i) + 2;
    else return i;
  }
}

function skipString(s: string, i: number): number {
  const q = s[i];
  for (i++; i < s.length; i++) {
    if (s[i] === '\\') i++;
    else if (s[i] === q) return i + 1;
  }
  throw new Error('unterminated string');
}

// End (exclusive) of the value starting at i: stops at a depth-0 comma or at
// the container's closing bracket.
function skipValue(s: string, i: number): number {
  let depth = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === '"' || c === "'" || c === '`') { i = skipString(s, i); continue; }
    if (s.startsWith('//', i) || s.startsWith('/*', i)) { i = skipWs(s, i); continue; }
    if (c === '{' || c === '[' || c === '(') depth++;
    else if (c === '}' || c === ']' || c === ')') {
      if (depth === 0) return i;
      depth--;
    } else if (c === ',' && depth === 0) return i;
    i++;
  }
  return i;
}

function children(s: string, open: number): { items: Child[]; close: number } {
  const isObj = s[open] === '{';
  const items: Child[] = [];
  let i = open + 1;
  for (;;) {
    i = skipWs(s, i);
    if (s[i] === '}' || s[i] === ']') return { items, close: i };
    const start = i;
    let key: string | null = null;
    let valStart = i;
    if (isObj && !s.startsWith('...', i)) {
      let keyEnd: number;
      if (s[i] === '"' || s[i] === "'") {
        keyEnd = skipString(s, i);
        key = s.slice(i + 1, keyEnd - 1);
      } else {
        key = /^[A-Za-z_$][\w$]*/.exec(s.slice(i, i + 200))![0];
        keyEnd = i + key.length;
      }
      const j = skipWs(s, keyEnd);
      valStart = s[j] === ':' ? skipWs(s, j + 1) : start;
    }
    items.push({ key, start, valStart });
    i = skipValue(s, valStart);
    if (s[i] === ',') i++;
  }
}

// End (exclusive) of a value, without trailing whitespace or comments.
function valueEnd(s: string, valStart: number): number {
  const c = s[valStart];
  if (c === '{' || c === '[') return children(s, valStart).close + 1;
  if (c === '"' || c === "'" || c === '`') return skipString(s, valStart);
  let e = skipValue(s, valStart);
  while (/\s/.test(s[e - 1])) e--;
  return e;
}

function indentAt(s: string, i: number): string {
  const lineStart = s.lastIndexOf('\n', i - 1) + 1;
  return /^[ \t]*/.exec(s.slice(lineStart))![0];
}

function fmt(v: unknown, ind: string): string {
  if (typeof v === 'string') return JSON.stringify(v);
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  const inner = ind + '  ';
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    const inline = `[${v.map((x) => fmt(x, inner)).join(', ')}]`;
    if (v.every((x) => typeof x === 'string') && inline.length + ind.length < 110) return inline;
    return `[\n${v.map((x) => inner + fmt(x, inner)).join(',\n')}\n${ind}]`;
  }
  if (v && typeof v === 'object') {
    const entries = Object.entries(v as Record<string, unknown>).filter(([, x]) => x !== undefined);
    const key = (k: string) => (/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k));
    return `{\n${entries.map(([k, x]) => `${inner}${key(k)}: ${fmt(x, inner)}`).join(',\n')}\n${ind}}`;
  }
  throw new Error(`cannot format ${typeof v}`);
}

function recordStart(s: string, slug: string): number {
  const decl = s.indexOf('export const detailedConditionsContent');
  const open = s.indexOf('{', s.indexOf('=', decl));
  const rec = children(s, open).items.find((c) => c.key === slug);
  if (!rec) throw new Error(`no record ${slug}`);
  return rec.valStart;
}

function apply(e: Edit): void {
  const segs = parsePath(e.path);
  let pos = recordStart(src, e.slug);
  for (let k = 0; k < segs.length; k++) {
    const seg = segs[k];
    const last = k === segs.length - 1;
    const { items, close } = children(src, pos);
    const child = typeof seg === 'number' ? items[seg] : items.find((c) => c.key === seg);
    if (!child) {
      if (!last || typeof seg === 'number' || e.op === 'remove' || src[pos] !== '{') {
        throw new Error(`path not found at "${seg}"`);
      }
      const prev = items[items.length - 1];
      const at = prev ? valueEnd(src, prev.valStart) : pos + 1;
      const ind = prev ? indentAt(src, prev.start) : indentAt(src, pos) + '  ';
      src = `${src.slice(0, at)}${prev ? ',' : ''}\n${ind}${seg}: ${fmt(e.new, ind)}${src.slice(at)}`;
      void close;
      return;
    }
    if (!last) { pos = child.valStart; continue; }

    if (e.op === 'remove') {
      if (typeof seg !== 'number') throw new Error('remove takes an array index');
      const next = items[seg + 1];
      const prev = items[seg - 1];
      if (next) src = src.slice(0, child.start) + src.slice(next.start);
      else if (prev) src = src.slice(0, valueEnd(src, prev.valStart)) + src.slice(valueEnd(src, child.valStart));
      else src = src.slice(0, child.start) + src.slice(valueEnd(src, child.valStart));
      return;
    }

    const end = valueEnd(src, child.valStart);
    const literal = src.slice(child.valStart, end);
    if (typeof e.new === 'string') {
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      const current = new Function(`return ${literal}`)();
      if (current !== e.old) throw new Error(`old text does not match the current value`);
    }
    src = src.slice(0, child.valStart) + fmt(e.new, indentAt(src, child.start)) + src.slice(end);
  }
}

// Removals run last, highest index first, so they never shift the index of
// another edit in the same array.
const lastIndex = (e: Edit) => Number(/\[(\d+)\]$/.exec(e.path)?.[1] ?? -1);
const ordered = [
  ...edits.filter((e) => e.op !== 'remove'),
  ...edits.filter((e) => e.op === 'remove').sort((a, b) => lastIndex(b) - lastIndex(a)),
];

let ok = 0;
const failures: string[] = [];
for (const e of ordered) {
  try {
    apply(e);
    ok++;
  } catch (err) {
    failures.push(`${e.slug} ${e.path}: ${(err as Error).message}`);
  }
}
if (!dry) writeFileSync(FILE, src);
console.log(`${dry ? 'dry run: would apply' : 'applied'} ${ok} of ${edits.length} edits`);
for (const f of failures) console.log(`  FAILED ${f}`);
process.exit(failures.length ? 1 : 0);
