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
   DESIGN: Editorial Luxury — Magazine-grade healthcare conversion
   AESTHETIC: Warm cream, oversized serif, bold gold, asymmetric flow
   SIGNATURE: Vertical gold thread, featured pull-quote moment,
              editorial portrait composition
   ═══════════════════════════════════════════════════════════ */

const c = {
  gold: '#D4AF37',
  goldDeep: '#B08D57',
  goldMuted: 'rgba(176,141,87,0.55)',
  goldFaint: 'rgba(176,141,87,0.07)',
  goldLine: 'rgba(176,141,87,0.2)',
  goldBold: 'rgba(212,175,55,0.25)',

  cream: '#FAF6EE',
  creamWarm: '#F3ECDE',
  creamDeep: '#EBE2D0',
  parchment: '#FEFCF8',
  white: '#FFFFFF',

  ink: '#14142B',
  heading: '#1B1B2F',
  body: '#555566',
  bodyLight: '#7E7E90',
  caption: '#A0A0B0',

  navy: '#0C1322',
  navyLight: '#162035',
  emerald: '#059669',
  emeraldLight: '#34d399',
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

const pricingOptions = [
  { label: 'Initial Assessment', price: '$130', note: 'Assessment + treatment' },
  { label: 'Follow-up Visit', price: '$90', note: '30-minute session' },
];

const clinicDetails: Array<{ label: string; value: string; icon: IconComponent }> = [
  { label: 'Location', value: 'Endorphins Health & Wellness Centre\n4631 Palladium Way, Unit 6\nBurlington, ON', icon: MapPinIcon },
  { label: 'Hours', value: 'Mon / Tue / Thu: 1:30 \u2013 8:00 PM\nWed / Fri: 2:00 \u2013 7:30 PM', icon: ClockIcon },
  { label: 'Billing', value: 'Direct billing available for Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.', icon: CreditCardIcon },
];

const serviceAreas = ['Burlington', 'Waterdown', 'Flamborough', 'Carlisle', 'Oakville'];

/* ─── SUB-COMPONENTS ─── */

function Stars({ size = 16, gap = 2 }: { size?: number; gap?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap }}>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} width={size} height={size} style={{ color: c.gold }} aria-hidden="true" />
      ))}
    </span>
  );
}

function Reveal({ children, delay = 0, distance = 32, style, className }: {
  children: ReactNode; delay?: number; distance?: number; style?: CSSProperties; className?: string;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true, rootMargin: '0px 0px -8% 0px' });
  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : 'hidden'}
      animate={reduced || inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN
   ═══════════════════════════════════════════════════════════ */

export default function IntakeLandingPage() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  const photoScale = useSpring(useTransform(heroProgress, [0, 1], [1, 1.08]), { stiffness: 120, damping: 28, mass: 0.5 });
  const photoY = useSpring(useTransform(heroProgress, [0, 1], [0, 60]), { stiffness: 120, damping: 28, mass: 0.5 });

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  // Cycling featured review
  const [activeReview, setActiveReview] = useState(0);
  const reviewTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advanceReview = useCallback(() => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    reviewTimer.current = setInterval(advanceReview, 6000);
    return () => {
      if (reviewTimer.current) clearInterval(reviewTimer.current);
    };
  }, [advanceReview]);

  return (
    <>
      <style>{`
        .intake-page, .intake-page * { font-style: normal !important; }
        .intake-page section { padding: 0 !important; }
        .intake-page blockquote { font-style: normal !important; }
        .intake-hero { min-height: 100vh; min-height: 100dvh; }
        @media (prefers-reduced-motion: reduce) {
          .intake-page .animate-ping { display: none !important; }
        }
      `}</style>

      <main className="intake-page" style={{ fontFamily: sans, background: c.white, color: c.body, WebkitFontSmoothing: 'antialiased' }}>

        {/* ═══════════════════ HERO ═══════════════════ */}
        <section ref={heroRef} className="intake-hero" style={{ position: 'relative', overflow: 'hidden', background: c.cream }}>

          {/* Layered ambient texture */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 120% 90% at 15% 25%, rgba(212,175,55,0.08), transparent 55%), radial-gradient(ellipse 80% 70% at 85% 80%, rgba(176,141,87,0.05), transparent 50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'radial-gradient(rgba(20,20,43,0.7) 0.5px, transparent 0.5px)', backgroundSize: '11px 11px', pointerEvents: 'none' }} />

          {/* Signature: Vertical gold thread — runs full hero height on desktop */}
          <div className="hidden lg:block" style={{ position: 'absolute', top: 0, bottom: 0, left: '58%', width: 1, background: `linear-gradient(180deg, transparent 5%, ${c.goldBold} 20%, ${c.goldBold} 80%, transparent 95%)`, zIndex: 1, pointerEvents: 'none' }} />

          {/* Seamless bottom gradient */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 240, background: `linear-gradient(to bottom, transparent, ${c.cream})`, pointerEvents: 'none', zIndex: 3 }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)', display: 'flex', minHeight: '100%', alignItems: 'center', paddingTop: 'clamp(7rem, 14vh, 11rem)', paddingBottom: 'clamp(6rem, 12vh, 10rem)' }}>

            <motion.div initial="hidden" animate="visible" variants={reduced ? undefined : stagger} style={{ display: 'grid', width: '100%', alignItems: 'center', gap: 'clamp(3rem, 6vw, 5rem)', gridTemplateColumns: '1fr' }} className="lg:!grid-cols-[1fr_420px]">

              {/* ── TEXT COLUMN ── */}
              <div>
                {/* Accepting badge */}
                <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 44, padding: '8px 18px 8px 14px', borderRadius: 999, background: 'rgba(5,150,105,0.06)', border: '1px solid rgba(5,150,105,0.12)' }}>
                  <span className="relative flex" style={{ width: 8, height: 8 }}>
                    <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: c.emeraldLight, opacity: 0.6 }} />
                    <span style={{ position: 'relative', display: 'block', width: 8, height: 8, borderRadius: '50%', backgroundColor: c.emerald }} />
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', color: c.emerald }}>Accepting New Patients</span>
                </motion.div>

                {/* OVERSIZED heading — the editorial statement */}
                <motion.h1 variants={fadeUp} style={{ fontFamily: serif, fontSize: 'clamp(3rem, 6.5vw, 5.5rem)', fontWeight: 300, lineHeight: 1.02, letterSpacing: '-0.035em', color: c.ink, marginBottom: 0 }}>
                  Book Your
                </motion.h1>
                <motion.h1 variants={fadeUp} aria-hidden="true" style={{ fontFamily: serif, fontSize: 'clamp(3rem, 6.5vw, 5.5rem)', fontWeight: 300, lineHeight: 1.02, letterSpacing: '-0.035em', color: c.goldDeep, marginBottom: 32 }}>
                  Assessment
                </motion.h1>

                {/* Bold gold accent bar */}
                <motion.div variants={fadeUp} style={{ width: 64, height: 3, borderRadius: 2, background: `linear-gradient(90deg, ${c.gold}, ${c.goldDeep})`, marginBottom: 32 }} />

                {/* Subtitle */}
                <motion.p variants={fadeUp} style={{ maxWidth: 420, color: c.body, fontSize: 'clamp(1.02rem, 1.5vw, 1.12rem)', lineHeight: 1.85, marginBottom: 40 }}>
                  One-on-one physiotherapy focused on finding the root cause. Sports injuries, knee and hip pain, dry needling, cupping, and exercise rehabilitation.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ marginBottom: 40 }}>
                  <BookingCTA size="lg" className="w-full sm:w-auto !rounded-[10px] !px-10 !py-[18px] !text-[11px] !tracking-[0.2em]" style={{ boxShadow: '0 12px 40px -8px rgba(176,141,87,0.45)' }}>
                    Book Assessment
                    <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a href="tel:+19056346000" className="inline-flex items-center justify-center gap-2.5" style={{ padding: '18px 24px', borderRadius: 10, background: c.white, border: `1px solid ${c.goldLine}`, color: c.ink, fontSize: 13, fontWeight: 700, boxShadow: '0 4px 16px -4px rgba(176,141,87,0.1)', cursor: 'pointer' }}>
                    <PhoneIcon width={16} height={16} aria-hidden="true" style={{ color: c.goldDeep }} />
                    (905) 634-6000
                  </a>
                </motion.div>

                {/* Stars */}
                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <Stars size={15} gap={1} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: c.heading }}>5.0</span>
                  <span style={{ fontSize: 13, color: c.bodyLight }}>from 17 Google reviews</span>
                </motion.div>

                {/* Trust badges */}
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                  {['Direct Billing', 'No Referral Needed', 'Evening Hours'].map((badge) => (
                    <span key={badge} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 999, background: c.white, border: `1px solid ${c.goldLine}`, fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', color: c.body, boxShadow: '0 2px 8px rgba(176,141,87,0.06)' }}>
                      <CheckCircleIcon width={14} height={14} style={{ color: c.goldDeep }} aria-hidden="true" />
                      {badge}
                    </span>
                  ))}
                </motion.div>

                {/* Credentials */}
                <motion.p variants={fadeUp} style={{ marginTop: 28, fontSize: 12, color: c.goldDeep, fontWeight: 500, letterSpacing: '0.08em' }}>
                  Registered Physiotherapist, MSc PT, BSc Kin &middot; CPO #20079
                </motion.p>
              </div>

              {/* ── PORTRAIT COLUMN ── */}
              <motion.div
                className="hidden lg:flex"
                initial={reduced ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'relative', flexDirection: 'column', alignItems: 'center' }}
              >
                {/* Gold decorative bracket — top-left */}
                <div style={{ position: 'absolute', top: -12, left: -12, width: 56, height: 56, borderTop: `2.5px solid ${c.gold}50`, borderLeft: `2.5px solid ${c.gold}50`, pointerEvents: 'none', zIndex: 4 }} />
                {/* Gold decorative bracket — bottom-right */}
                <div style={{ position: 'absolute', bottom: -12, right: -12, width: 56, height: 56, borderBottom: `2.5px solid ${c.gold}50`, borderRight: `2.5px solid ${c.gold}50`, pointerEvents: 'none', zIndex: 4 }} />

                {/* Photo with parallax */}
                <motion.div style={{ position: 'relative', width: '100%', maxWidth: 420, borderRadius: 14, overflow: 'hidden', boxShadow: '0 56px 112px -28px rgba(20,20,43,0.22), 0 24px 48px -16px rgba(176,141,87,0.1)', scale: reduced ? 1 : photoScale, y: reduced ? 0 : photoY }}>
                  <img
                    src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png"
                    alt="Kareem Hassanein, Registered Physiotherapist in Burlington"
                    width={826} height={1169}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  {/* Warm gradient vignette */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', background: `linear-gradient(to top, ${c.cream}dd, ${c.cream}55, transparent)`, pointerEvents: 'none' }} />
                </motion.div>

                {/* Floating credentials */}
                <motion.div
                  initial={reduced ? false : { opacity: 0, x: -20, scale: 0.94 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: 'absolute', bottom: 56, left: -48, background: c.white, borderRadius: 16, padding: '20px 26px', boxShadow: '0 24px 64px -16px rgba(20,20,43,0.16), 0 0 0 1px rgba(176,141,87,0.08)', maxWidth: 220, zIndex: 5 }}
                >
                  <p style={{ fontFamily: serif, fontWeight: 400, fontSize: 18, color: c.heading, lineHeight: 1.2, marginBottom: 6 }}>Kareem Hassanein</p>
                  <p style={{ fontSize: 11, color: c.goldDeep, fontWeight: 700, letterSpacing: '0.06em' }}>Registered Physiotherapist</p>
                  <p style={{ fontSize: 11, color: c.bodyLight, marginTop: 5 }}>MSc PT, BSc Kin &middot; CPO #20079</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ CYCLING PULL-QUOTE — editorial moment ═══════════ */}
        <div style={{ background: `linear-gradient(180deg, ${c.cream} 0%, ${c.white} 100%)` }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)', paddingTop: 'clamp(5rem, 10vw, 8rem)', paddingBottom: 'clamp(5rem, 10vw, 8rem)' }}>
            <Reveal>
              <div style={{ position: 'relative', paddingLeft: 'clamp(2rem, 5vw, 4rem)' }}>
                {/* Vertical gold bar */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, borderRadius: 2, background: `linear-gradient(180deg, ${c.gold}, ${c.goldDeep})` }} />

                {/* Cycling quote area — fixed height to prevent layout shift */}
                <div style={{ position: 'relative', minHeight: 'clamp(160px, 22vw, 220px)' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeReview}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p style={{ fontFamily: serif, fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', fontWeight: 300, lineHeight: 1.45, letterSpacing: '-0.015em', color: c.heading, marginBottom: 28 }}>
                        &ldquo;{reviews[activeReview].text}&rdquo;
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${c.gold}, ${c.goldDeep})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.white, fontSize: 14, fontWeight: 700, fontFamily: serif }}>
                          {reviews[activeReview].name.charAt(0)}
                        </div>
                        <div>
                          <p style={{ color: c.heading, fontWeight: 700, fontSize: 14 }}>{reviews[activeReview].name}</p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                            <Stars size={11} gap={1} />
                            <span style={{ fontSize: 11, color: c.bodyLight, fontWeight: 500 }}>Google Review</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Progress dots */}
                <div style={{ display: 'flex', gap: 8, marginTop: 32 }}>
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveReview(i);
                        if (reviewTimer.current) clearInterval(reviewTimer.current);
                        reviewTimer.current = setInterval(advanceReview, 6000);
                      }}
                      aria-label={`Show review ${i + 1}`}
                      style={{
                        width: activeReview === i ? 24 : 8,
                        height: 8,
                        borderRadius: 4,
                        border: 'none',
                        background: activeReview === i
                          ? `linear-gradient(90deg, ${c.gold}, ${c.goldDeep})`
                          : c.goldLine,
                        cursor: 'pointer',
                        transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease',
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ═══════════════════ WHAT TO EXPECT ═══════════════════ */}
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)', paddingTop: 'clamp(4rem, 8vw, 6rem)', paddingBottom: 'clamp(6rem, 10vw, 8rem)' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: c.goldDeep }}>What to Expect</p>
              <span style={{ flex: 1, height: 1, background: c.goldLine, maxWidth: 80 }} />
            </div>
            <h2 style={{ fontFamily: serif, color: c.heading, fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 20, maxWidth: 500 }}>
              What your first<br />visit looks like
            </h2>
            <div style={{ width: 40, height: 2, borderRadius: 1, background: c.goldLine, marginBottom: 24 }} />
            <p style={{ color: c.body, fontSize: 16, lineHeight: 1.85, maxWidth: 460, marginBottom: 72 }}>
              Your appointment is built around assessment, treatment, and a clear explanation of what comes next.
            </p>
          </Reveal>

          {/* Asymmetric staggered grid */}
          <div className="grid gap-y-20 gap-x-24 sm:grid-cols-2">
            {careHighlights.map((item, i) => (
              <Reveal key={item.title} delay={0.06 * i} style={{ marginTop: i % 2 !== 0 ? 'clamp(0px, 6vw, 4rem)' : 0 }}>
                <div>
                  {/* Large serif number */}
                  <p style={{ fontFamily: serif, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, color: c.goldBold, lineHeight: 1, marginBottom: 18, letterSpacing: '-0.03em' }}>
                    0{i + 1}
                  </p>
                  <h3 style={{ fontFamily: serif, color: c.heading, fontWeight: 400, fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)', lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: 14 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: c.body, fontSize: 15, lineHeight: 1.85 }}>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ═══════════════════ REVIEWS ═══════════════════ */}
        <div style={{ background: `linear-gradient(180deg, ${c.white} 0%, ${c.creamWarm}60 6%, ${c.creamWarm}75 50%, ${c.creamWarm}60 94%, ${c.white} 100%)` }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)', paddingTop: 'clamp(6rem, 10vw, 8rem)', paddingBottom: 'clamp(6rem, 10vw, 8rem)' }}>
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: c.goldDeep }}>Patient Reviews</p>
                <span style={{ flex: 1, height: 1, background: c.goldLine, maxWidth: 80 }} />
              </div>
              <h2 style={{ fontFamily: serif, color: c.heading, fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 16 }}>
                What patients say
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 80 }}>
                <Stars size={15} gap={1} />
                <span style={{ fontSize: 14, fontWeight: 700, color: c.heading }}>5.0</span>
                <span style={{ fontSize: 13, color: c.bodyLight }}>from 17 Google reviews</span>
              </div>
            </Reveal>

            {/* Reviews — editorial style with large quotes */}
            <div className="grid gap-x-16 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <Reveal key={review.name} delay={0.05 * i}>
                  <div style={{ position: 'relative' }}>
                    <p style={{ fontFamily: serif, fontSize: 56, lineHeight: 0.5, color: c.goldBold, marginBottom: 20, userSelect: 'none' }}>&ldquo;</p>
                    <p style={{ color: c.body, fontSize: 15, lineHeight: 1.95, marginBottom: 24 }}>{review.text}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(135deg, ${c.gold}30, ${c.goldDeep}20)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: c.goldDeep, fontFamily: serif }}>{review.name.charAt(0)}</div>
                      <p style={{ color: c.heading, fontWeight: 600, fontSize: 13, letterSpacing: '0.02em' }}>{review.name}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25} style={{ marginTop: 64 }}>
              <a href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: c.goldDeep, fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', cursor: 'pointer' }}>
                Read all reviews on Google
                <ArrowRightIcon width={14} height={14} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* ═══════════════════ PRICING & DETAILS ═══════════════════ */}
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)', paddingTop: 'clamp(6rem, 10vw, 8rem)', paddingBottom: 'clamp(6rem, 10vw, 8rem)' }}>
          <div className="grid gap-24 lg:grid-cols-2">
            {/* Pricing */}
            <Reveal>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: c.goldDeep }}>Fees</p>
                  <span style={{ flex: 1, height: 1, background: c.goldLine, maxWidth: 60 }} />
                </div>
                <h2 style={{ fontFamily: serif, color: c.heading, fontWeight: 300, fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: 48 }}>
                  Transparent pricing
                </h2>

                <div style={{ display: 'grid', gap: 44, gridTemplateColumns: '1fr 1fr' }}>
                  {pricingOptions.map((item) => (
                    <div key={item.label}>
                      <p style={{ color: c.goldDeep, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>{item.label}</p>
                      {/* Dramatic serif price */}
                      <p style={{ fontFamily: serif, fontWeight: 300, color: c.ink, fontSize: 'clamp(2.8rem, 5vw, 3.6rem)', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 10, fontVariantNumeric: 'tabular-nums' }}>{item.price}</p>
                      <p style={{ color: c.bodyLight, fontSize: 14, lineHeight: 1.6 }}>{item.note}</p>
                    </div>
                  ))}
                </div>

                {/* Thin gold separator */}
                <div style={{ width: '100%', height: 1, background: c.goldLine, margin: '36px 0' }} />
                <p style={{ color: c.body, fontSize: 14, lineHeight: 1.85 }}>
                  Direct billing available for Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.
                </p>
              </div>
            </Reveal>

            {/* Clinic details */}
            <Reveal delay={0.1}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: c.goldDeep }}>Clinic Details</p>
                  <span style={{ flex: 1, height: 1, background: c.goldLine, maxWidth: 60 }} />
                </div>
                <h2 style={{ fontFamily: serif, color: c.heading, fontWeight: 300, fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: 48 }}>
                  Burlington &amp; Waterdown
                </h2>

                <div style={{ display: 'grid', gap: 36 }}>
                  {clinicDetails.map((detail) => (
                    <div key={detail.label} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, borderRadius: '50%', background: c.goldFaint, border: `1px solid ${c.goldLine}`, flexShrink: 0, marginTop: 2 }}>
                        <detail.icon width={18} height={18} aria-hidden="true" style={{ color: c.goldDeep }} />
                      </span>
                      <div>
                        <p style={{ color: c.goldDeep, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>{detail.label}</p>
                        <p style={{ color: c.body, fontSize: 15, lineHeight: 1.85, whiteSpace: 'pre-line' }}>{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service area pills */}
                <div className="flex flex-wrap gap-2.5" style={{ marginTop: 36 }}>
                  {serviceAreas.map((area) => (
                    <span key={area} style={{ padding: '8px 16px', borderRadius: 999, background: c.goldFaint, border: `1px solid ${c.goldLine}`, color: c.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{area}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ═══════════════════ BOTTOM CTA ═══════════════════ */}
        <div style={{ background: c.navy, position: 'relative', overflow: 'hidden' }}>
          {/* Warm glow */}
          <div style={{ position: 'absolute', top: '-40%', left: '5%', width: '70%', height: '180%', background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.05), transparent 55%)', pointerEvents: 'none' }} />
          {/* Grain texture */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.035, backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 0.5px, transparent 0.5px)', backgroundSize: '12px 12px', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)', paddingTop: 'clamp(6rem, 10vw, 8rem)', paddingBottom: 'clamp(6rem, 10vw, 8rem)' }}>
            <Reveal>
              <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
                <div style={{ marginBottom: 36 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: `${c.gold}aa`, marginBottom: 22 }}>Book Your Assessment</p>
                  <h2 style={{ fontFamily: serif, color: c.white, fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: 20, maxWidth: 440 }}>
                    Choose a time that<br />works for you
                  </h2>
                  <div style={{ width: 48, height: 2.5, borderRadius: 2, background: `${c.gold}40`, marginBottom: 20 }} />
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16, lineHeight: 1.85, maxWidth: 400 }}>
                    No referral required. Book online in under a minute or call the clinic directly.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row" style={{ flexShrink: 0 }}>
                  <BookingCTA size="lg" className="w-full sm:w-auto !rounded-[10px] !px-10 !py-[18px] !text-[11px] !tracking-[0.2em]" style={{ boxShadow: '0 16px 48px -10px rgba(212,175,55,0.5)' }}>
                    Book Assessment
                    <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a href="tel:+19056346000" className="inline-flex items-center justify-center gap-2.5" style={{ padding: '18px 24px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: c.white, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                    <PhoneIcon width={15} height={15} aria-hidden="true" style={{ color: c.gold }} />
                    (905) 634-6000
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
