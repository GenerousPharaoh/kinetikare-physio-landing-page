"use client";

import React, { useEffect, useRef } from 'react';

/**
 * A running gait cycle drawn as a motion-capture constellation: fourteen
 * joint markers joined by hairlines, computed each frame from joint-angle
 * curves (sagittal plane forward kinematics), with the knees and ankles
 * leaving fading trails so the cycle draws its own arcs.
 *
 * It is the hero's subject: movement analysed, which is the work. No
 * illustration, no photograph of a person, nothing to license. Roughly 3 KB
 * of maths and a canvas.
 *
 * Interaction: cursor x scrubs the phase forward or back by up to a quarter
 * cycle and cursor y tilts the trunk a few degrees; both spring back. It
 * pauses when off screen and renders a single still frame with trails under
 * prefers-reduced-motion.
 */

type Pt = { x: number; y: number };

const TAU = Math.PI * 2;
const rad = (deg: number) => (deg * Math.PI) / 180;

// Joint angle curves for a relaxed run, phase 0..1, one full stride of the
// right leg (0 = right foot strike). Degrees. Positive hip = flexion (thigh
// forward), positive knee = flexion, positive ankle = dorsiflexion.
function hip(p: number) {
  return 28 * Math.cos(TAU * p) - 2;
}
function knee(p: number) {
  const swing = Math.pow((1 - Math.cos(TAU * (p - 0.62))) / 2, 1.9) * 72;
  const stance = 18 * Math.exp(-Math.pow((((p + 0.5) % 1) - 0.5) / 0.09, 2));
  return 12 + swing + stance;
}
function ankle(p: number) {
  return 12 * Math.sin(TAU * (p + 0.1)) - 14 * Math.exp(-Math.pow((((p + 0.62) % 1) - 0.5) / 0.07, 2));
}
function shoulder(p: number) {
  return -30 * Math.cos(TAU * p) + 4;
}
function elbow(p: number) {
  return 78 + 18 * Math.cos(TAU * p);
}

export default function HeroMotionField({ className = '', still = false }: { className?: string; still?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1;
    let raf = 0;
    let running = true;
    let visible = true;
    const start = performance.now();
    const trails: { knee: Pt[]; ankle: Pt[]; kneeL: Pt[]; ankleL: Pt[] } = { knee: [], ankle: [], kneeL: [], ankleL: [] };
    const TRAIL = 70;

    // Cursor influence with a light spring.
    let targetScrub = 0, scrub = 0, targetTilt = 0, tilt = 0, targetGlow = 0, glow = 0;

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.round(r.width));
      h = Math.max(1, Math.round(r.height));
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const io = new IntersectionObserver((entries) => { visible = entries[0]?.isIntersecting ?? true; }, { threshold: 0.02 });
    io.observe(wrap);

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      targetScrub = Math.max(-0.5, Math.min(0.5, nx)) * 0.5;
      targetTilt = Math.max(-0.5, Math.min(0.5, ny)) * 6;
      targetGlow = 1;
    };
    const onLeave = () => { targetScrub = 0; targetTilt = 0; targetGlow = 0; };
    const host = wrap.closest('section') || wrap;
    host.addEventListener('pointermove', onMove as EventListener, { passive: true });
    host.addEventListener('pointerleave', onLeave);

    // Forward kinematics for one phase. Returns joints in canvas px.
    const pose = (p: number, t: number) => {
      const H = h;
      const L = { thigh: 0.17 * H, shank: 0.16 * H, foot: 0.05 * H, trunk: 0.21 * H, upper: 0.12 * H, fore: 0.11 * H, neck: 0.055 * H };
      const cx = w * 0.55;
      const cy = h * 0.46 + 0.018 * H * Math.sin(TAU * 2 * p);
      const lean = rad(9 + tilt);
      const pelvis: Pt = { x: cx, y: cy };
      const chest: Pt = { x: pelvis.x + Math.sin(lean) * L.trunk, y: pelvis.y - Math.cos(lean) * L.trunk };
      const neckTop: Pt = { x: chest.x + Math.sin(lean * 0.6) * L.neck, y: chest.y - Math.cos(lean * 0.6) * L.neck };
      const head: Pt = { x: neckTop.x + Math.sin(lean * 0.6) * 0.04 * H, y: neckTop.y - Math.cos(lean * 0.6) * 0.04 * H };

      const leg = (ph: number) => {
        const hf = rad(hip(ph));
        const kf = rad(knee(ph));
        const af = rad(ankle(ph));
        const thighDir = -Math.PI / 2 + (hf + lean * 0.4) ; // measured from +x, downwards is +PI/2 in canvas
        // Thigh points down (angle PI/2) rotated forward by hip flexion (forward = +x, so subtract).
        const tA = Math.PI / 2 - hf;
        const k: Pt = { x: pelvis.x + Math.cos(tA) * L.thigh, y: pelvis.y + Math.sin(tA) * L.thigh };
        const sA = tA + kf; // knee flexion folds the shank back
        const a: Pt = { x: k.x + Math.cos(sA) * L.shank, y: k.y + Math.sin(sA) * L.shank };
        const fA = sA - Math.PI / 2 + rad(15) - af; // foot roughly perpendicular to the shank
        const toe: Pt = { x: a.x + Math.cos(fA) * L.foot, y: a.y + Math.sin(fA) * L.foot };
        void thighDir;
        return { k, a, toe };
      };
      const arm = (ph: number) => {
        const sf = rad(shoulder(ph));
        const ef = rad(elbow(ph));
        const uA = Math.PI / 2 - sf + lean * 0.5;
        const e: Pt = { x: chest.x + Math.cos(uA) * L.upper, y: chest.y + Math.sin(uA) * L.upper };
        const fA = uA - ef;
        const wr: Pt = { x: e.x + Math.cos(fA) * L.fore, y: e.y + Math.sin(fA) * L.fore };
        return { e, wr };
      };
      const R = leg(p), Lg = leg(p + 0.5);
      const AR = arm(p + 0.5), AL = arm(p);
      void t;
      return { pelvis, chest, neckTop, head, R, Lg, AR, AL };
    };

    const pushTrail = (arr: Pt[], pt: Pt) => { arr.push(pt); if (arr.length > TRAIL) arr.shift(); };

    let lastFrame = 0;
    const draw = (now: number) => {
      const elapsed = (now - start) / 1000;
      const light = w < 700; // phones: softer glow, half the frames
      // Spring the cursor influence.
      scrub += (targetScrub - scrub) * 0.06;
      tilt += (targetTilt - tilt) * 0.06;
      glow += (targetGlow - glow) * 0.05;

      const CYCLE = 2.9; // seconds per stride
      const base = (elapsed / CYCLE) % 1;
      const p = ((base + scrub) % 1 + 1) % 1;
      const intro = Math.min(1, Math.max(0, (elapsed - 0.2) / 1.1)); // markers arrive over ~1.1s
      const linesIn = Math.min(1, Math.max(0, (elapsed - 0.9) / 0.9));

      const J = pose(p, elapsed);
      pushTrail(trails.knee, J.R.k); pushTrail(trails.ankle, J.R.a);
      pushTrail(trails.kneeL, J.Lg.k); pushTrail(trails.ankleL, J.Lg.a);

      ctx.clearRect(0, 0, w, h);

      // Trails: gold, fading along their length.
      const trail = (arr: Pt[], alpha: number) => {
        if (arr.length < 2) return;
        for (let i = 1; i < arr.length; i++) {
          const f = i / arr.length;
          ctx.strokeStyle = `rgba(212,175,55,${(alpha * f * f * linesIn).toFixed(3)})`;
          ctx.lineWidth = 1 + f * 0.6;
          ctx.beginPath();
          ctx.moveTo(arr[i - 1].x, arr[i - 1].y);
          ctx.lineTo(arr[i].x, arr[i].y);
          ctx.stroke();
        }
      };
      trail(trails.kneeL, 0.26); trail(trails.ankleL, 0.32);
      trail(trails.knee, 0.55); trail(trails.ankle, 0.62);

      // Segments.
      const seg = (a: Pt, b: Pt, alpha: number) => {
        ctx.strokeStyle = `rgba(245,230,179,${(alpha * linesIn).toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      };
      // Far side first, dimmer.
      seg(J.pelvis, J.Lg.k, 0.4); seg(J.Lg.k, J.Lg.a, 0.4); seg(J.Lg.a, J.Lg.toe, 0.35);
      seg(J.chest, J.AL.e, 0.4); seg(J.AL.e, J.AL.wr, 0.4);
      seg(J.pelvis, J.chest, 0.9); seg(J.chest, J.neckTop, 0.85);
      seg(J.pelvis, J.R.k, 0.95); seg(J.R.k, J.R.a, 0.95); seg(J.R.a, J.R.toe, 0.85);
      seg(J.chest, J.AR.e, 0.9); seg(J.AR.e, J.AR.wr, 0.9);

      // Markers, arriving in order from the pelvis outward.
      const markers: Array<[Pt, number, number]> = [
        [J.pelvis, 4.4, 0], [J.chest, 3.8, 1], [J.neckTop, 3, 2], [J.head, 5, 3],
        [J.R.k, 4.2, 2], [J.R.a, 3.8, 3], [J.R.toe, 2.8, 4],
        [J.Lg.k, 3.2, 2], [J.Lg.a, 3, 3], [J.Lg.toe, 2.2, 4],
        [J.AR.e, 3.4, 2], [J.AR.wr, 3.2, 3],
        [J.AL.e, 2.8, 2], [J.AL.wr, 2.6, 3],
      ];
      for (const [pt, r, order] of markers) {
        const a = Math.min(1, Math.max(0, intro * 5 - order * 0.9));
        if (a <= 0) continue;
        const pulse = 1 + 0.12 * Math.sin(TAU * (elapsed * 0.6 + order * 0.13));
        ctx.save();
        ctx.shadowColor = `rgba(212,175,55,${(0.55 + glow * 0.3) * a})`;
        ctx.shadowBlur = light ? 8 : 16 + glow * 10;
        ctx.fillStyle = `rgba(245,230,179,${(0.95 * a).toFixed(3)})`;
        ctx.beginPath(); ctx.arc(pt.x, pt.y, r * (light ? 0.8 : 1) * pulse * (0.6 + 0.4 * a), 0, TAU); ctx.fill();
        ctx.restore();
      }
      // The loaded knee gets a ring: the joint under study.
      ctx.strokeStyle = `rgba(212,175,55,${(0.55 * linesIn).toFixed(3)})`;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(J.R.k.x, J.R.k.y, 14 + 2 * Math.sin(TAU * elapsed * 0.5), 0, TAU); ctx.stroke();
    };

    const loop = (now: number) => {
      if (!running) return;
      if (visible && (w >= 700 || now - lastFrame >= 30)) { lastFrame = now; draw(now); }
      raf = requestAnimationFrame(loop);
    };

    if (still) {
      // One considered frame with the trails already laid down.
      const p0 = 0.18;
      for (let i = 0; i < TRAIL; i++) {
        const q = p0 - (TRAIL - i) / TRAIL * 0.9;
        const J = pose(((q % 1) + 1) % 1, 0);
        pushTrail(trails.knee, J.R.k); pushTrail(trails.ankle, J.R.a); pushTrail(trails.kneeL, J.Lg.k); pushTrail(trails.ankleL, J.Lg.a);
      }
      draw(start + 4000 + p0 * 2900);
      running = false;
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener('pointermove', onMove as EventListener);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, [still]);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
