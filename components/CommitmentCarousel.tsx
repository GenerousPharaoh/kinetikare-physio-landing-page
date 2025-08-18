"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DocumentTextIcon, 
  ChatBubbleBottomCenterTextIcon,
  AdjustmentsHorizontalIcon as AdjustmentsIcon,
  UserIcon,
  BeakerIcon,
  UserGroupIcon as UserGroupIconSolid
} from '@heroicons/react/24/solid';

interface CommitmentItem {
  id: string;
  title: string;
  description: string;
  iconType: string;
}

interface CommitmentCarouselProps {
  items: CommitmentItem[];
}

// Helper function to get icon component based on type
const getIcon = (iconType: string) => {
  const iconProps = { className: "w-8 h-8" };
  
  switch (iconType) {
    case 'document':
      return <DocumentTextIcon {...iconProps} />;
    case 'chat':
      return <ChatBubbleBottomCenterTextIcon {...iconProps} />;
    case 'adjustments':
      return <AdjustmentsIcon {...iconProps} />;
    case 'user':
      return <UserIcon {...iconProps} />;
    case 'beaker':
      return <BeakerIcon {...iconProps} />;
    case 'userGroup':
      return <UserGroupIconSolid {...iconProps} />;
    default:
      return <DocumentTextIcon {...iconProps} />;
  }
};

export default function CommitmentCarousel({ items }: CommitmentCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Main carousel */}
      <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl border border-slate-200/50 overflow-hidden">
        <div className="relative min-h-[320px] sm:min-h-[380px] md:h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative sm:absolute sm:inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12"
            >
              <div className="text-center max-w-2xl w-full">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl sm:rounded-2xl mb-2 sm:mb-4 md:mb-8 shadow-lg">
                  <div className="text-white scale-[0.65] sm:scale-75 md:scale-100">
                    {getIcon(items[currentSlide].iconType)}
                  </div>
                </div>
                
                <h4 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-6 px-4 sm:px-2">
                  {items[currentSlide].title}
                </h4>
                
                <p className="text-sm sm:text-base md:text-xl text-slate-600 leading-relaxed px-4 sm:px-2">
                  {items[currentSlide].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows - Hidden on small mobile */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group z-10"
          aria-label="Previous commitment"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-[#B08D57] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group z-10"
          aria-label="Next commitment"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-[#B08D57] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators - MUCH smaller on mobile */}
      <div className="flex justify-center mt-2 sm:mt-4 md:mt-6 space-x-1.5 sm:space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#B08D57] shadow-sm'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to commitment ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar - Minimal spacing */}
      <div className="mt-2 sm:mt-3 md:mt-4 max-w-xs sm:max-w-md mx-auto px-4 sm:px-0">
        <div className="h-0.5 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37]"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentSlide + 1) / items.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        <div className="flex justify-center mt-1 text-[10px] sm:text-xs text-slate-500">
          <span>{currentSlide + 1} of {items.length}</span>
        </div>
      </div>
    </div>
  );
} 