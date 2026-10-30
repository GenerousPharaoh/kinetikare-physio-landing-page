// Rewrites absolute path data (M L Q C Z, as opentype.js and emit.cjs write it)
// as relative commands with whole-number deltas, tracking the rounded pen so
// rounding never drifts. Scale multiplies every coordinate first.
module.exports = function compact(d, scale = 1) {
  const toks = d.match(/[MLQCZ]|-?\d*\.?\d+(?:e-?\d+)?/gi);
  let i = 0, out = '', px = 0, py = 0, sx = 0, sy = 0, prev = '';
  const num = () => Number(toks[i++]) * scale;
  const pt = () => { const x = Math.round(num()), y = Math.round(num()); const r = [x - px, y - py]; return { x, y, r }; };
  const fmt = (a) => a.map((v, k) => (k === 0 ? String(v) : (v < 0 ? String(v) : ' ' + v))).join('');
  while (i < toks.length) {
    const c = toks[i++].toUpperCase();
    if (c === 'Z') { out += 'z'; px = sx; py = sy; prev = 'z'; continue; }
    const n = c === 'C' ? 3 : c === 'Q' ? 2 : 1;
    const pts = []; let last;
    const bx = px, by = py;
    for (let k = 0; k < n; k++) { const x = Math.round(num()), y = Math.round(num()); pts.push(x - bx, y - by); last = [x, y]; }
    const cmd = c.toLowerCase();
    const body = fmt(pts);
    out += (cmd === prev && cmd !== 'm' ? (body.startsWith('-') ? '' : ' ') : cmd) + body;
    prev = cmd === 'm' ? 'l' : cmd; // after m, implicit repeats are l
    if (cmd === 'm') { sx = last[0]; sy = last[1]; prev = 'm'; }
    px = last[0]; py = last[1];
  }
  return out;
};
