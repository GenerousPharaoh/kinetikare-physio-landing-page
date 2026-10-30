// Writes components/home/signature-data.ts: the name's outlines (Herr Von
// Muellerhoff, OFL) plus the traced pen strokes and their timing.
const fs = require('fs'); const opentype = require('opentype.js'); const compact = require('./compact.cjs');
const K = 2; // output units per working unit: whole numbers at this scale are precise enough
const [fontFile, text, strokesFile, outFile, totalMs] = process.argv.slice(2);
const S = 0.25; // raster (600px font) -> output (150px font)
const g = JSON.parse(fs.readFileSync(process.argv[6] || 'name.json', 'utf8'));
const font = opentype.loadSync(fontFile);
const glyphs = font.getPath(text, g.ox * S, g.oy * S, g.SIZE * S, { kerning: true }).toPathData(3);
const { strokes } = JSON.parse(fs.readFileSync(strokesFile, 'utf8'));
function rdp(pts, eps) { if (pts.length < 3) return pts; const a = pts[0], b = pts[pts.length - 1]; const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1; let max = 0, idx = 0;
  for (let i = 1; i < pts.length - 1; i++) { const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + b[0] * a[1] - b[1] * a[0]) / L; if (d > max) { max = d; idx = i; } }
  return max <= eps ? [a, b] : rdp(pts.slice(0, idx + 1), eps).slice(0, -1).concat(rdp(pts.slice(idx), eps)); }
const smooth = (pts, k = 3) => pts.map((p, i) => { if (i === 0 || i === pts.length - 1) return p; let sx = 0, sy = 0, n = 0; for (let j = Math.max(0, i - k); j <= Math.min(pts.length - 1, i + k); j++) { sx += pts[j][0]; sy += pts[j][1]; n++; } return [sx / n, sy / n]; });
const f = (v) => +(v * S).toFixed(2);
function catmull(pts) { if (pts.length === 2) return `M${f(pts[0][0])} ${f(pts[0][1])}L${f(pts[1][0])} ${f(pts[1][1])}`; let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) { const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`; } return d; }
const len = (pts) => pts.slice(1).reduce((s, p, i) => s + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0);
const lens = strokes.map((s) => len(s.pts)); const total = lens.reduce((a, b) => a + b, 0);
let t = 0; const T = Number(totalMs);
const out = strokes.map((s, i) => { const dur = Math.max(30, Math.round((lens[i] / total) * T)); const o = { d: compact(catmull(rdp(smooth(s.pts), 1.2)), K), w: Math.ceil((2 * Math.max(...s.w) + 6) * S * K), at: Math.round(t), ms: dur }; t += (lens[i] / total) * T; return o; });
const W = Math.ceil(g.W * S * K), H = Math.ceil(g.H * S * K);
const ts = `/**
 * Generated: Kareem's name in Herr Von Muellerhoff (SIL Open Font License),
 * as filled outlines, plus a pen path traced through the letters (skeleton of
 * the rendered glyphs, walked left to right, straight on through crossings).
 * Signature.tsx draws the outlines through a mask of these strokes, so the
 * name writes itself in. Regenerate with scripts/signature (see its README)
 * rather than edit by hand.
 */
export const SIGNATURE_VIEWBOX = '0 0 ${W} ${H}';
export const SIGNATURE_GLYPHS = '${compact(glyphs, K)}';
/** d: pen path; w: mask width (covers the stroke); at/ms: start and duration in ms. */
export const SIGNATURE_STROKES: { d: string; w: number; at: number; ms: number }[] = ${JSON.stringify(out)};
export const SIGNATURE_MS = ${T};
`;
fs.writeFileSync(outFile, ts);
console.log('viewBox', W, H, 'bytes', ts.length, 'glyphs', glyphs.length);
