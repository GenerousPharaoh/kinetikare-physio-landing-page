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
  { title: 'One-on-one sessions', text: 'Every appointment is directly with Kareem. No assistants, no handoffs, no split blocks.' },
  { title: 'Treatment from day one', text: 'Hands-on treatment in the first visit, not just intake paperwork.' },
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
  { label: 'Billing', value: 'Direct billing for Sun Life, Manulife, Green Shield, Blue Cross, Canada Life, WSIB, and more.', icon: CreditCardIcon },
];

const serviceAreas = ['Burlington', 'Waterdown', 'Flamborough', 'Carlisle', 'Oakville'];

/* ─── HELPERS ─── */
function Stars({ size = 14 }: { size?: number }) {
  return <span style={{ display: 'inline-flex', gap: 2 }}>{[...Array(5)].map((_, i) => <StarIcon key={i} width={size} height={size} style={{ color: c.goldBright }} aria-hidden="true" />)}</span>;
}

function Reveal({ children, delay = 0, from = 'bottom', style, className }: {
  children: ReactNode; delay?: number; from?: 'bottom' | 'left' | 'right' | 'scale'; style?: CSSProperties; className?: string;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true, rootMargin: '0px 0px -6% 0px' });
  const init: Record<string, number> = { opacity: 0 };
  if (from === 'bottom') init.y = 48;
  if (from === 'left') init.x = -60;
  if (from === 'right') init.x = 60;
  if (from === 'scale') { init.scale = 0.9; init.y = 24; }
  return (
    <motion.div ref={ref} initial={reduced ? false : init} animate={reduced || inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : init}
      transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }} className={className} style={style}>{children}</motion.div>
  );
}

/* Animated gold divider that grows on scroll */
function GoldDivider() {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: 'center', padding: '48px 0' }}>
      <motion.div initial={{ width: 0 }} animate={inView ? { width: 120 } : { width: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: 1.5, background: `linear-gradient(90deg, transparent, ${c.goldBright}, transparent)`, borderRadius: 1 }} />
    </div>
  );
}

/* ═══════════════════════════════════════ */

export default function IntakeLandingPage() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const photoY = useSpring(useTransform(heroProgress, [0, 1], [0, 70]), { stiffness: 80, damping: 25 });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, 40]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);

  const reviewRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: reviewProgress } = useScroll({ target: reviewRef, offset: ['start end', 'end start'] });
  const reviewBgY = useSpring(useTransform(reviewProgress, [0, 1], [-30, 30]), { stiffness: 60, damping: 30 });
  const reviewBgScale = useSpring(useTransform(reviewProgress, [0, 0.5, 1], [1.1, 1.05, 1]), { stiffness: 60, damping: 30 });

  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } } };
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
        .intake-cta-hover { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease !important; }
        .intake-cta-hover:hover { transform: translateY(-3px) !important; box-shadow: 0 20px 56px -12px rgba(184,150,12,0.5) !important; }
      `}</style>

      <main className="intake-page" style={{ fontFamily: sans, background: c.bg, color: c.text, WebkitFontSmoothing: 'antialiased', overflow: 'hidden' }}>

        {/* ═══════════════ HERO — diagonal bottom edge ═══════════════ */}
        <section ref={heroRef} className="intake-hero" style={{ position: 'relative', background: c.bg, clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)', paddingBottom: 'clamp(8rem, 14vw, 14rem)' }}>
          {/* Grain */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.015, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px', pointerEvents: 'none' }} />

          <motion.div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'flex', minHeight: '100vh', alignItems: 'center', paddingTop: 'clamp(7rem, 14vh, 10rem)', opacity: reduced ? 1 : heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={reduced ? undefined : stagger} style={{ display: 'grid', width: '100%', alignItems: 'start', gap: 'clamp(3rem, 6vw, 5rem)', gridTemplateColumns: '1fr' }} className="lg:!grid-cols-[1fr_380px]">

              <motion.div style={{ y: reduced ? 0 : heroTextY, paddingTop: 'clamp(0rem, 4vh, 3rem)' }}>
                <motion.div variants={up} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 48 }}>
                  <span className="relative flex" style={{ width: 8, height: 8 }}>
                    <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: '#6EE7B7', opacity: 0.6 }} />
                    <span style={{ position: 'relative', display: 'block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#059669' }} />
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#059669' }}>Accepting new patients</span>
                </motion.div>

                <motion.h1 variants={up} style={{ fontFamily: serif, fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.04em', color: c.black, marginBottom: 8 }}>
                  Book Your
                </motion.h1>
                <motion.div variants={up} aria-hidden="true" style={{ fontFamily: serif, fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.04em', color: c.gold, marginBottom: 48, fontStyle: 'italic' }}>
                  Assessment
                </motion.div>

                <motion.p variants={up} style={{ maxWidth: 420, color: c.textMid, fontSize: 17, lineHeight: 1.75, marginBottom: 48 }}>
                  One-on-one physiotherapy focused on finding the root cause. Sports injuries, joint and muscle pain, dry needling, cupping, and exercise rehabilitation.
                </motion.p>

                <motion.div variants={up} className="flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ marginBottom: 48 }}>
                  <BookingCTA size="lg" className="intake-cta-hover w-full sm:w-auto !rounded-none !px-12 !py-5 !text-xs !tracking-[0.25em]" style={{ boxShadow: '0 16px 48px -12px rgba(184,150,12,0.4)' }}>
                    BOOK ASSESSMENT <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a href="tel:+19056346000" className="intake-cta-hover inline-flex items-center justify-center gap-3" style={{ padding: '20px 28px', border: `1.5px solid ${c.stone200}`, color: c.text, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', cursor: 'pointer' }}>
                    <PhoneIcon width={16} height={16} style={{ color: c.gold }} /> (905) 634-6000
                  </a>
                </motion.div>

                <motion.div variants={up} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Stars size={14} />
                    <span style={{ fontSize: 14, fontWeight: 700, color: c.text }}>5.0</span>
                    <span style={{ fontSize: 13, color: c.textLight }}>/ 17 reviews</span>
                  </div>
                  <span style={{ width: 1, height: 14, background: c.stone200 }} className="hidden sm:block" />
                  {['Direct Billing', 'No Referral', 'Evening Hours'].map((b) => (
                    <span key={b} style={{ fontSize: 12, fontWeight: 500, color: c.textLight }}>{b}</span>
                  ))}
                </motion.div>
                <motion.p variants={up} style={{ marginTop: 20, paddingBottom: 64, fontSize: 11, color: c.textFaint, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Registered Physiotherapist &middot; MSc PT, BSc Kin &middot; CPO #20079
                </motion.p>
              </motion.div>

              {/* PORTRAIT — extends below hero diagonal */}
              <motion.div className="hidden lg:block" initial={reduced ? false : { opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'relative', zIndex: 10 }}>
                <motion.div style={{ position: 'relative', y: reduced ? 0 : photoY }}>
                  <img src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png" alt="Kareem Hassanein, Registered Physiotherapist in Burlington" width={826} height={1169} style={{ width: '100%', height: 'auto', display: 'block', filter: 'contrast(1.03)' }} />
                </motion.div>
                <motion.div initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} style={{ marginTop: 20, borderTop: `2px solid ${c.gold}`, paddingTop: 14 }}>
                  <p style={{ fontFamily: serif, fontSize: 17, fontWeight: 700, color: c.black }}>Kareem Hassanein</p>
                  <p style={{ fontSize: 11, color: c.textLight, marginTop: 4, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Registered Physiotherapist</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ REVIEWS — cinematic dark section with parallax bg ═══════════ */}
        <div ref={reviewRef} style={{ position: 'relative', overflow: 'hidden', marginTop: '-4vw' }}>
          <motion.div style={{ position: 'absolute', inset: '-80px 0', y: reduced ? 0 : reviewBgY, scale: reduced ? 1 : reviewBgScale }}>
            <img src="/images/clinic-room-may-25.webp" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,17,0.82)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.65) 50%, rgba(17,17,17,0.9) 100%)' }} />
          </motion.div>

          <div style={{ position: 'relative', maxWidth: 780, margin: '0 auto', padding: 'clamp(7rem, 16vw, 14rem) clamp(1.5rem, 5vw, 4rem)', textAlign: 'center' }}>
            <Reveal from="scale">
              <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}><Stars size={18} /></div>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.goldBright, marginBottom: 48 }}>5.0 from 17 Google Reviews</p>

              <div style={{ position: 'relative', height: 'clamp(180px, 24vw, 220px)' }}>
                <AnimatePresence mode="wait">
                  <motion.div key={activeReview}
                    initial={{ opacity: 0, y: 24, filter: 'blur(4px)', scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                    exit={{ opacity: 0, y: -24, filter: 'blur(4px)', scale: 0.96 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ fontFamily: serif, fontSize: 'clamp(1.25rem, 2.4vw, 1.85rem)', fontWeight: 300, lineHeight: 1.65, color: '#FFFFFFEE', maxWidth: 620, margin: '0 auto 32px' }}>
                      &ldquo;{reviews[activeReview].text}&rdquo;
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: c.goldBright, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{reviews[activeReview].name}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 40 }}>
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => go(i)} aria-label={`Review ${i + 1}`} style={{ width: 32, height: 44, border: 'none', background: 'transparent', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ display: 'block', width: activeReview === i ? 32 : 6, height: 6, borderRadius: 3, background: activeReview === i ? c.goldBright : 'rgba(255,255,255,0.18)', transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)' }} />
                  </button>
                ))}
              </div>
              <a href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.35)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 24, cursor: 'pointer', padding: '8px 0' }}>
                Read all on Google <ArrowRightIcon width={11} height={11} />
              </a>
            </Reveal>
          </div>
        </div>

        <GoldDivider />

        {/* ═══════════ WHAT TO EXPECT — bento grid ═══════════ */}
        <div style={{ background: c.white }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem) clamp(6rem, 10vw, 8rem)' }}>
            <Reveal from="left">
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold, marginBottom: 16 }}>What to Expect</p>
              <h2 style={{ fontFamily: serif, color: c.black, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 16 }}>
                Your first visit
              </h2>
              <p style={{ color: c.textMid, fontSize: 16, lineHeight: 1.8, maxWidth: 480, marginBottom: 72 }}>Assessment, treatment, and a clear plan forward.</p>
            </Reveal>

            {/* Bento: first item spans 2 cols, rest are individual */}
            <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }} className="lg:!grid-cols-3">
              {/* Featured first item — larger */}
              <Reveal from="scale" className="lg:!col-span-1 lg:!row-span-2">
                <div style={{ background: c.charcoal, borderRadius: 16, padding: 'clamp(32px, 4vw, 48px)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <div style={{ width: 48, height: 2, background: c.goldBright, marginBottom: 24 }} />
                  <h3 style={{ fontFamily: serif, color: c.white, fontWeight: 600, fontSize: 22, lineHeight: 1.35, marginBottom: 16 }}>{careHighlights[0].title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.75 }}>{careHighlights[0].text}</p>
                </div>
              </Reveal>

              {careHighlights.slice(1).map((item, i) => (
                <Reveal key={item.title} delay={0.1 * (i + 1)} from={i === 1 ? 'right' : 'bottom'}>
                  <div style={{ background: c.stone50, borderRadius: 16, padding: 'clamp(28px, 3vw, 36px)', height: '100%' }}>
                    <div style={{ width: 32, height: 2, background: i === 0 ? c.goldBright : c.stone200, marginBottom: 20 }} />
                    <h3 style={{ fontFamily: serif, color: c.black, fontWeight: 600, fontSize: 17, lineHeight: 1.4, marginBottom: 10 }}>{item.title}</h3>
                    <p style={{ color: c.textMid, fontSize: 14, lineHeight: 1.75 }}>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <GoldDivider />

        {/* ═══════════ PRICING — centered, luxe ═══════════ */}
        <div style={{ background: c.bg }}>
          <div style={{ maxWidth: 600, margin: '0 auto', padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem) clamp(6rem, 10vw, 8rem)', textAlign: 'center' }}>
            <Reveal from="scale">
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold, marginBottom: 16 }}>Investment</p>
              <h2 style={{ fontFamily: serif, color: c.black, fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 56 }}>Transparent fees</h2>

              {[
                { name: 'Initial Assessment', detail: 'Comprehensive evaluation and treatment', price: '130' },
                { name: 'Follow-up Session', detail: '30 minutes of focused care', price: '90' },
              ].map((item, i) => (
                <div key={item.name} style={{ padding: '28px 0', borderBottom: `1px solid ${c.stone200}`, borderTop: i === 0 ? `1px solid ${c.stone200}` : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                    <p style={{ fontFamily: serif, fontSize: 18, fontWeight: 600, color: c.black }}>{item.name}</p>
                    <div style={{ flex: 1, borderBottom: `1px dotted ${c.stone200}`, margin: '0 16px', minWidth: 32, alignSelf: 'center', transform: 'translateY(-3px)' }} />
                    <p style={{ fontFamily: serif, fontSize: 18, fontWeight: 600, color: c.black }}>
                      <span style={{ color: c.gold, fontSize: 14, fontWeight: 400 }}>$</span>{item.price}
                    </p>
                  </div>
                  <p style={{ color: c.textLight, fontSize: 13, textAlign: 'left' }}>{item.detail}</p>
                </div>
              ))}
              <p style={{ color: c.textFaint, fontSize: 12, marginTop: 28, lineHeight: 1.7 }}>Direct billing available for most major insurers.</p>
            </Reveal>
          </div>
        </div>

        {/* ═══════════ CLINIC — photo + details ═══════════ */}
        <div style={{ background: c.white }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)' }}>
            <div className="grid gap-16 lg:grid-cols-2" style={{ alignItems: 'center' }}>
              {/* Treatment photo — slides in from left */}
              <Reveal from="left">
                <div style={{ overflow: 'hidden', borderRadius: 12 }}>
                  <motion.img src="/images/treatment-photos/treatment-passive-stretching-knee-manual-therapy.jpg" alt="Kareem performing manual therapy knee treatment" width={1200} height={800} whileHover={reduced ? undefined : { scale: 1.04 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 400, cursor: 'default', filter: 'contrast(1.04) saturate(1.08)' }} />
                </div>
              </Reveal>

              <Reveal from="right" delay={0.15}>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold, marginBottom: 16 }}>The Clinic</p>
                  <h2 style={{ fontFamily: serif, color: c.black, fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 48 }}>Burlington &amp; Waterdown</h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                    {clinicDetails.map((d) => (
                      <div key={d.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <d.icon width={18} height={18} style={{ color: c.gold, flexShrink: 0, marginTop: 3 }} />
                        <div>
                          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: c.textFaint, marginBottom: 4 }}>{d.label}</p>
                          <p style={{ color: c.textMid, fontSize: 15, lineHeight: 1.8, whiteSpace: 'pre-line' }}>{d.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2" style={{ marginTop: 28 }}>
                    {serviceAreas.map((a) => <span key={a} style={{ padding: '5px 12px', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.textLight, background: c.stone50, borderRadius: 2 }}>{a}</span>)}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ═══════════ BOTTOM CTA ═══════════ */}
        <div style={{ background: c.charcoal, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)', textAlign: 'center' }}>
            <Reveal from="scale">
              <h2 style={{ fontFamily: serif, color: c.white, fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: 480, margin: '0 auto 20px' }}>
                Ready to move better?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, lineHeight: 1.75, maxWidth: 380, margin: '0 auto 48px' }}>No referral required. Book online in under a minute.</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <BookingCTA size="lg" className="intake-cta-hover w-full sm:w-auto !rounded-none !px-12 !py-5 !text-xs !tracking-[0.25em]" style={{ boxShadow: '0 16px 48px -10px rgba(184,150,12,0.55)' }}>
                  BOOK ASSESSMENT <ArrowRightIcon width={14} height={14} />
                </BookingCTA>
                <a href="tel:+19056346000" className="intake-cta-hover inline-flex items-center justify-center gap-3" style={{ padding: '20px 28px', border: '1.5px solid rgba(255,255,255,0.12)', color: c.white, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', cursor: 'pointer' }}>
                  <PhoneIcon width={15} height={15} style={{ color: c.goldBright }} /> (905) 634-6000
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
