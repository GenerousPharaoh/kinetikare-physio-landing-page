'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  ArrowLongRightIcon,
  ArrowsRightLeftIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';
import { getConditionBySlug } from '@/lib/conditions-data';
import { CONDITION_COMPARISONS } from '@/lib/condition-comparisons';

const featuredConditionSlugs = [
  'knee-pain-patellofemoral',
  'patellar-tendinopathy',
  'greater-trochanteric-pain-syndrome',
  'sciatica',
  'rotator-cuff-injuries',
  'ankle-sprains',
  'low-back-pain',
  'plantar-fasciitis',
  'frozen-shoulder',
];

const categoryLabels: Record<string, string> = {
  'spinal-health': 'Neck & Back',
  shoulder: 'Shoulder',
  knee: 'Knee',
  'foot-ankle': 'Foot & Ankle',
  'elbow-wrist-hand': 'Elbow, Wrist & Hand',
  'hip-pelvis': 'Hip & Pelvis',
};

// Body-region topic hubs. Kept to 4 core regions that have dedicated hub pages.
const regionHubs: {
  slug: string;
  label: string;
  blurb: string;
}[] = [
  {
    slug: 'hip-pain',
    label: 'Hip Pain',
    blurb: 'Lateral hip, groin, deep buttock pain, and what the pattern usually points to.',
  },
  {
    slug: 'knee-pain',
    label: 'Knee Pain',
    blurb: 'Front, inside, outside, or back-of-knee pain, mapped to the most likely causes.',
  },
  {
    slug: 'shoulder-pain',
    label: 'Shoulder Pain',
    blurb: 'Rotator cuff, stiffness, impingement, and instability sorted by symptom pattern.',
  },
  {
    slug: 'elbow-pain',
    label: 'Elbow Pain',
    blurb: 'Tennis elbow, golfer\u2019s elbow, nerve irritation, and elbow stiffness at a glance.',
  },
];

// Symptom-first pain guides. Keep this list short and curated.
const painGuides: { slug: string; label: string }[] = [
  { slug: 'pain-below-kneecap', label: 'Pain below the kneecap' },
  { slug: 'fluid-on-the-knee', label: 'Fluid on the knee' },
];

// Pulled from CONDITION_COMPARISONS so this row stays in sync automatically
// as new comparison pages are added.
const comparisonChips = CONDITION_COMPARISONS.map((c) => ({
  pair: c.pair,
  label: `${c.conditionA.shortName} vs. ${c.conditionB.shortName}`,
}));

export default function PopularConditionsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null!) as { current: HTMLDivElement | null };
  const { ref: autoScrollRef, inView: sectionVisible } = useInView({ threshold: 0.3, triggerOnce: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (!sectionVisible || !isMobile || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 12;
    let currentCard = 0;
    const totalCards = container.children.length;

    const interval = setInterval(() => {
      currentCard = (currentCard + 1) % totalCards;
      container.scrollTo({ left: currentCard * (cardWidth + gap), behavior: 'smooth' });
    }, 3000);

    return () => clearInterval(interval);
  }, [sectionVisible, isMobile]);
  const popularConditions = featuredConditionSlugs
    .map((slug) => getConditionBySlug(slug))
    .filter((condition): condition is NonNullable<typeof condition> => Boolean(condition));

  return (
    <section className="py-10 md:py-20 bg-slate-50/60">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Start by body region: topic hub cards */}
          <div className="mb-10 md:mb-16">
            <div className="text-center mb-5 md:mb-8">
              <p className="text-xs font-medium tracking-wider uppercase text-[#8A6F0A] mb-2">
                Start by body region
              </p>
              <h2 className="text-2xl md:text-4xl font-light text-slate-900 tracking-tight">
                Where does it hurt?
              </h2>
              <p className="mt-2 md:mt-3 text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
                Region-level overviews that sort common patterns and point you to the right
                detailed condition page.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
              {regionHubs.map((region) => (
                <Link
                  key={region.slug}
                  href={`/conditions/${region.slug}`}
                  prefetch={false}
                  className="group relative rounded-xl border border-slate-200 bg-white p-4 md:p-6 transition-all duration-300 hover:border-[#B08D57] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <h3 className="text-base md:text-lg font-medium text-slate-900 leading-tight group-hover:text-[#B08D57] transition-colors">
                    {region.label}
                  </h3>
                  <p className="mt-1.5 md:mt-2 text-xs md:text-sm text-slate-600 leading-relaxed">
                    {region.blurb}
                  </p>
                  <span className="mt-3 md:mt-4 inline-flex items-center text-sm font-medium text-slate-800 group-hover:text-[#B08D57] transition-colors">
                    Explore
                    <ArrowLongRightIcon className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-light text-slate-900 tracking-tight">
              Common Pain & Injury Topics
            </h2>
            <p className="mt-2 md:mt-3 text-sm md:text-lg text-slate-600 max-w-3xl mx-auto">
              Quick access to knee, hip, back, shoulder, and sports injury pages with symptoms,
              contributing factors, and management options.
            </p>
          </div>

          <div ref={(el: HTMLDivElement | null) => { scrollContainerRef.current = el; autoScrollRef(el); }} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
            {popularConditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                prefetch={false}
                className="group rounded-xl border border-slate-200 bg-white p-4 md:p-5 transition-all duration-300 hover:border-[#B08D57] hover:shadow-lg hover:-translate-y-0.5 min-w-[72vw] sm:min-w-[45vw] md:min-w-0 snap-start flex-shrink-0"
              >
                <p className="text-xs font-medium tracking-wide uppercase text-[#8A6F0A] mb-1.5 md:mb-2">
                  {categoryLabels[condition.category] || 'Condition'}
                </p>
                <h3 className="text-base md:text-lg font-medium text-slate-900 leading-tight group-hover:text-[#B08D57] transition-colors">
                  {condition.name}
                </h3>
                <p className="mt-1.5 md:mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {condition.description}
                </p>
                <span className="mt-3 md:mt-4 inline-flex items-center text-sm font-medium text-slate-800 group-hover:text-[#B08D57] transition-colors">
                  Read condition guide
                  <ArrowRightIcon className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-5 md:mt-8">
            <Link
              href="/conditions"
              prefetch={false}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
            >
              Browse all condition pages
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Secondary discovery: symptom-first pain guides + commonly-confused comparisons.
              Intentionally quieter visual weight than the hub cards above. */}
          <div className="mt-10 md:mt-16 pt-8 md:pt-10 border-t border-slate-200 grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MagnifyingGlassIcon className="h-4 w-4 text-[#8A6F0A]" />
                <p className="text-xs font-medium tracking-wider uppercase text-[#8A6F0A]">
                  Start with the symptom
                </p>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-3">
                Symptom-first pain guides
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Short reads that start from what you notice and walk through the most likely
                causes before you book an assessment.
              </p>
              <ul className="space-y-2">
                {painGuides.map((guide) => (
                  <li key={guide.slug}>
                    <Link
                      href={`/conditions/pain-guides/${guide.slug}`}
                      prefetch={false}
                      className="group inline-flex items-center text-sm font-medium text-slate-800 hover:text-[#B08D57] transition-colors"
                    >
                      <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-[#B08D57]">
                        {guide.label}
                      </span>
                      <ArrowLongRightIcon className="ml-1.5 h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/conditions/pain-guides"
                    prefetch={false}
                    className="inline-flex items-center text-xs font-medium text-slate-500 hover:text-[#B08D57] transition-colors mt-1"
                  >
                    See all pain guides
                    <ArrowRightIcon className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <ArrowsRightLeftIcon className="h-4 w-4 text-[#8A6F0A]" />
                <p className="text-xs font-medium tracking-wider uppercase text-[#8A6F0A]">
                  Commonly confused
                </p>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-3">
                Side-by-side comparisons
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Two conditions that get mistaken for each other, compared by location, pattern,
                and tests that help sort them apart.
              </p>
              <div className="flex flex-wrap gap-2">
                {comparisonChips.map((chip) => (
                  <Link
                    key={chip.pair}
                    href={`/conditions/compare/${chip.pair}`}
                    prefetch={false}
                    className="inline-flex items-center px-3 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:border-[#B08D57] hover:text-[#B08D57] hover:bg-[#B08D57]/[0.04] transition-colors"
                  >
                    {chip.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
