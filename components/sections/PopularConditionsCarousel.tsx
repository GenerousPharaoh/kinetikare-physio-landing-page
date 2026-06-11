'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

export interface PopularConditionCard {
  slug: string;
  name: string;
  description: string;
  categoryLabel: string;
}

/**
 * Client island for the homepage "Common Pain & Injury Topics" row. Owns the
 * mobile auto-scroll carousel behaviour only; the condition data is computed in
 * the parent Server Component and passed in as props, so the heavy
 * conditions-data / condition-comparisons modules never reach the client bundle.
 */
export default function PopularConditionsCarousel({
  conditions,
}: {
  conditions: PopularConditionCard[];
}) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { ref: autoScrollRef, inView: sectionVisible } = useInView({ threshold: 0.3 });
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
    let userInterrupted = false;

    const onUserScroll = () => { userInterrupted = true; };
    container.addEventListener('touchstart', onUserScroll, { passive: true });

    const interval = setInterval(() => {
      if (userInterrupted) return;
      currentCard = (currentCard + 1) % totalCards;
      container.scrollTo({ left: currentCard * (cardWidth + gap), behavior: 'smooth' });
    }, 3000);

    return () => {
      clearInterval(interval);
      container.removeEventListener('touchstart', onUserScroll);
    };
  }, [sectionVisible, isMobile]);

  return (
    <div
      ref={(el: HTMLDivElement | null) => { scrollContainerRef.current = el; autoScrollRef(el); }}
      className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide"
    >
      {conditions.map((condition) => (
        <Link
          key={condition.slug}
          href={`/conditions/${condition.slug}`}
          prefetch={false}
          className="group rounded-xl border border-slate-200 bg-white p-4 md:p-5 transition-all duration-300 hover:border-[#B08D57] hover:shadow-lg hover:-translate-y-0.5 min-w-[72vw] sm:min-w-[45vw] md:min-w-0 snap-start flex-shrink-0"
        >
          <p className="text-xs font-medium tracking-wide uppercase text-[#8A6F0A] mb-1.5 md:mb-2">
            {condition.categoryLabel}
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
  );
}
