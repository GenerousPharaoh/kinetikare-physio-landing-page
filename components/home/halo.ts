/**
 * The halo behind his figures in the home hero: the logo's sun as a
 * low-poly disc, cut in facets like the illustrations (jittered rings of
 * points, each ring joined to the next by a strip of triangles). Warm gold at the centre, cooling to
 * the night's blue at the rim, each facet a touch lighter or darker, lit a
 * little more from the upper left. The facets are grouped by distance from
 * the centre into five bands, each drawn as its own layer: the ripple
 * outward on load and the wave of light at each change are then only the
 * bands' opacity, which the compositor runs (animating each facet repainted
 * the whole disc every frame). `size`: a band's box, as a share of the
 * disc's (its farthest corner from the centre). Seeded, so server and
 * browser agree. Replaced the rays, round 18 ("looks a little tacky").
 */
export const HALO = (() => {
  const R = 500;
  let seed = 11;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const tau = Math.PI * 2;
  const rings: [number, number][][] = [[[0, 0]]];
  for (const [r, n] of [[70, 7], [150, 13], [240, 19], [335, 25], [430, 31], [520, 37]]) {
    const off = rnd() * tau;
    const ring: [number, number][] = [];
    for (let k = 0; k < n; k++) {
      const ang = off + (k / n) * tau + (rnd() - 0.5) * (tau / n) * 0.55;
      const rr = r * (1 + (rnd() - 0.5) * 0.22);
      ring.push([rr * Math.cos(ang), rr * Math.sin(ang)]);
    }
    rings.push(ring);
  }
  // The first ring fans out from the centre (its points are already in
  // order of angle: the jitter is under half a step).
  const tris: [number, number][][] = rings[1].map((p, k) => [[0, 0], p, rings[1][(k + 1) % rings[1].length]]);
  for (let i = 2; i < rings.length; i++) {
    // Walk the inner and outer rings together by angle, from the inner
    // ring's first point, closing a strip of triangles between them.
    const start = Math.atan2(rings[i - 1][0][1], rings[i - 1][0][0]);
    const rel = (p: [number, number]) => (Math.atan2(p[1], p[0]) - start + 3 * tau) % tau;
    const inner = [...rings[i - 1]].sort((p, q) => rel(p) - rel(q));
    const outer = [...rings[i]].sort((p, q) => rel(p) - rel(q));
    const nA = inner.length;
    const nB = outer.length;
    const angA = (k: number) => (k === nA ? tau : rel(inner[k]));
    const angB = (k: number) => (k === nB ? tau + rel(outer[0]) : rel(outer[k]));
    let p = 0;
    let q = 0;
    while (p < nA || q < nB) {
      if (q >= nB || (p < nA && angA(p + 1) <= angB(q + 1))) {
        tris.push([inner[p % nA], outer[q % nB], inner[(p + 1) % nA]]);
        p++;
      } else {
        tris.push([inner[p % nA], outer[q % nB], outer[(q + 1) % nB]]);
        q++;
      }
    }
  }
  const BANDS = [0.3, 0.5, 0.68, 0.84, 1];
  const bands = BANDS.map(() => ({ polys: [] as { points: string; fill: string; a: number }[], reach: 0 }));
  for (const t of tris) {
    const cx = (t[0][0] + t[1][0] + t[2][0]) / 3;
    const cy = (t[0][1] + t[1][1] + t[2][1]) / 3;
    const d = Math.hypot(cx, cy) / R;
    if (d > 1) continue;
    const lift = 1 - (0.18 * (cx + cy)) / (R * 1.4);
    const v = Math.pow(1 - d, 1.6) * lift * (0.78 + rnd() * 0.44);
    const w = Math.max(0, 1 - d * 1.6);
    const mix = (from: number, to: number) => Math.round(from + (to - from) * w);
    const band = bands[BANDS.findIndex((edge) => d < edge)];
    band.polys.push({
      points: t.map(([x, y]) => `${Math.round(x + R)},${Math.round(y + R)}`).join(' '),
      fill: `rgb(${mix(96, 232)},${mix(135, 208)},${mix(190, 156)})`,
      // Drawn at rest at 0.6 opacity (the wave lifts a band to 1).
      a: Math.round(Math.min(1, (0.04 + 0.4 * v) / 0.6) * 1000) / 1000,
    });
    for (const [x, y] of t) band.reach = Math.max(band.reach, Math.abs(x), Math.abs(y));
  }
  return bands.map((b) => {
    const r = Math.ceil(b.reach);
    return { polys: b.polys, viewBox: `${R - r} ${R - r} ${2 * r} ${2 * r}`, size: `${(r / R) * 100}%` };
  });
})();
