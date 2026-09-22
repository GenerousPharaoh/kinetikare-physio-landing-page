"use client";

import { JANE_BOOKING_URL } from '@/lib/booking';
import React from 'react';
import Link from 'next/link';
import { m as motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Print from '@/components/Print';
import { CARE_JOURNEY, ILLUSTRATIONS } from '@/lib/illustrations';

/**
 * Four stages, each drawn: the sit-to-stand (a functional test), the step-up
 * (a first progression), the row (treatment), the loaded carry (what you leave
 * with). Desktop: four prints in a row with the stage number on the corner of
 * each. Phone: the print at the left of each stage, read by scrolling. The
 * heading, titles and descriptions are unchanged from the text version.
 */
export default function CareJourneySection() {
  const { ref: sectionRef, animationProps } = useScrollAnimation({ yOffset: 30 });

  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your condition, medical history, and movement patterns to understand your unique needs.",
      link: JANE_BOOKING_URL,
      linkText: "Book an assessment",
      external: true
    },
    {
      number: "02",
      title: "Treatment Planning",
      description: "Development of a personalized treatment plan with clear goals, timelines, and evidence-based interventions.",
      link: "/services",
      linkText: "View services"
    },
    {
      number: "03",
      title: "Active Treatment",
      description: "Hands-on therapy, exercise prescription, and education to address your specific condition and restore function.",
      link: "/treatments",
      linkText: "Treatment methods"
    },
    {
      number: "04",
      title: "Recovery + Prevention",
      description: "Ongoing support, home exercise programs, and strategies to prevent re-injury and maintain long-term health.",
      link: "/faq",
      linkText: "Common questions"
    }
  ];

  return (
    <motion.section
      ref={sectionRef}
      {...animationProps}
      className="section-luxury-spacing section-temperature-a texture-luxury"
      aria-labelledby="care-journey-heading"
    >
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 id="care-journey-heading" className="text-3xl md:text-5xl lg:text-6xl text-slate-900 mb-4 md:mb-6 heading-luxury-1">
            Your <span className="text-luxury-gradient">Care Journey</span>
          </h2>
          <div className="w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mx-auto mb-4 md:mb-8"></div>
          <p className="text-base md:text-xl lg:text-2xl max-w-4xl mx-auto text-luxury-subtle">
            A structured, personalized approach to your recovery designed to deliver measurable results
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {steps.map((step, i) => (
            <li key={step.number} className="grid grid-cols-[7.5rem_1fr] gap-x-4 items-start md:block">
              <div className="relative md:mb-6">
                <Print {...ILLUSTRATIONS[CARE_JOURNEY[i]]} sizes="(min-width: 1024px) 300px, (min-width: 768px) 45vw, 120px" />
                <span
                  aria-hidden="true"
                  className="absolute -top-3 -left-3 hidden h-11 w-11 items-center justify-center rounded-full bg-white border border-[#B08D57]/50 font-playfair text-lg text-[#8A6F0A] tabular-nums md:flex"
                >
                  {step.number}
                </span>
              </div>
              <div>
                <span className="block font-playfair text-sm text-[#8A6F0A] tabular-nums mb-1 md:hidden" aria-hidden="true">{step.number}</span>
                <h3 className="text-lg lg:text-xl text-slate-900 mb-2 md:mb-3 heading-luxury-3">
                  <span className="sr-only">Step {step.number}: </span>{step.title}
                </h3>
                <p className="text-[15px] text-slate-700 leading-relaxed md:leading-[1.7] max-w-[36ch]">
                  {step.description}
                </p>
                <Link
                  href={step.link}
                  {...(step.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-3 md:mt-4 inline-flex items-center gap-1 text-sm text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition-[text-decoration-color]"
                >
                  {step.linkText}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
