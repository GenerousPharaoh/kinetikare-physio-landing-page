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
        <div className="relative h-80 md:h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center p-8 md:p-12"
            >
              <div className="text-center max-w-2xl">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl mb-8 shadow-lg">
                  <div className="text-white">
                    {getIcon(items[currentSlide].iconType)}
                  </div>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  {items[currentSlide].title}
                </h4>
                
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  {items[currentSlide].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Previous commitment"
        >
          <svg className="w-6 h-6 text-slate-600 group-hover:text-[#B08D57] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Next commitment"
        >
          <svg className="w-6 h-6 text-slate-600 group-hover:text-[#B08D57] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#B08D57] scale-125 shadow-md'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to commitment ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-6 max-w-md mx-auto">
        <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37]"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentSlide + 1) / items.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        <div className="flex justify-center mt-2 text-xs text-slate-500">
          <span>{currentSlide + 1} of {items.length}</span>
        </div>
      </div>
    </div>
  );
} 