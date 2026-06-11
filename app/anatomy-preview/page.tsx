import type { Metadata } from 'next';
import Image from 'next/image';

// TEMPORARY direction-approval comp. Not linked anywhere, noindex, isolated from
// the 61 condition pages. Delete once the anatomy-imagery direction is locked.
export const metadata: Metadata = {
  title: 'Anatomy integration preview',
  robots: 'noindex, nofollow',
};

const KNEE = { src: '/images/anatomy/anatomy-knee-lateral.jpg', w: 1500, h: 1973 };
const KNEE_ALT = { src: '/images/anatomy/anatomy-knee-anterior.jpg', w: 1500, h: 2086 };
const SPINE = { src: '/images/anatomy/anatomy-spine-cervical.jpg', w: 1500, h: 2138 };

// Warm gold/bronze duotone approximation (filters only; production would use a
// proper two-tone map). multiply drops the cream paper into the page.
const GOLD_DUOTONE =
  'sepia(0.85) saturate(1.7) hue-rotate(-12deg) brightness(1.04) contrast(0.98)';

function FauxHero({
  treatment,
  label,
}: {
  treatment: 'natural' | 'gold';
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 text-[11px] font-medium uppercase tracking-[0.18em] text-[#8A6F0A]">
        {label}
      </div>
      <section className="bg-gradient-to-b from-slate-50 via-white to-transparent">
        <div className="px-6 sm:px-10 py-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
            {/* Text column — faithful to the real condition hero */}
            <div>
              <nav className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                <span>Home</span><span className="text-slate-300">/</span>
                <span>Conditions</span><span className="text-slate-300">/</span>
                <span className="text-slate-900 font-medium">Patellar Tendinopathy</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                Patellar Tendinopathy <span className="text-slate-400">(Jumper&apos;s Knee)</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl">
                Load-related pain at the front of the knee, where the patellar tendon meets the
                kneecap. Common in jumping and change-of-direction sport.
              </p>
              <div className="mt-6 border-t border-slate-200/80 pt-3 text-[13px] text-slate-600">
                <span className="font-semibold text-slate-900">Kareem Hassanein</span>{' '}
                Registered Physiotherapist
                <span className="text-slate-300"> · </span>
                <span className="text-slate-500">Last reviewed April 16, 2026</span>
              </div>
              <div className="mt-5">
                <span className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg bg-[#B08D57] text-white text-sm font-medium">
                  Book Initial Assessment
                </span>
              </div>
            </div>

            {/* Anatomy accent column */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[260px] sm:w-[300px]">
                <Image
                  src={KNEE.src}
                  width={KNEE.w}
                  height={KNEE.h}
                  alt="Anatomical illustration of the knee"
                  className="w-full h-auto mix-blend-multiply select-none"
                  style={treatment === 'gold' ? { filter: GOLD_DUOTONE } : undefined}
                  priority
                />
                {/* soft fade so the plate dissolves into the page rather than hard-cropping */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AnatomyPreviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6F0A]">
          Internal preview · not linked · noindex
        </p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
          Anatomy imagery — integration comp (Path A: real Leiden plates)
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl leading-relaxed">
          A real condition hero with the public-domain Leiden knee plate placed as a quiet accent,
          shown in two treatments. The cream paper is dropped into the page with a multiply blend so
          the drawing floats. The same component and placement carry over to Path B (custom gold
          line-art) — only the artwork swaps.
        </p>

        <div className="mt-10 space-y-10">
          <FauxHero treatment="natural" label="Treatment A — natural graphite" />
          <FauxHero treatment="gold" label="Treatment B — warm gold duotone (approximate)" />
        </div>

        {/* Cohesion strip */}
        <div className="mt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6F0A]">
            Do they read as one set?
          </p>
          <h2 className="mt-2 text-xl font-light text-slate-900">Knee &amp; spine, same treatment</h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl">
            Two regions, same archive, same hand — this is the cohesion test. Both shown with the
            natural multiply treatment on white.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 items-end">
            {[KNEE, SPINE, KNEE_ALT].map((img, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 flex justify-center">
                <Image
                  src={img.src}
                  width={img.w}
                  height={img.h}
                  alt="Anatomical plate"
                  className="w-full max-w-[180px] h-auto mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-sm text-slate-500 border-t border-slate-200 pt-6">
          Decisions to lock: (1) treatment — natural vs gold duotone; (2) placement — hero accent (shown)
          vs larger faint background watermark; (3) whether to proceed with Path A (these real plates)
          or Path B (custom gold line-art set). Then I build the production component and wire it per region.
        </p>
      </div>
    </main>
  );
}
