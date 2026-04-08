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

/* ═══════════════════════════════════════════════════════════
   DESIGN: Editorial Luxury — warm, confident, premium clinic
   Palette: deeper warmth, richer golds, stronger contrast
   ═══════════════════════════════════════════════════════════ */

const c = {
  // Richer gold spectrum
  gold: '#D4AF37',
  goldDeep: '#A68A3E',
  goldWarm: '#C9A84C',
  goldFaint: 'rgba(169,138,62,0.06)',
  goldLine: 'rgba(169,138,62,0.18)',

  // Warmer creams with more presence
  cream: '#F8F3EA',
  creamWarm: '#F0E8D8',
  creamRich: '#E8DDCA',
  linen: '#FDFAF5',
  white: '#FFFFFF',

  // Deeper, warmer text
  ink: '#1A1712',
  heading: '#2C261E',
  body: '#5C5548',
  bodyLight: '#847B6E',
  caption: '#6E6659',

  // Dark section — warm charcoal, not cold navy
  dark: '#1E1B16',
  darkLift: '#2A2620',
  emerald: '#2D8B5F',
  emeraldLight: '#48C78E',
};

const serif = '"Playfair Display", Georgia, "Times New Roman", serif';
const sans = '"Inter", system-ui, -apple-system, sans-serif';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/* ─── DATA ─── */
const careHighlights = [
  { title: 'One-on-one from start to finish', description: 'Every appointment is directly with Kareem. No assistants, no handoffs, and no split treatment blocks.' },
  { title: 'Treatment starts on day one', description: 'The first visit includes treatment when appropriate, not just intake paperwork and explanation.' },
  { title: 'Clear reasoning at each visit', description: 'Each visit ends with a clear explanation of what was found and what comes next.' },
  { title: 'Care matched to the problem', description: 'Manual therapy, dry needling, cupping, and exercise rehabilitation are used where they fit the assessment.' },
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

/* ─── HELPERS ─── */

function Stars({ size = 16, gap = 2 }: { size?: number; gap?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap }}>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} width={size} height={size} style={{ color: c.gold }} aria-hidden="true" />
      ))}
    </span>
  );
}

function Reveal({ children, delay = 0, distance = 28, style, className }: {
  children: ReactNode; delay?: number; distance?: number; style?: CSSProperties; className?: string;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true, rootMargin: '0px 0px -8% 0px' });
  return (
    <motion.div ref={ref} initial={reduced ? false : 'hidden'} animate={reduced || inView ? 'visible' : 'hidden'}
      variants={{ hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } } }}
      className={className} style={style}>{children}</motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════ */

export default function IntakeLandingPage() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const photoScale = useSpring(useTransform(heroProgress, [0, 1], [1, 1.06]), { stiffness: 120, damping: 28, mass: 0.5 });
  const photoY = useSpring(useTransform(heroProgress, [0, 1], [0, 48]), { stiffness: 120, damping: 28, mass: 0.5 });

  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
  const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } };

  const [activeReview, setActiveReview] = useState(0);
  const reviewTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const advanceReview = useCallback(() => { setActiveReview((p) => (p + 1) % reviews.length); }, []);
  useEffect(() => { reviewTimer.current = setInterval(advanceReview, 6000); return () => { if (reviewTimer.current) clearInterval(reviewTimer.current); }; }, [advanceReview]);
  const resetTimer = (i: number) => { setActiveReview(i); if (reviewTimer.current) clearInterval(reviewTimer.current); reviewTimer.current = setInterval(advanceReview, 6000); };

  return (
    <>
      <style>{`
        .intake-page, .intake-page * { font-style: normal !important; }
        .intake-page section { padding: 0 !important; }
        .intake-page blockquote { font-style: normal !important; }
        .intake-hero { min-height: 100vh; min-height: 100dvh; }
        @media (prefers-reduced-motion: reduce) { .intake-page .animate-ping { display: none !important; } }
      `}</style>

      <main className="intake-page" style={{ fontFamily: sans, background: c.white, color: c.body, WebkitFontSmoothing: 'antialiased' }}>

        {/* ════════════════════════ HERO ════════════════════════ */}
        <section ref={heroRef} className="intake-hero" style={{ position: 'relative', overflow: 'hidden', background: c.cream }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 110% 80% at 20% 30%, rgba(201,168,76,0.1), transparent 50%), radial-gradient(ellipse 70% 60% at 80% 75%, rgba(169,138,62,0.06), transparent 45%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, opacity: 0.02, backgroundImage: 'radial-gradient(rgba(26,23,18,0.6) 0.5px, transparent 0.5px)', backgroundSize: '11px 11px', pointerEvents: 'none' }} />
          <div className="hidden lg:block" style={{ position: 'absolute', top: 0, bottom: 0, left: '57%', width: 1, background: `linear-gradient(180deg, transparent 8%, rgba(169,138,62,0.2) 25%, rgba(169,138,62,0.2) 75%, transparent 92%)`, zIndex: 1, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: `linear-gradient(to bottom, transparent, ${c.cream})`, pointerEvents: 'none', zIndex: 3 }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)', display: 'flex', minHeight: '100%', alignItems: 'center', paddingTop: 'clamp(7rem, 14vh, 10rem)', paddingBottom: 'clamp(5rem, 10vh, 8rem)' }}>
            <motion.div initial="hidden" animate="visible" variants={reduced ? undefined : stagger} style={{ display: 'grid', width: '100%', alignItems: 'center', gap: 'clamp(2.5rem, 5vw, 4rem)', gridTemplateColumns: '1fr' }} className="lg:!grid-cols-[1fr_400px]">

              <div>
                {/* Accepting */}
                <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 48, padding: '8px 18px 8px 14px', borderRadius: 999, background: 'rgba(45,139,95,0.08)', border: '1px solid rgba(45,139,95,0.15)' }}>
                  <span className="relative flex" style={{ width: 8, height: 8 }}>
                    <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: c.emeraldLight, opacity: 0.6 }} />
                    <span style={{ position: 'relative', display: 'block', width: 8, height: 8, borderRadius: '50%', backgroundColor: c.emerald }} />
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', color: c.emerald }}>Accepting New Patients</span>
                </motion.div>

                {/* Heading */}
                <motion.h1 variants={fadeUp} style={{ fontFamily: serif, fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.04, letterSpacing: '-0.03em', color: c.ink, marginBottom: 0 }}>
                  Book Your
                </motion.h1>
                <motion.div variants={fadeUp} aria-hidden="true" style={{ fontFamily: serif, fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.04, letterSpacing: '-0.03em', color: c.goldDeep, marginBottom: 32 }}>
                  Assessment
                </motion.div>

                <motion.div variants={fadeUp} style={{ width: 56, height: 3, borderRadius: 2, background: `linear-gradient(90deg, ${c.gold}, ${c.goldDeep})`, marginBottom: 32 }} />

                <motion.p variants={fadeUp} style={{ maxWidth: 420, color: c.body, fontSize: 16, lineHeight: 1.85, marginBottom: 40 }}>
                  One-on-one physiotherapy focused on finding the root cause. Sports injuries, knee and hip pain, dry needling, cupping, and exercise rehabilitation.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ marginBottom: 40 }}>
                  <BookingCTA size="lg" className="w-full sm:w-auto !rounded-[10px] !px-10 !py-[18px] !text-[11px] !tracking-[0.2em]" style={{ boxShadow: '0 12px 40px -8px rgba(169,138,62,0.45)' }}>
                    Book Assessment
                    <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a href="tel:+19056346000" className="inline-flex items-center justify-center gap-2.5" style={{ padding: '18px 24px', borderRadius: 10, background: c.white, border: `1px solid ${c.goldLine}`, color: c.ink, fontSize: 13, fontWeight: 700, boxShadow: '0 4px 16px -4px rgba(169,138,62,0.1)', cursor: 'pointer' }}>
                    <PhoneIcon width={16} height={16} aria-hidden="true" style={{ color: c.goldDeep }} />
                    (905) 634-6000
                  </a>
                </motion.div>

                {/* Stars + trust */}
                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                  <Stars size={15} gap={1} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: c.heading }}>5.0</span>
                  <span style={{ fontSize: 13, color: c.bodyLight }}>from 17 Google reviews</span>
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                  {['Direct Billing', 'No Referral Needed', 'Evening Hours'].map((badge) => (
                    <span key={badge} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 999, background: c.linen, border: `1px solid ${c.goldLine}`, fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', color: c.body }}>
                      <CheckCircleIcon width={14} height={14} style={{ color: c.goldDeep }} aria-hidden="true" />
                      {badge}
                    </span>
                  ))}
                </motion.div>
                <motion.p variants={fadeUp} style={{ marginTop: 32, fontSize: 12, color: c.goldDeep, fontWeight: 600, letterSpacing: '0.08em' }}>
                  Registered Physiotherapist, MSc PT, BSc Kin &middot; CPO #20079
                </motion.p>
              </div>

              {/* PORTRAIT — desktop only */}
              <motion.div className="hidden lg:flex" initial={reduced ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'relative', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'absolute', top: -10, left: -10, width: 48, height: 48, borderTop: `2px solid ${c.goldWarm}40`, borderLeft: `2px solid ${c.goldWarm}40`, pointerEvents: 'none', zIndex: 4 }} />
                <div style={{ position: 'absolute', bottom: -10, right: -10, width: 48, height: 48, borderBottom: `2px solid ${c.goldWarm}40`, borderRight: `2px solid ${c.goldWarm}40`, pointerEvents: 'none', zIndex: 4 }} />
                <motion.div style={{ position: 'relative', width: '100%', maxWidth: 400, borderRadius: 14, overflow: 'hidden', boxShadow: '0 48px 96px -24px rgba(26,23,18,0.25), 0 20px 40px -12px rgba(169,138,62,0.08)', scale: reduced ? 1 : photoScale, y: reduced ? 0 : photoY }}>
                  <img src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png" alt="Kareem Hassanein, Registered Physiotherapist in Burlington" width={826} height={1169} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: `linear-gradient(to top, ${c.cream}ee, ${c.cream}60, transparent)`, pointerEvents: 'none' }} />
                </motion.div>
                <motion.div initial={reduced ? false : { opacity: 0, x: -16, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'absolute', bottom: 48, left: -28, background: c.white, borderRadius: 14, padding: '18px 22px', boxShadow: '0 20px 56px -14px rgba(26,23,18,0.18), 0 0 0 1px rgba(169,138,62,0.08)', maxWidth: 200, zIndex: 5 }}>
                  <p style={{ fontFamily: serif, fontWeight: 400, fontSize: 16, color: c.heading, lineHeight: 1.2, marginBottom: 4 }}>Kareem Hassanein</p>
                  <p style={{ fontSize: 11, color: c.goldDeep, fontWeight: 700, letterSpacing: '0.06em' }}>Registered Physiotherapist</p>
                  <p style={{ fontSize: 11, color: c.bodyLight, marginTop: 4 }}>MSc PT, BSc Kin &middot; CPO #20079</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════ CYCLING REVIEWS ════════════════ */}
        <div style={{ background: `linear-gradient(180deg, ${c.cream} 0%, ${c.linen} 100%)` }}>
          <div style={{ maxWidth: 840, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)', paddingTop: 'clamp(5rem, 10vw, 8rem)', paddingBottom: 'clamp(5rem, 10vw, 8rem)' }}>
            <Reveal>
              <div style={{ position: 'relative', paddingLeft: 'clamp(2rem, 5vw, 3.5rem)' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, borderRadius: 2, background: `linear-gradient(180deg, ${c.gold}, ${c.goldDeep})` }} />

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, marginBottom: 40 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.goldDeep, margin: 0 }}>Patient Reviews</p>
                  <span style={{ width: 1, height: 12, background: c.goldLine }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Stars size={12} gap={1} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: c.heading }}>5.0 from 17 reviews</span>
                  </div>
                </div>

                <div style={{ position: 'relative', height: 'clamp(200px, 28vw, 240px)', overflow: 'hidden' }}>
                  <AnimatePresence mode="wait">
                    <motion.div key={activeReview} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                      <p style={{ fontFamily: serif, fontSize: 'clamp(1.35rem, 2.5vw, 1.9rem)', fontWeight: 300, lineHeight: 1.55, letterSpacing: '-0.01em', color: c.heading, marginBottom: 32 }}>
                        &ldquo;{reviews[activeReview].text}&rdquo;
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${c.goldWarm}, ${c.goldDeep})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.white, fontSize: 14, fontWeight: 700, fontFamily: serif, flexShrink: 0 }}>
                          {reviews[activeReview].name.charAt(0)}
                        </div>
                        <div>
                          <p style={{ color: c.heading, fontWeight: 700, fontSize: 14, lineHeight: 1.3, margin: 0 }}>{reviews[activeReview].name}</p>
                          <p style={{ fontSize: 11, color: c.bodyLight, fontWeight: 500, margin: '3px 0 0' }}>Google Review</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {reviews.map((_, i) => (
                      <button key={i} onClick={() => resetTimer(i)} aria-label={`Show review ${i + 1}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 44, border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}>
                        <span style={{ display: 'block', width: activeReview === i ? 24 : 8, height: 8, borderRadius: 4, background: activeReview === i ? `linear-gradient(90deg, ${c.gold}, ${c.goldDeep})` : c.goldLine, transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease' }} />
                      </button>
                    ))}
                  </div>
                  <a href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: c.goldDeep, fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', cursor: 'pointer', padding: '8px 0' }}>
                    Read all on Google <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ════════════════ WHAT TO EXPECT ════════════════ */}
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)', paddingTop: 'clamp(6rem, 10vw, 8rem)', paddingBottom: 'clamp(6rem, 10vw, 8rem)' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.goldDeep, margin: 0 }}>What to Expect</p>
              <span style={{ flex: 1, height: 1, background: c.goldLine, maxWidth: 80 }} />
            </div>
            <h2 style={{ fontFamily: serif, color: c.heading, fontWeight: 400, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 24, maxWidth: 480 }}>
              What your first visit looks like
            </h2>
            <p style={{ color: c.body, fontSize: 16, lineHeight: 1.85, maxWidth: 460, marginBottom: 72 }}>
              Your appointment is built around assessment, treatment, and a clear explanation of what comes next.
            </p>
          </Reveal>

          <div className="grid gap-y-16 gap-x-20 sm:grid-cols-2">
            {careHighlights.map((item, i) => (
              <Reveal key={item.title} delay={0.06 * i} style={{ marginTop: i % 2 !== 0 ? 'clamp(0px, 5vw, 3rem)' : 0 }}>
                <div style={{ paddingLeft: 24, borderLeft: `2px solid ${c.goldLine}` }}>
                  <h3 style={{ fontFamily: serif, color: c.heading, fontWeight: 500, fontSize: 'clamp(1.1rem, 1.5vw, 1.2rem)', lineHeight: 1.35, marginBottom: 12 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: c.body, fontSize: 15, lineHeight: 1.85 }}>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ════════════ TREATMENT ROOM — full-bleed visual break ════════════ */}
        <Reveal>
          <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)' }}>
            <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
              <img src="/images/clinic-room-may-25.webp" alt="Treatment room at Endorphins Health and Wellness Centre" width={1200} height={800} style={{ width: '100%', height: 'auto', display: 'block', maxHeight: 420, objectFit: 'cover', objectPosition: 'center 45%' }} />
              {/* Warm cinematic overlay */}
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${c.cream}50, transparent 40%, ${c.goldDeep}18)`, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,23,18,0.25), transparent 40%)', pointerEvents: 'none' }} />
              {/* Caption overlay */}
              <div style={{ position: 'absolute', bottom: 24, left: 32, right: 32 }}>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 14, fontWeight: 600, letterSpacing: '0.04em' }}>Private treatment room at Endorphins Health</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, marginTop: 4 }}>4631 Palladium Way, Burlington</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ════════════════ PRICING & CLINIC ════════════════ */}
        <div style={{ background: `linear-gradient(180deg, ${c.white} 0%, ${c.creamWarm}45 8%, ${c.creamWarm}55 50%, ${c.creamWarm}45 92%, ${c.white} 100%)` }}>
          <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)', paddingTop: 'clamp(6rem, 10vw, 8rem)', paddingBottom: 'clamp(6rem, 10vw, 8rem)' }}>
            <div className="grid gap-24 lg:grid-cols-2">
              {/* Pricing */}
              <Reveal>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.goldDeep, margin: 0 }}>Fees</p>
                    <span style={{ flex: 1, height: 1, background: c.goldLine, maxWidth: 60 }} />
                  </div>
                  <h2 style={{ fontFamily: serif, color: c.heading, fontWeight: 400, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 48 }}>
                    Transparent pricing
                  </h2>

                  {/* Pricing — clean two-row layout, not giant numbers */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {[
                      { label: 'Initial Assessment', price: '130', note: 'Assessment + treatment' },
                      { label: 'Follow-up Visit', price: '90', note: '30-minute session' },
                    ].map((item, i) => (
                      <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '24px 0', borderBottom: i === 0 ? `1px solid ${c.goldLine}` : 'none' }}>
                        <div>
                          <p style={{ color: c.heading, fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{item.label}</p>
                          <p style={{ color: c.bodyLight, fontSize: 13 }}>{item.note}</p>
                        </div>
                        <p style={{ fontFamily: serif, fontWeight: 400, color: c.heading, fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>${item.price}</p>
                      </div>
                    ))}
                  </div>

                  <p style={{ color: c.bodyLight, fontSize: 13, lineHeight: 1.85, marginTop: 32 }}>
                    Direct billing available for Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.
                  </p>
                </div>
              </Reveal>

              {/* Clinic details */}
              <Reveal delay={0.1}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.goldDeep, margin: 0 }}>Clinic Details</p>
                    <span style={{ flex: 1, height: 1, background: c.goldLine, maxWidth: 60 }} />
                  </div>
                  <h2 style={{ fontFamily: serif, color: c.heading, fontWeight: 400, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 48 }}>
                    Burlington &amp; Waterdown
                  </h2>

                  <div style={{ display: 'grid', gap: 32 }}>
                    {clinicDetails.map((detail) => (
                      <div key={detail.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: c.goldFaint, border: `1px solid ${c.goldLine}`, flexShrink: 0 }}>
                          <detail.icon width={20} height={20} aria-hidden="true" style={{ color: c.goldDeep }} />
                        </span>
                        <div>
                          <p style={{ color: c.goldDeep, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>{detail.label}</p>
                          <p style={{ color: c.body, fontSize: 15, lineHeight: 1.85, whiteSpace: 'pre-line' }}>{detail.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2" style={{ marginTop: 32 }}>
                    {serviceAreas.map((area) => (
                      <span key={area} style={{ padding: '7px 14px', borderRadius: 999, background: c.goldFaint, border: `1px solid ${c.goldLine}`, color: c.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{area}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ════════════════ BOTTOM CTA ════════════════ */}
        <div style={{ background: c.dark, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-30%', left: '8%', width: '60%', height: '160%', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06), transparent 50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 0.5px, transparent 0.5px)', backgroundSize: '12px 12px', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', maxWidth: 960, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)', paddingTop: 'clamp(6rem, 10vw, 8rem)', paddingBottom: 'clamp(6rem, 10vw, 8rem)' }}>
            <Reveal>
              <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
                <div style={{ marginBottom: 40 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: `${c.goldWarm}90`, marginBottom: 24 }}>Book Your Assessment</p>
                  <h2 style={{ fontFamily: serif, color: c.white, fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24, maxWidth: 400 }}>
                    Choose a time that works for you
                  </h2>
                  <div style={{ width: 48, height: 2.5, borderRadius: 2, background: `${c.goldWarm}35`, marginBottom: 24 }} />
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.85, maxWidth: 380 }}>
                    No referral required. Book online in under a minute or call the clinic directly.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row" style={{ flexShrink: 0 }}>
                  <BookingCTA size="lg" className="w-full sm:w-auto !rounded-[10px] !px-10 !py-[18px] !text-[11px] !tracking-[0.2em]" style={{ boxShadow: '0 16px 48px -10px rgba(212,175,55,0.5)' }}>
                    Book Assessment <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a href="tel:+19056346000" className="inline-flex items-center justify-center gap-2.5" style={{ padding: '18px 24px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: c.white, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                    <PhoneIcon width={15} height={15} aria-hidden="true" style={{ color: c.goldWarm }} /> (905) 634-6000
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
