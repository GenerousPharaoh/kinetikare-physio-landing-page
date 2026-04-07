import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BookingCTA from '@/components/intake/BookingCTA';

export const metadata: Metadata = {
  title: 'Book Your Assessment | Kareem Hassanein Physiotherapy Burlington',
  description:
    'Book your physiotherapy assessment with Kareem Hassanein, Registered Physiotherapist in Burlington. One-on-one care, direct insurance billing, evening appointments, no referral needed.',
  openGraph: {
    title: 'Book Your Assessment | Kareem Hassanein Physiotherapy',
    description:
      'Book physiotherapy in Burlington. 5.0 stars on Google, direct insurance billing, evening appointments, no referral needed.',
  },
  robots: 'index, follow',
};

const reviews = [
  {
    name: 'Dr. Fel Rocci',
    text: 'Having worked with Kareem, I am now able to play tennis 4-5 times a week without a setback. Not bad for a 70 year old!',
  },
  {
    name: 'Nickel Chan',
    text: "Kareem is honestly one of the best physiotherapists I've ever seen. He fixed issues I'd been struggling with for a long time.",
  },
  {
    name: 'Thanula G.',
    text: 'Thorough, knowledgeable, and incredibly attentive. I saw consistent progress and now feel stronger and pain free.',
  },
  {
    name: 'Ryan Darkwah',
    text: "Kareem found the problem came from my hip and quads. My pain's gone now, and I'm back to playing at full speed.",
  },
  {
    name: 'David Espinosa',
    text: 'He took the time to figure out what was causing it instead of just treating the pain. My hip feels strong again and the foot pain is gone.',
  },
  {
    name: 'Marko Vasilic',
    text: "He did a full movement analysis and showed me where the extra stress was coming from. I'm back to playing basketball comfortably.",
  },
];

export default function IntakePage() {
  return (
    <main className="[&>div]:!p-0">
      {/* ================================================================ */}
      {/* HERO  --  full viewport, no scroll                               */}
      {/* ================================================================ */}
      <div className="relative min-h-screen flex flex-col bg-[#020617] overflow-hidden !p-0">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_48%,rgba(176,141,87,0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(212,175,55,0.04),transparent_50%)]" />

        {/* Thin gold accent line at very top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        {/* Main content -- vertically centered */}
        <div className="flex-1 flex items-center pt-[76px] pb-6">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl w-full">
            <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">

              {/* ---- Left column ---- */}
              <div>
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-[11px] font-semibold tracking-widest uppercase">
                    Accepting New Patients
                  </span>
                </div>

                {/* Heading */}
                <h1 className="font-serif text-[2.5rem] sm:text-5xl lg:text-[3.4rem] font-light text-white leading-[1.1] tracking-tight mb-5">
                  Book Your
                  <br />
                  <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8D48B] bg-clip-text text-transparent">
                    Assessment
                  </span>
                </h1>

                <p className="text-white/55 text-[15px] sm:text-base leading-relaxed mb-8 max-w-[420px]">
                  One-on-one physiotherapy with Kareem Hassanein,
                  Registered Physiotherapist. Burlington and Waterdown.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <BookingCTA size="lg">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    Book Online
                  </BookingCTA>
                  <a
                    href="tel:+19056346000"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white/70 border border-white/[0.12] hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    (905) 634-6000
                  </a>
                </div>

                {/* Google rating */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-[15px] h-[15px] text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/40 text-[13px]">
                    5.0 from 17 Google Reviews
                  </span>
                </div>
              </div>

              {/* ---- Right column: practitioner card ---- */}
              <div className="hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Card gold top edge */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] z-10" />

                  <div className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7">
                    {/* Profile header */}
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden ring-2 ring-[#D4AF37]/20 ring-offset-2 ring-offset-[#020617] flex-shrink-0">
                        <Image
                          src="/images/kareem-profile.webp"
                          alt="Kareem Hassanein, Registered Physiotherapist"
                          width={72}
                          height={72}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-white font-serif text-lg tracking-tight">Kareem Hassanein</h2>
                        <p className="text-[#D4AF37] text-sm font-medium mt-0.5">
                          Registered Physiotherapist
                        </p>
                        <p className="text-white/35 text-xs mt-1 tracking-wide">
                          MSc PT, BSc Kin &middot; CPO #20079
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3.5 text-[13px] mb-6">
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#D4AF37]/50 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z M12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                        </svg>
                        <span className="text-white/50 leading-snug">Endorphins Health, 4631 Palladium Way, Burlington</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#D4AF37]/50 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        <span className="text-white/50 leading-snug">Mon / Tue / Thu 1:30-8 PM, Wed / Fri 2-7:30 PM</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#D4AF37]/50 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 12l2 2 4-4M22 12A10 10 0 112 12a10 10 0 0120 0z" />
                        </svg>
                        <span className="text-white/50 leading-snug">Burlington, Waterdown, Flamborough, Carlisle</span>
                      </div>
                    </div>

                    {/* Service tags */}
                    <div className="pt-5 border-t border-white/[0.07] flex flex-wrap gap-1.5">
                      {['Manual Therapy', 'Dry Needling', 'Cupping', 'Sports Rehab', 'Exercise Rx'].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-md bg-[#D4AF37]/[0.06] text-[#D4AF37]/60 text-[11px] font-medium tracking-wide">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Trust bar pinned to bottom of hero ---- */}
        <div className="border-t border-white/[0.06] bg-white/[0.02]">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
              {[
                'No referral needed',
                'Direct insurance billing',
                'Evening appointments',
                'Free on-site parking',
                'Same-week availability',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-white/45 text-[12px] sm:text-[13px] tracking-wide">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* WHAT TO EXPECT                                                    */}
      {/* ================================================================ */}
      <div className="py-20 sm:py-24 bg-white !p-0">
        <div className="py-20 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <div className="max-w-xl mx-auto text-center mb-14">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B08D57] uppercase mb-4">
                What to Expect
              </p>
              <h2 className="text-2xl sm:text-[2rem] font-serif font-light text-[#1A2036] tracking-tight leading-snug">
                Individualized care, every session
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
              {[
                {
                  num: '01',
                  title: 'One-on-One Sessions',
                  desc: 'Your entire appointment is with Kareem. No assistants, no handoffs, no sharing time with other patients.',
                },
                {
                  num: '02',
                  title: 'Root Cause Focus',
                  desc: 'A thorough assessment of your movement patterns to address what is actually driving your pain.',
                },
                {
                  num: '03',
                  title: 'Treatment From Day One',
                  desc: 'Your first visit includes both assessment and hands-on treatment. No wasting a session on paperwork alone.',
                },
                {
                  num: '04',
                  title: 'Evidence-Based Care',
                  desc: 'Every intervention backed by current research. Manual therapy, dry needling, cupping, and exercise rehabilitation.',
                },
              ].map((item) => (
                <div key={item.num} className="bg-white p-8 sm:p-9 group">
                  <span className="text-[#D4AF37]/25 text-[2.5rem] font-serif font-light leading-none block mb-4">
                    {item.num}
                  </span>
                  <h3 className="text-[#1A2036] font-medium text-[15px] mb-2.5 group-hover:text-[#B08D57] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* REVIEWS                                                           */}
      {/* ================================================================ */}
      <div className="bg-[#faf9f7] !p-0">
        <div className="py-20 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <div className="max-w-xl mx-auto text-center mb-14">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
                  </svg>
                ))}
              </div>
              <h2 className="text-2xl sm:text-[2rem] font-serif font-light text-[#1A2036] tracking-tight">
                5.0 stars from 17 reviews
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r) => (
                <blockquote key={r.name} className="bg-white rounded-xl p-6 border border-slate-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col">
                  <svg className="w-7 h-7 text-[#D4AF37]/20 mb-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
                  </svg>
                  <p className="text-slate-600 text-[13px] leading-relaxed flex-1 mb-4">
                    {r.text}
                  </p>
                  <footer className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <span className="w-1 h-4 rounded-full bg-[#D4AF37]/30" />
                    <span className="text-xs font-semibold text-[#1A2036] tracking-wide">{r.name}</span>
                  </footer>
                </blockquote>
              ))}
            </div>

            <p className="text-center mt-8">
              <Link
                href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre"
                target="_blank"
                className="text-[13px] text-[#B08D57] hover:text-[#8c6e3a] font-medium transition-colors inline-flex items-center gap-1.5"
              >
                Read all reviews on Google
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* PRICING                                                           */}
      {/* ================================================================ */}
      <div className="bg-white !p-0">
        <div className="py-20 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <div className="max-w-xl mx-auto text-center mb-12">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B08D57] uppercase mb-4">
                Transparent Pricing
              </p>
              <h2 className="text-2xl sm:text-[2rem] font-serif font-light text-[#1A2036] tracking-tight">
                No hidden fees, no surprises
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 max-w-lg mx-auto mb-8">
              <div className="relative text-center p-7 rounded-2xl border border-slate-150 bg-[#faf9f7] overflow-hidden group hover:border-[#D4AF37]/20 transition-colors duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="text-[11px] font-semibold tracking-[0.15em] text-slate-400 uppercase mb-2">Initial Assessment</p>
                <p className="text-[2.5rem] font-serif font-light text-[#1A2036] leading-none mb-1.5">$130</p>
                <p className="text-xs text-slate-400">Assessment + treatment</p>
              </div>
              <div className="relative text-center p-7 rounded-2xl border border-slate-150 bg-[#faf9f7] overflow-hidden group hover:border-[#D4AF37]/20 transition-colors duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="text-[11px] font-semibold tracking-[0.15em] text-slate-400 uppercase mb-2">Follow-up Session</p>
                <p className="text-[2.5rem] font-serif font-light text-[#1A2036] leading-none mb-1.5">$90</p>
                <p className="text-xs text-slate-400">30-minute session</p>
              </div>
            </div>

            <p className="text-center text-[13px] text-slate-400 leading-relaxed max-w-md mx-auto">
              Direct billing to Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.
              Most extended health plans cover physiotherapy.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* BOTTOM CTA                                                        */}
      {/* ================================================================ */}
      <div className="relative bg-[#020617] overflow-hidden !p-0">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(212,175,55,0.04),transparent_60%)]" />

        <div className="relative py-20 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-white tracking-tight mb-4">
              Ready to move forward?
            </h2>
            <p className="text-white/40 text-[15px] mb-9 leading-relaxed max-w-sm mx-auto">
              Book online in under a minute. No referral required.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <BookingCTA size="lg">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Book Assessment
              </BookingCTA>
              <a
                href="tel:+19056346000"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white/60 border border-white/[0.1] hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300"
              >
                (905) 634-6000
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
