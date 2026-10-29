'use client';

import { serializeJsonLd } from '@/lib/structured-data';
import { reviews, GOOGLE_REVIEW_TOTAL } from '@/lib/reviews';
import React, { useState, useEffect, useRef } from 'react';
import { m as motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';

export { reviews };

export default function GoogleReviews() {
  // Total Google reviews (featured in carousel + a few not shown here)
  const totalGoogleReviews = GOOGLE_REVIEW_TOTAL;
  const featuredReviewsCount = reviews.length;
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Pause the carousel interval whenever the section is scrolled off-screen.
  const sectionRef = useRef<HTMLElement | null>(null);
  const isSectionInView = useInView(sectionRef, { amount: 0.1 });

  const pauseForInteraction = () => setIsAutoPlaying(false);


  useEffect(() => {
    if (prefersReducedMotion || !isAutoPlaying || !isSectionInView || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 7000); // Change review every 7 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isSectionInView, isPaused, prefersReducedMotion]);

  const handlePrevious = () => {
    pauseForInteraction();
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    pauseForInteraction();
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handleDotClick = (index: number) => {
    pauseForInteraction();
    setCurrentIndex(index);
  };

  // Touch swipe: advance only on a clearly horizontal swipe so vertical page
  // scrolling is left untouched. Reuses handleNext/handlePrevious (which pause
  // auto-play), so behaviour matches the arrow controls.
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const onCarouselTouchStart = (e: React.TouchEvent) => {
    swipeStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onCarouselTouchEnd = (e: React.TouchEvent) => {
    if (!swipeStart.current) return;
    const dx = e.changedTouches[0].clientX - swipeStart.current.x;
    const dy = e.changedTouches[0].clientY - swipeStart.current.y;
    swipeStart.current = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0) handleNext();
      else handlePrevious();
    }
  };

  // Get visible reviews for carousel (current, prev, next)
  const getVisibleReviews = () => {
    const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    const nextIndex = (currentIndex + 1) % reviews.length;
    return [
      { ...reviews[prevIndex], position: 'prev' },
      { ...reviews[currentIndex], position: 'current' },
      { ...reviews[nextIndex], position: 'next' }
    ];
  };

  return (
    <section
      ref={sectionRef}
      className="section-luxury-spacing bg-gradient-to-b from-white to-gray-50 texture-luxury"
    >
      {/* Review Schema */}
      <div className="container mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xl md:text-2xl font-semibold text-gray-800">5.0</span>
            <span className="text-sm md:text-base text-gray-600">({totalGoogleReviews} reviews)</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-2 heading-luxury-1">Google Reviews</h2>
          <p className="max-w-2xl mx-auto text-luxury-subtle text-sm md:text-base">
            What patients are saying
          </p>
{/* Review count shown in rating badge above, no need to repeat */}
        </div>

        <div className="mb-4 flex justify-center motion-reduce:hidden">
          <button type="button" onClick={() => setIsAutoPlaying((playing) => !playing)} className="min-h-11 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            {isAutoPlaying ? 'Pause automatic reviews' : 'Play automatic reviews'}
          </button>
        </div>
        {/* Reviews Carousel */}
        <div
          className="relative max-w-6xl mx-auto"
          role="group"
          aria-roledescription="carousel"
          aria-label="Patient reviews"
          onFocusCapture={() => setIsAutoPlaying(false)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="sr-only" aria-live={isAutoPlaying ? "off" : "polite"} aria-atomic="true">
            Review {currentIndex + 1} of {featuredReviewsCount}: {reviews[currentIndex]?.name}
          </div>
          {/* Edge fade (md+ only, where the neighbours show) so a clipped card dissolves rather than ending in a hard cut. */}
          <div className="overflow-hidden rounded-2xl md:[mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent)]" onTouchStart={onCarouselTouchStart} onTouchEnd={onCarouselTouchEnd}>
            <div className="relative h-[380px] sm:h-[480px] md:h-[550px]">
              <AnimatePresence initial={false} mode="sync">
                {getVisibleReviews().map((review, index) => (
                  <motion.div
                    key={`${review.name}-${review.position}`}
                    initial={{
                      opacity: 0,
                      x: review.position === 'prev' ? -100 : review.position === 'next' ? 100 : 0,
                      scale: review.position === 'current' ? 1 : 0.85
                    }}
                    animate={{
                      opacity: review.position === 'current' ? 1 : 0.35,
                      x: review.position === 'prev' ? -350 : review.position === 'next' ? 350 : 0,
                      scale: review.position === 'current' ? 1 : 0.88
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.85
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    aria-hidden={review.position !== 'current'}
                    className={`absolute inset-0 ${review.position === 'current' ? 'z-20' : 'z-10 hidden md:block'
                      }`}
                  >
                    <div className="h-full flex items-center justify-center px-4">
                      <div className="bg-white rounded-2xl shadow-luxury-deep hover:shadow-luxury-float transition-[transform,box-shadow] duration-600 p-4 sm:p-8 md:p-10 max-w-3xl w-full border border-gray-200 h-[340px] sm:h-[440px] md:h-[500px] flex flex-col relative overflow-hidden">
                        {/* Google Badge */}
                        <div className="flex items-center gap-2 mb-4 flex-shrink-0 relative z-10">
                          <div className="w-5 h-5 relative">
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-gray-600">Google Review</span>
                        </div>

                        {/* Stars - Yellow with subtle styling. Invisible (not removed, so the
                            layout matches) on the peeking neighbours: the viewport clips them
                            at the edge and a lone surviving star read as a one-star review. */}
                        <div className={`flex gap-0.5 mb-5 flex-shrink-0 relative z-10 ${review.position === 'current' ? '' : 'invisible'}`}>
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Review Text - Bolder, More Prominent, Scrollable */}
                        <div tabIndex={review.position === 'current' ? 0 : -1} role="region" aria-label={`Review by ${review.name}`} className="flex-grow overflow-y-auto mb-5 pr-3 relative z-10" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db transparent' }}>
                          <p className="text-slate-700 leading-relaxed text-base">
                            {review.text}
                          </p>
                        </div>

                        {/* Reviewer Name - Enhanced */}
                        <div className="flex items-center justify-between flex-shrink-0 pt-4 border-t border-gray-200 relative z-10">
                          <div className="font-semibold text-gray-900">{review.name}</div>
                          <div className="text-sm text-gray-500">Google review</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows - Outside overflow container */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-150 group pointer-events-auto cursor-pointer border-0 focus:ring-2 focus:ring-[#B08D57] focus:ring-offset-2 focus:outline-none"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-150 group pointer-events-auto cursor-pointer border-0 focus:ring-2 focus:ring-[#B08D57] focus:ring-offset-2 focus:outline-none"
              aria-label="Next review"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation - Progress bar on mobile, dots on desktop */}
        <div className="flex justify-center items-center mt-6">
          {/* Mobile: Sleek progress bar with arrows */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={handlePrevious}
              className="text-gray-400 hover:text-[#B08D57] transition-colors p-3.5"
              aria-label="Previous review"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Position is shown as the same sliding line the desktop uses, not "1 / 26".
                A running count invites the reader to treat the carousel as a list to get
                through, and the number is not information anyone needs. */}
            <div className="relative h-px w-24 rounded-full bg-gray-200" aria-hidden="true">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full bg-[#B08D57]"
                initial={false}
                animate={{ width: `${((currentIndex + 1) / featuredReviewsCount) * 100}%` }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              />
            </div>

            <button
              onClick={handleNext}
              className="text-gray-400 hover:text-[#B08D57] transition-colors p-3.5"
              aria-label="Next review"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Desktop: Minimal sliding position indicator */}
          <div
            role="group"
            aria-label="Review position indicator"
            className="hidden md:block"
          >
            <div className="relative h-px w-64 bg-gray-200 rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#B08D57] rounded-full"
                initial={false}
                animate={{
                  width: `${((currentIndex + 1) / featuredReviewsCount) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              />
              <motion.div
                className="absolute top-1/2 w-1.5 h-1.5 bg-[#B08D57] rounded-full shadow-[0_0_0_4px_rgba(255,255,255,1)]"
                initial={false}
                animate={{
                  left: `${((currentIndex + 1) / featuredReviewsCount) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                style={{ translateX: '-50%', translateY: '-50%' }}
              />
            </div>
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-6">
          <a
            href="https://maps.google.com/maps?cid=12525727525636452787"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <span>Read all reviews on Google</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
