'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { m as motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { GOOGLE_REVIEW_TOTAL } from '@/lib/reviews';
import Arrow from './Arrow';
import { HALO } from './halo';
import styles from './Home.module.css';

const BRAND = 'Kinetikare';

/**
 * Kareem's illustrations (his own, made in ChatGPT, October 2026), in the
 * order they play: never two shoulder scenes in a row (four of the twelve
 * are), and the three with a patient lying on the table at least three
 * apart, the loop included. Each sits bottom-centre in the same box. The
 * first must draw largest in the box (0.86 wide to tall): a later figure
 * that painted larger would be counted as the page's largest paint, seconds
 * after load (measured: a leg scene at 0.84 overtook a 0.875 opener 20s in).
 * The hip flexion is cut to exactly 0.86, so it fills the box; keep every
 * other figure at least 2% smaller, narrower than 0.843 or wider than
 * 0.877. (The seated shoulder assessment that opened until 2026-10-31 came
 * out: Kareem saw what looked like an extra hand.) `fade`: the edges where the scene runs off its
 * picture (b, l, r), which fade out instead of ending in a hard line.
 * `aspect`: the exported picture's width over height (it places the fades
 * on the picture).
 */
const ART: { src: string; aspect: number; label: string; fade?: string }[] = [
  { src: '/images/hero-art/kareem-hip-flexion.webp', aspect: 0.86, label: 'bending the hip and knee of a patient lying on the table', fade: 'blr' },
  { src: '/images/hero-art/kareem-band-row.webp', aspect: 0.743, label: 'pulling a resistance band in a split stance', fade: 'r' },
  { src: '/images/hero-art/kareem-shoulder-stretch.webp', aspect: 0.82, label: 'guiding a patient through a shoulder stretch', fade: 'br' },
  { src: '/images/hero-art/kareem-consultation.webp', aspect: 0.815, label: 'going over a plan with a patient on a tablet', fade: 'lr' },
  { src: '/images/hero-art/kareem-step-up.webp', aspect: 0.522, label: 'stepping up onto a box' },
  { src: '/images/hero-art/kareem-knee-flexion.webp', aspect: 0.839, label: 'holding a patient’s knee and ankle to bend the leg on the table', fade: 'blr' },
  { src: '/images/hero-art/kareem-shoulder-elevation.webp', aspect: 0.569, label: 'raising a standing patient’s arm while feeling the shoulder blade' },
  { src: '/images/hero-art/kareem-kettlebell-deadlift.webp', aspect: 0.693, label: 'lifting a kettlebell from the floor' },
  { src: '/images/hero-art/kareem-shoulder-check-standing.webp', aspect: 0.598, label: 'checking a standing patient’s shoulder movement' },
  { src: '/images/hero-art/kareem-leg-assessment.webp', aspect: 0.841, label: 'assessing the hip and knee of a patient lying on the table', fade: 'blr' },
  { src: '/images/hero-art/kareem-shoulder-mobility.webp', aspect: 0.8, label: 'moving a patient’s arm overhead', fade: 'br' },
  { src: '/images/hero-art/kareem-sit-to-stand.webp', aspect: 0.805, label: 'helping a patient stand up from the table', fade: 'r' },
];

/** The mask that fades a figure's cut edges (see `fade` above). */
const edgeFade = (fade?: string): CSSProperties | undefined => {
  if (!fade) return undefined;
  const parts: string[] = [];
  if (fade.includes('b')) parts.push('linear-gradient(to top, transparent 0%, #000 18%)');
  const l = fade.includes('l');
  const r = fade.includes('r');
  if (l || r) {
    parts.push(`linear-gradient(to right, ${l ? 'transparent 0%, #000 12%' : '#000 0%'}, ${r ? '#000 88%, transparent 100%' : '#000 100%'})`);
  }
  const mask = parts.join(', ');
  return parts.length > 1
    ? { maskImage: mask, WebkitMaskImage: mask, maskComposite: 'intersect', WebkitMaskComposite: 'source-in' }
    : { maskImage: mask, WebkitMaskImage: mask };
};

/** The art box in viewBox units (about the widest figure's shape). */
const BOX_W = 860;
const BOX_H = 1000;

/**
 * The facets for a change of figure: the box cut into an irregular mesh of
 * triangles, like the low-poly illustrations themselves (a grid whose inner
 * points are nudged at random; neighbours share corners). The next figure
 * assembles facet by facet in a sweep from the floor up. Each facet scales
 * about its own centroid and ends a touch over full size, so neighbours
 * overlap and no seam shows. Seeded, so server and browser agree.
 */
const FACETS = (() => {
  const cols = 6;
  const rows = 7;
  const cw = BOX_W / cols;
  const rh = BOX_H / rows;
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const pt: [number, number][][] = [];
  for (let r = 0; r <= rows; r++) {
    pt.push([]);
    for (let c = 0; c <= cols; c++) {
      const inner = r > 0 && r < rows && c > 0 && c < cols;
      pt[r].push([
        Math.round(c * cw + (inner ? (rnd() - 0.5) * cw * 0.7 : 0)),
        Math.round(r * rh + (inner ? (rnd() - 0.5) * rh * 0.7 : 0)),
      ]);
    }
  }
  const out: { points: string; origin: string; delay: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const [a, b, d, e] = [pt[r][c], pt[r][c + 1], pt[r + 1][c], pt[r + 1][c + 1]];
      const tris = (r + c) % 2 === 0 ? [[a, b, d], [b, e, d]] : [[a, b, e], [a, e, d]];
      const sweep = (c / (cols - 1)) * 0.45 + ((rows - 1 - r) / (rows - 1)) * 0.55;
      for (const t of tris) {
        const cx = Math.round((t[0][0] + t[1][0] + t[2][0]) / 3);
        const cy = Math.round((t[0][1] + t[1][1] + t[2][1]) / 3);
        out.push({
          points: t.map(([x, y]) => `${x},${y}`).join(' '),
          origin: `${cx}px ${cy}px`,
          delay: Math.round(sweep * 520 + rnd() * 120),
        });
      }
    }
  }
  return out;
})();

/** One figure's URL through the image optimizer, at a width for the screen. */
const artUrl = (src: string, width: number) => `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;

/**
 * A figure drawn through its own facet mask (every change after the first).
 * Hidden until its turn; it is mounted a turn ahead so its image loads.
 */
function FacetLayer({ index, state, width, onLoad }: { index: number; state?: 'in' | 'out'; width: number; onLoad: () => void }) {
  const id = `hero-facets-${index}`;
  const { src, aspect, fade = '' } = ART[index];
  // The figure's own rectangle, bottom-centre in the box, so the edge fades
  // sit exactly on its picture's cut edges. Drawn at 97.5%, too small to see,
  // so no figure after the first ever paints larger than it (the first
  // figure is the page's largest paint; even its own copy coming round
  // again a minute later measured a little larger at full size).
  const tall = aspect <= BOX_W / BOX_H;
  const fit = 0.975;
  const w = (tall ? BOX_H * aspect : BOX_W) * fit;
  const h = (tall ? BOX_H : BOX_W / aspect) * fit;
  const l = fade.includes('l');
  const r = fade.includes('r');
  const image = (
    <image href={artUrl(src, width)} x={(BOX_W - w) / 2} y={BOX_H - h} width={w} height={h} preserveAspectRatio="none" mask={`url(#${id})`} onLoad={onLoad} />
  );
  const sides = l || r ? <g mask={`url(#${id}-h)`}>{image}</g> : image;
  return (
    <div className={`${styles.artLayer} ${styles.facetLayer}`} data-state={state} aria-hidden="true">
      <svg viewBox={`0 0 ${BOX_W} ${BOX_H}`} preserveAspectRatio="xMidYMax meet">
        <defs>
          <mask id={id} maskUnits="userSpaceOnUse" x="-60" y="-60" width={BOX_W + 120} height={BOX_H + 120}>
            {FACETS.map((f, i) => (
              <polygon key={i} className={styles.facet} points={f.points} style={{ transformOrigin: f.origin, '--d': `${f.delay}ms` } as CSSProperties} />
            ))}
          </mask>
          {fade.includes('b') && (
            <>
              <linearGradient id={`${id}-vg`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0.82" stopColor="#fff" />
                <stop offset="1" stopColor="#000" />
              </linearGradient>
              <mask id={`${id}-v`} maskContentUnits="objectBoundingBox">
                <rect width="1" height="1" fill={`url(#${id}-vg)`} />
              </mask>
            </>
          )}
          {(l || r) && (
            <>
              <linearGradient id={`${id}-hg`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor={l ? '#000' : '#fff'} />
                <stop offset="0.12" stopColor="#fff" />
                <stop offset="0.88" stopColor="#fff" />
                <stop offset="1" stopColor={r ? '#000' : '#fff'} />
              </linearGradient>
              <mask id={`${id}-h`} maskContentUnits="objectBoundingBox">
                <rect width="1" height="1" fill={`url(#${id}-hg)`} />
              </mask>
            </>
          )}
        </defs>
        {fade.includes('b') ? <g mask={`url(#${id}-v)`}>{sides}</g> : sides}
      </svg>
    </div>
  );
}

/** How long each figure holds before the next assembles, after the first. */
const HOLD_MS = 3600;
const FIRST_HOLD_MS = 4600;
/** The opening's extra time on a full page load (--shift in the CSS). */
const INTRO_SHIFT_MS = 1000;

const Stars = () => (
  <span className={styles.heroStars} aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8z" />
      </svg>
    ))}
  </span>
);

/**
 * The opening screen, set like a poster: KINETIKARE in wide bold capitals
 * running up the left edge (on phones across the figure's feet), PHYSIO in
 * small spaced gold capitals beside it, both in front of the art; his
 * illustrations taking turns in front of a low-poly halo; on the right the
 * slogan, the science in tracked capitals and the art in gold italic, then
 * his name and title, the booking and the rating.
 *
 * Motion (load and scroll only; Kareem did not want anything moving with the
 * mouse, 2026-10-29):
 * - Opening, on a full page load (CSS, runs before hydration): in the dark
 *   room KINETIKARE rises letter by letter at the centre, large, like a
 *   title card; then it moves into its place (a quarter turn onto the left
 *   edge; down to the figure's feet on phones) as the halo lights up and
 *   the first figure rises from the floor; then the slogan, his name, the
 *   booking and the rating. Arriving from another page of the site, the
 *   same entrance plays without the opening.
 * - Then every few seconds the next figure assembles from low-poly facets,
 *   sweeping up from the floor, while the last fades away beneath it and a
 *   wave of light runs out across the halo
 *   (paused while the hero is off screen or the tab is hidden; never with
 *   reduced motion, which shows the first figure). Round 11's facets
 *   glitched (seams flashed as a figure left, shards spun); these overlap,
 *   barely turn, and the leaving figure only fades.
 * - Scroll: the hero is sticky and the atlas rises over it like a curtain;
 *   meanwhile the art pushes in and the masthead lifts away.
 */
export default function HomeHero({ reviewers = [] }: { reviewers?: string[] }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // One screen of scroll is the distance in which the atlas covers the hero.
  const span = typeof window === 'undefined' ? 800 : window.innerHeight;
  const still = Boolean(reduce);
  const mastY = useTransform(scrollY, [0, span], ['0%', still ? '0%' : '-60%']);
  const coverY = useTransform(scrollY, [0, span], ['0%', still ? '0%' : '30%']);
  const artScale = useTransform(scrollY, [0, span], [1, still ? 1 : 1.1]);
  const shade = useTransform(scrollY, [0, span], [0, 0.6]);

  // The sequence: which figure is showing, which is leaving, and how many
  // changes there have been (none: the first figure plays its entrance).
  const [seq, setSeq] = useState({ cur: 0, prev: -1, count: 0 });
  // The first figure is a plain image (the page's largest paint); every
  // change after it is a facet layer. Only the showing, leaving and next
  // layers are mounted; the next is fetched a turn ahead, from the moment
  // the page has settled, and joins only once loaded.
  const [later, setLater] = useState(false);
  const [artWidth, setArtWidth] = useState(1080);
  const loaded = useRef<boolean[]>(ART.map(() => false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reduce) return;
    const mountTimer = window.setTimeout(() => {
      setArtWidth(window.innerWidth < 1024 ? 750 : 1080);
      setLater(true);
    }, 1800);
    let timer = 0;
    const tick = () => {
      const onScreen = window.scrollY < window.innerHeight * 0.9;
      setSeq((s) => {
        const next = (s.cur + 1) % ART.length;
        if (document.hidden || !onScreen || !loaded.current[next]) return s;
        return { cur: next, prev: s.cur, count: s.count + 1 };
      });
      timer = window.setTimeout(tick, HOLD_MS);
    };
    const full = sectionRef.current?.getAttribute('data-intro') === 'full';
    timer = window.setTimeout(tick, FIRST_HOLD_MS + (full ? INTRO_SHIFT_MS : 0));
    return () => {
      window.clearTimeout(mountTimer);
      window.clearTimeout(timer);
    };
  }, [reduce]);

  // The first figure's image layer: its entrance, then it leaves at the
  // first change and is gone after the second.
  const introState = seq.count === 0 ? 'first' : seq.count === 1 ? 'out' : null;
  const facetState = (i: number): 'in' | 'out' | undefined =>
    seq.count > 0 && i === seq.cur ? 'in' : seq.count > 1 && i === seq.prev ? 'out' : undefined;
  const facetMounted = (i: number) =>
    facetState(i) !== undefined || (later && i === (seq.cur + 1) % ART.length);

  return (
    <section ref={sectionRef} className={`${styles.sec} ${styles.hero}`} aria-labelledby="home-title">
      {/* A full page load gets the opening (data-intro="full"). The script
          runs only from the server HTML, so arriving from another page of
          the site (a client-side navigation) skips it. */}
      <script
        dangerouslySetInnerHTML={{
          __html: "document.currentScript.parentNode.setAttribute('data-intro','full')",
        }}
      />
      <div className={styles.heroLight} aria-hidden="true" />

      <motion.div
        className={styles.heroArt}
        style={{ scale: artScale }}
        data-turn={seq.count > 0 ? seq.count % 2 : undefined}
        role="img"
        aria-label={`Illustrations of Kareem Hassanein: ${ART.map((a) => a.label).join('; ')}`}
      >
        <div className={styles.heroHalo} aria-hidden="true">
          {HALO.map((band, k) => (
            <svg key={k} className={styles.haloBand} viewBox={band.viewBox} style={{ width: band.size, '--k': k } as CSSProperties}>
              {band.polys.map((f, i) => (
                <polygon key={i} points={f.points} fill={f.fill} fillOpacity={f.a} />
              ))}
            </svg>
          ))}
        </div>
        {introState && (
          <div className={styles.artLayer} data-state={introState} aria-hidden="true">
            <Image src={ART[0].src} alt="" fill priority quality={75} sizes="(min-width: 1024px) 40vw, 70vw" style={edgeFade(ART[0].fade)} />
          </div>
        )}
        {ART.map((_, i) =>
          facetMounted(i) ? (
            <FacetLayer
              key={i}
              index={i}
              state={facetState(i)}
              width={artWidth}
              onLoad={() => (loaded.current[i] = true)}
            />
          ) : null,
        )}
      </motion.div>

      {/* The masthead, in front of the art. The h1 reads as text: the brand,
          then his name and title (shown under the slogan). */}
      <h1 id="home-title" className={styles.heroName}>
        <motion.span className={styles.heroMast} style={{ y: mastY }}>
          <span className={styles.mastWord} aria-hidden="true">
            <span className={styles.mastBrand}>
              {BRAND.split('').map((ch, i) => (
                <span key={i} style={{ '--i': i } as CSSProperties}>
                  {ch}
                </span>
              ))}
            </span>
            <span className={styles.mastSub}>Physio</span>
          </span>
          <span className="sr-only">Kinetikare Physio: Kareem Hassanein, Registered Physiotherapist</span>
        </motion.span>
      </h1>

      <div className={styles.heroCopy}>
        <motion.div className={styles.heroCover} style={{ y: coverY }}>
          <p className={styles.slogan}>
            <span className={styles.sloganScience}>
              <span>The Science of Recovery.</span>
            </span>
            <em className={styles.sloganArt}>The Art of Care.</em>
          </p>
          <div className={styles.heroSigned}>
            <span className={styles.heroByline} aria-hidden="true">
              Kareem Hassanein
            </span>
            <span className={styles.heroCredential} aria-hidden="true">
              Registered Physiotherapist
            </span>
          </div>
        </motion.div>
        <div className={styles.heroAction}>
          <div className={styles.ctaRow}>
            <a
              href={JANE_ASSESSMENT_URL}
              data-booking-source="hero"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnLight}`}
            >
              Book an assessment
              <Arrow />
            </a>
            <a href="#where-does-it-hurt" className={styles.textLink}>
              Where does it hurt?
            </a>
          </div>
        </div>
        <div className={styles.heroLockup}>
          {/* The rating as a badge: the initials of his most recent reviewers,
              then the score in gold stars and the count. */}
          <a href="#reviews" className={styles.heroRating} aria-label={`Rated 5.0 out of 5 from ${GOOGLE_REVIEW_TOTAL} reviews on Google`}>
            {reviewers.length > 0 && (
              <span className={styles.ratingFaces} aria-hidden="true">
                {reviewers.map((initials, i) => (
                  <span key={i}>{initials}</span>
                ))}
              </span>
            )}
            <span className={styles.ratingText} aria-hidden="true">
              <span className={styles.ratingScore}>
                <strong>5.0</strong>
                <Stars />
              </span>
              <span className={styles.ratingCount}>{GOOGLE_REVIEW_TOTAL} reviews on Google</span>
            </span>
          </a>
          <ul className={styles.heroFacts}>
            <li>Direct billing</li>
            <li>No referral needed</li>
            <li>Evening hours</li>
          </ul>
        </div>
      </div>

      <motion.div className={styles.heroShade} style={{ opacity: shade }} aria-hidden="true" />
    </section>
  );
}
