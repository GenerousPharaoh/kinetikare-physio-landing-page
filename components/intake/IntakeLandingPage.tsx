'use client';

import type { CSSProperties, ComponentType, ReactNode, SVGProps } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowRightIcon,
  ClockIcon,
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BookingCTA from '@/components/intake/BookingCTA';

/* ─── PALETTE ─── */
const c = {
  black: '#111111',
  charcoal: '#1C1917',
  text: '#292524',
  textMid: '#57534E',
  textLight: '#78716C',
  textFaint: '#A8A29E',
  gold: '#B8960C',
  goldBright: '#D4AF37',
  bg: '#FAFAF9',
  white: '#FFFFFF',
  stone50: '#F5F5F4',
  stone100: '#E7E5E4',
  stone200: '#D6D3D1',
};

const serif = '"Playfair Display", Georgia, serif';
const sans = '"Inter", system-ui, sans-serif';
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/* ─── DATA ─── */
const careHighlights = [
  { title: 'One-on-one sessions', text: 'Every appointment is directly with Kareem. No assistants, no handoffs.' },
  { title: 'Treatment from day one', text: 'The first visit includes hands-on treatment, not just paperwork.' },
  { title: 'Clear reasoning', text: 'Each visit ends with a clear explanation of findings and next steps.' },
  { title: 'Evidence-based care', text: 'Manual therapy, dry needling, cupping, and exercise matched to your assessment.' },
];

const reviews = [
  { name: 'Dr. Fel Rocci', text: 'Having worked with Kareem, I am now able to play tennis 4-5 times a week without a setback. Not bad for a 70 year old!' },
  { name: 'Nickel Chan', text: "Kareem is honestly one of the best physiotherapists I've ever seen. He fixed issues I'd been struggling with for a long time." },
  { name: 'Thanula G.', text: 'Thorough, knowledgeable, and incredibly attentive. I saw consistent progress and now feel stronger and pain free.' },
  { name: 'Ryan Darkwah', text: "Kareem found the problem came from my hip and quads. My pain's gone now, and I'm back to playing at full speed." },
  { name: 'David Espinosa', text: 'He took the time to figure out what was causing it instead of just treating the pain. My hip feels strong again.' },
  { name: 'Marko Vasilic', text: "He did a full movement analysis and showed me where the extra stress was coming from. I'm back to playing basketball comfortably." },
];

const clinicDetails: Array<{ label: string; value: string; icon: IconComponent }> = [
  { label: 'Location', value: 'Endorphins Health & Wellness Centre\n4631 Palladium Way, Unit 6\nBurlington, ON', icon: MapPinIcon },
  { label: 'Hours', value: 'Mon / Tue / Thu: 1:30 \u2013 8:00 PM\nWed / Fri: 2:00 \u2013 7:30 PM', icon: ClockIcon },
  { label: 'Billing', value: 'Direct billing available for Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.', icon: CreditCardIcon },
];

const serviceAreas = ['Burlington', 'Waterdown', 'Flamborough', 'Carlisle', 'Oakville'];

/* ─── STARS ─── */
function Stars({ size = 14 }: { size?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }}>
      {[...Array(5)].map((_, i) => <StarIcon key={i} width={size} height={size} style={{ color: c.goldBright }} aria-hidden="true" />)}
    </span>
  );
}

/* ─── SCROLL-TRIGGERED REVEAL with direction variants ─── */
function Reveal({ children, delay = 0, from = 'bottom', style, className }: {
  children: ReactNode; delay?: number; from?: 'bottom' | 'left' | 'right' | 'scale'; style?: CSSProperties; className?: string;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true, rootMargin: '0px 0px -8% 0px' });

  const initial: Record<string, number> = { opacity: 0 };
  if (from === 'bottom') initial.y = 40;
  if (from === 'left') initial.x = -60;
  if (from === 'right') initial.x = 60;
  if (from === 'scale') { initial.scale = 0.92; initial.y = 20; }

  return (
    <motion.div ref={ref} initial={reduced ? false : initial}
      animate={reduced || inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : initial}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className} style={style}>{children}</motion.div>
  );
}

/* ═══════════════════════════════════════ */

export default function IntakeLandingPage() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const photoY = useSpring(useTransform(heroProgress, [0, 1], [0, 50]), { stiffness: 100, damping: 30 });
  const photoScale = useSpring(useTransform(heroProgress, [0, 1], [1, 1.05]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0.3]);
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, 30]), { stiffness: 100, damping: 30 });

  // Review section parallax
  const reviewRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: reviewProgress } = useScroll({ target: reviewRef, offset: ['start end', 'end start'] });
  const reviewBgY = useSpring(useTransform(reviewProgress, [0, 1], [-40, 40]), { stiffness: 80, damping: 30 });

  // Clinic photo parallax
  const clinicRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: clinicProgress } = useScroll({ target: clinicRef, offset: ['start end', 'end start'] });
  const clinicPhotoScale = useSpring(useTransform(clinicProgress, [0, 1], [1.15, 1]), { stiffness: 80, damping: 30 });

  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
  const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

  const [activeReview, setActiveReview] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const next = useCallback(() => setActiveReview((p) => (p + 1) % reviews.length), []);
  useEffect(() => { timer.current = setInterval(next, 5500); return () => { if (timer.current) clearInterval(timer.current); }; }, [next]);
  const go = (i: number) => { setActiveReview(i); if (timer.current) clearInterval(timer.current); timer.current = setInterval(next, 5500); };

  return (
    <>
      <style>{`
        .intake-page, .intake-page * { font-style: normal !important; }
        .intake-page section { padding: 0 !important; }
        .intake-hero { min-height: 100vh; min-height: 100dvh; }
        @media (prefers-reduced-motion: reduce) { .intake-page .animate-ping { display: none !important; } }
        .intake-cta-hover { transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease !important; }
        .intake-cta-hover:hover { transform: translateY(-2px) !important; }
        .intake-img-hover { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1) !important; }
        .intake-img-hover:hover { transform: scale(1.03) !important; }
      `}</style>

      <main className="intake-page" style={{ fontFamily: sans, background: c.bg, color: c.text, WebkitFontSmoothing: 'antialiased' }}>

        {/* ═══════════════ HERO ═══════════════ */}
        <section ref={heroRef} className="intake-hero" style={{ position: 'relative', overflow: 'hidden', background: c.bg }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.015, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px', pointerEvents: 'none' }} />

          <motion.div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'flex', minHeight: '100%', alignItems: 'center', paddingTop: 'clamp(7rem, 14vh, 10rem)', paddingBottom: 'clamp(5rem, 10vh, 8rem)', opacity: reduced ? 1 : heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={reduced ? undefined : stagger} style={{ display: 'grid', width: '100%', alignItems: 'center', gap: 'clamp(3rem, 6vw, 5rem)', gridTemplateColumns: '1fr' }} className="lg:!grid-cols-[1fr_380px]">

              <motion.div style={{ y: reduced ? 0 : heroTextY }}>
                <motion.div variants={up} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 48 }}>
                  <span className="relative flex" style={{ width: 8, height: 8 }}>
                    <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: '#6EE7B7', opacity: 0.6 }} />
                    <span style={{ position: 'relative', display: 'block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#059669' }} />
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#059669' }}>Accepting new patients</span>
                </motion.div>

                <motion.h1 variants={up} style={{ fontFamily: serif, fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)', fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.04em', color: c.black, marginBottom: 8 }}>
                  Book Your
                </motion.h1>
                <motion.div variants={up} aria-hidden="true" style={{ fontFamily: serif, fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)', fontWeight: 300, lineHeight: 1.0, letterSpacing: '-0.04em', color: c.gold, marginBottom: 40, fontStyle: 'italic' }}>
                  Assessment
                </motion.div>

                <motion.p variants={up} style={{ maxWidth: 440, color: c.textMid, fontSize: 17, lineHeight: 1.75, marginBottom: 48 }}>
                  One-on-one physiotherapy focused on finding the root cause. Sports injuries, joint and muscle pain, dry needling, cupping, and exercise rehabilitation.
                </motion.p>

                <motion.div variants={up} className="flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ marginBottom: 48 }}>
                  <BookingCTA size="lg" className="intake-cta-hover w-full sm:w-auto !rounded-none !px-12 !py-5 !text-xs !tracking-[0.25em]" style={{ boxShadow: '0 16px 48px -12px rgba(184,150,12,0.4)' }}>
                    BOOK ASSESSMENT <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a href="tel:+19056346000" className="intake-cta-hover inline-flex items-center justify-center gap-3" style={{ padding: '20px 28px', border: `1.5px solid ${c.stone200}`, color: c.text, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', cursor: 'pointer' }}>
                    <PhoneIcon width={16} height={16} aria-hidden="true" style={{ color: c.gold }} />
                    (905) 634-6000
                  </a>
                </motion.div>

                <motion.div variants={up} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Stars size={14} />
                    <span style={{ fontSize: 14, fontWeight: 700, color: c.text }}>5.0</span>
                    <span style={{ fontSize: 13, color: c.textLight }}>/ 17 reviews</span>
                  </div>
                  <span style={{ width: 1, height: 16, background: c.stone200 }} className="hidden sm:block" />
                  {['Direct Billing', 'No Referral', 'Evening Hours'].map((b) => (
                    <span key={b} style={{ fontSize: 12, fontWeight: 500, color: c.textLight, letterSpacing: '0.02em' }}>{b}</span>
                  ))}
                </motion.div>

                <motion.p variants={up} style={{ marginTop: 24, fontSize: 12, color: c.textFaint, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Registered Physiotherapist &middot; MSc PT, BSc Kin &middot; CPO #20079
                </motion.p>
              </motion.div>

              {/* PORTRAIT with parallax + scale */}
              <motion.div className="hidden lg:block" initial={reduced ? false : { opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'relative' }}>
                <motion.div style={{ position: 'relative', width: '100%', overflow: 'hidden', y: reduced ? 0 : photoY, scale: reduced ? 1 : photoScale }}>
                  <img src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png" alt="Kareem Hassanein, Registered Physiotherapist in Burlington" width={826} height={1169} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>
                <motion.div initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }} style={{ marginTop: 24, borderTop: `2px solid ${c.gold}`, paddingTop: 16 }}>
                  <p style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: c.black, letterSpacing: '-0.02em' }}>Kareem Hassanein</p>
                  <p style={{ fontSize: 12, color: c.textLight, marginTop: 4, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Registered Physiotherapist</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ REVIEWS — parallax treatment room ═══════════ */}
        <div ref={reviewRef} style={{ position: 'relative', overflow: 'hidden' }}>
          <motion.div style={{ position: 'absolute', inset: '-60px 0', y: reduced ? 0 : reviewBgY }}>
            <img src="/images/clinic-room-may-25.webp" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,17,0.78)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,17,17,0.88) 0%, rgba(17,17,17,0.65) 50%, rgba(17,17,17,0.88) 100%)' }} />
          </motion.div>

          <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', padding: 'clamp(6rem, 14vw, 12rem) clamp(1.5rem, 5vw, 4rem)', textAlign: 'center' }}>
            <Reveal from="scale">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}><Stars size={18} /></div>

              <div style={{ position: 'relative', height: 'clamp(200px, 26vw, 240px)' }}>
                <AnimatePresence mode="wait">
                  <motion.div key={activeReview} initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.97 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ fontFamily: serif, fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 300, lineHeight: 1.6, color: c.white, maxWidth: 640, margin: '0 auto 32px' }}>
                      &ldquo;{reviews[activeReview].text}&rdquo;
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: c.goldBright, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{reviews[activeReview].name}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 40 }}>
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => go(i)} aria-label={`Review ${i + 1}`} style={{ width: 32, height: 44, border: 'none', background: 'transparent', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ display: 'block', width: activeReview === i ? 28 : 6, height: 6, borderRadius: 3, background: activeReview === i ? c.goldBright : 'rgba(255,255,255,0.2)', transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)' }} />
                  </button>
                ))}
              </div>

              <a href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.4)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 24, cursor: 'pointer' }}>
                Read all on Google <ArrowRightIcon width={12} height={12} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* ═══════════ WHAT TO EXPECT — staggered slide-ins ═══════════ */}
        <div style={{ background: c.white }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)' }}>
            <Reveal from="left">
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold, marginBottom: 16 }}>What to Expect</p>
              <h2 style={{ fontFamily: serif, color: c.black, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 16 }}>
                Your first visit
              </h2>
              <p style={{ color: c.textMid, fontSize: 16, lineHeight: 1.8, maxWidth: 500, marginBottom: 80 }}>
                Assessment, treatment, and a clear plan forward.
              </p>
            </Reveal>

            <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
              {careHighlights.map((item, i) => (
                <Reveal key={item.title} delay={0.1 * i} from={i % 2 === 0 ? 'bottom' : 'scale'}>
                  <div>
                    <div style={{ width: 40, height: 2, background: i === 0 ? c.gold : c.stone200, marginBottom: 24, transition: 'width 0.6s ease' }} />
                    <h3 style={{ fontFamily: serif, color: c.black, fontWeight: 600, fontSize: 17, lineHeight: 1.4, marginBottom: 12 }}>{item.title}</h3>
                    <p style={{ color: c.textMid, fontSize: 14, lineHeight: 1.75 }}>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ PRICING ═══════════ */}
        <div style={{ background: c.bg, borderTop: `1px solid ${c.stone100}`, borderBottom: `1px solid ${c.stone100}` }}>
          <div style={{ maxWidth: 640, margin: '0 auto', padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)', textAlign: 'center' }}>
            <Reveal from="scale">
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold, marginBottom: 16 }}>Investment</p>
              <h2 style={{ fontFamily: serif, color: c.black, fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 64 }}>
                Transparent fees
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { name: 'Initial Assessment', detail: 'Comprehensive evaluation and treatment', price: '130' },
                  { name: 'Follow-up Session', detail: '30 minutes of focused care', price: '90' },
                ].map((item, i) => (
                  <div key={item.name} style={{ padding: '32px 0', borderTop: i === 0 ? `1px solid ${c.stone200}` : 'none', borderBottom: `1px solid ${c.stone200}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                      <p style={{ fontFamily: serif, fontSize: 19, fontWeight: 600, color: c.black }}>{item.name}</p>
                      <div style={{ flex: 1, borderBottom: `1px dotted ${c.stone200}`, margin: '0 16px', minWidth: 40, alignSelf: 'center', transform: 'translateY(-4px)' }} />
                      <p style={{ fontFamily: serif, fontSize: 19, fontWeight: 600, color: c.black }}>${item.price}</p>
                    </div>
                    <p style={{ color: c.textLight, fontSize: 14, textAlign: 'left' }}>{item.detail}</p>
                  </div>
                ))}
              </div>

              <p style={{ color: c.textFaint, fontSize: 13, marginTop: 32, lineHeight: 1.7 }}>
                Direct billing available for Sun Life, Manulife, Green Shield, Blue Cross, Canada Life, WSIB, and more.
              </p>
            </Reveal>
          </div>
        </div>

        {/* ═══════════ CLINIC — photo with parallax zoom ═══════════ */}
        <div ref={clinicRef} style={{ background: c.white }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)' }}>
            <div className="grid gap-16 lg:grid-cols-2" style={{ alignItems: 'center' }}>
              <Reveal from="left">
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold, marginBottom: 16 }}>The Clinic</p>
                  <h2 style={{ fontFamily: serif, color: c.black, fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 48 }}>
                    Burlington &amp; Waterdown
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                    {clinicDetails.map((d) => (
                      <div key={d.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                        <d.icon width={20} height={20} aria-hidden="true" style={{ color: c.gold, flexShrink: 0, marginTop: 3 }} />
                        <div>
                          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.textFaint, marginBottom: 6 }}>{d.label}</p>
                          <p style={{ color: c.textMid, fontSize: 15, lineHeight: 1.8, whiteSpace: 'pre-line' }}>{d.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2" style={{ marginTop: 32 }}>
                    {serviceAreas.map((a) => (
                      <span key={a} style={{ padding: '6px 14px', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: c.textLight, background: c.stone50, borderRadius: 2 }}>{a}</span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Clinic photo — parallax zoom on scroll */}
              <Reveal from="right" delay={0.15}>
                <div style={{ overflow: 'hidden', borderRadius: 4 }}>
                  <motion.img className="intake-img-hover" src="/images/clinic-pic-may-2025.jpg" alt="Physiotherapy clinic at Endorphins Health Burlington" width={1200} height={800} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 400, scale: reduced ? 1 : clinicPhotoScale }} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ═══════════ BOTTOM CTA ═══════════ */}
        <div style={{ background: c.charcoal, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: 960, margin: '0 auto', padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)', textAlign: 'center' }}>
            <Reveal from="scale">
              <h2 style={{ fontFamily: serif, color: c.white, fontWeight: 700, fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.08, letterSpacing: '-0.03em', maxWidth: 500, margin: '0 auto 16px' }}>
                Ready to move better?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.75, maxWidth: 400, margin: '0 auto 48px' }}>
                No referral required. Book online in under a minute.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <BookingCTA size="lg" className="intake-cta-hover w-full sm:w-auto !rounded-none !px-12 !py-5 !text-xs !tracking-[0.25em]" style={{ boxShadow: '0 16px 48px -10px rgba(184,150,12,0.5)' }}>
                  BOOK ASSESSMENT <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                </BookingCTA>
                <a href="tel:+19056346000" className="intake-cta-hover inline-flex items-center justify-center gap-3" style={{ padding: '20px 28px', border: '1.5px solid rgba(255,255,255,0.15)', color: c.white, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', cursor: 'pointer' }}>
                  <PhoneIcon width={15} height={15} aria-hidden="true" style={{ color: c.goldBright }} />
                  (905) 634-6000
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
