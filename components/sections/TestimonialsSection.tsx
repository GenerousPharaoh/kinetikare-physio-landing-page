"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

// ARCHIVED COMPONENT - FOR FUTURE USE WHEN CONSENT IS OBTAINED
// This component contains the original testimonials functionality
// DO NOT USE until proper patient consent is received

type TestimonialItem = {
  name: string;
  role: string;
  stars: number;
  text: string;
  initial?: string;
};

const TestimonialsSection = React.memo(function TestimonialsSection() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isTestimonialReady, setIsTestimonialReady] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Enhanced testimonials data with initials for avatar
  const testimonials: TestimonialItem[] = [
    {
      name: "Kathy",
      role: "Parent of Patient",
      stars: 5,
      text: "Highly recommend! In particular, Kareem has been truly exceptional! Can't express my gratitude for the remarkable care and guidance he has provided during my son's recovery from a knee injury.",
      initial: "K"
    },
    {
      name: "Catherine",
      role: "Patient",
      stars: 5,
      text: "I've been under the expert physiotherapy care of Kareem since August for Plantar Fasciitis, tendonitis & some aches & pains associated with aging. He shows genuine interest and concern for my well-being.",
      initial: "C"
    },
    {
      name: "Tania",
      role: "Parent of Patient",
      stars: 5,
      text: "My daughter had her knee pain treated by Kareem. He was kind and really good at asking the right questions to diagnose her issues and give her the right exercises to help her heal.",
      initial: "T"
    },
    {
      name: "Tobi",
      role: "Patient",
      stars: 5,
      text: "For the past few months Kareem has helped me with a very stubborn shoulder injury. He's been patient and supportive every step of the way. Thanks to him, my shoulder is finally starting to feel like my own again.",
      initial: "T"
    },
    {
      name: "Thanula",
      role: "Patient",
      stars: 5,
      text: "Highly recommend. Everybody go ask for Kareem. He is the best physiotherapist ever. He's kind, funny and encouraging. I've been seeing him for a few weeks now for my ankle injury, and it has been such a positive experience. He communicates clearly and patiently explains each step of the treatment process. I've noticed improvement in my condition since starting treatment. I feel genuinely cared for by Kareem and his empathy makes a difference in my recovery journey.",
      initial: "T"
    }
  ];

  const goToTestimonial = (index: number) => {
    if (isTransitioning || index === currentTestimonialIndex) return;
    
    setIsTransitioning(true);
    setIsAutoPlaying(false);
    
    setCurrentTestimonialIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
      
      setTimeout(() => {
        setIsAutoPlaying(true);
      }, 8000);
    }, 50);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const testimonialStartDelay = setTimeout(() => {
      setIsTestimonialReady(true);
      const testimonialInterval = setInterval(() => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);

      return () => clearInterval(testimonialInterval);
    }, 3000);

    return () => {
      clearTimeout(testimonialStartDelay);
    };
  }, [testimonials.length, isAutoPlaying]);

  useEffect(() => {
    return () => {
      const scrollContainers = document.querySelectorAll('[data-testimonial-scroll]');
      scrollContainers.forEach((container: any) => {
        if (container._scrollInterval) {
          clearInterval(container._scrollInterval);
          container._scrollInterval = null;
        }
        if (container._scrollTimeout) {
          clearTimeout(container._scrollTimeout);
          container._scrollTimeout = null;
        }
      });
    };
  }, [currentTestimonialIndex]);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="relative max-w-xl ml-auto">
      {/* Modern Testimonials Card */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.25, 0.8, 0.25, 1], delay: 2.2 }}
        className="relative bg-white/95 backdrop-blur-3xl rounded-[2rem] p-6 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] border border-white/40 overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Elegant top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent"></div>
        
        {/* Floating elements for depth */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-[#D4AF37]/5 to-[#B08D57]/5 rounded-full blur-lg"></div>

        {/* Header */}
        <div className="text-center mb-6 relative z-10">
          <h3 className="text-lg font-semibold text-slate-800 mb-2 tracking-tight">
            Patient Testimonials
          </h3>
          <div className="w-12 h-px bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto"></div>
        </div>

        {/* Testimonial Content */}
        <div className="relative h-[380px] relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ 
                opacity: 0, 
                y: 30, 
                scale: 0.98
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                y: -30, 
                scale: 0.98
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1]
              }}
              className="absolute inset-0 flex flex-col"
            >
              {/* User Info */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-3 mb-4"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                    <span className="text-white font-bold text-base relative z-10">
                      {currentTestimonial.initial}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/20"></div>
                </motion.div>
                
                <div className="flex-1">
                  <motion.h4 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="font-semibold text-slate-800 text-base"
                  >
                    {currentTestimonial.name}
                  </motion.h4>
                  <motion.p 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-slate-500 text-sm font-medium"
                  >
                    {currentTestimonial.role}
                  </motion.p>
                </div>
              </motion.div>

              {/* Stars */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex space-x-1 mb-4"
              >
                {Array(5).fill(0).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.7 + (i * 0.1), 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <StarIcon className="h-4 w-4 text-[#D4AF37]" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex-1 relative"
              >
                <div className="absolute -top-1 -left-1 text-3xl text-[#B08D57]/20 font-serif leading-none">"</div>
                
                <div className="relative pl-5">
                  <div 
                    className="text-slate-700 leading-relaxed text-sm font-normal pr-2 overflow-y-auto"
                    data-testimonial-scroll
                    style={{
                      scrollBehavior: 'smooth',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      maxHeight: '240px'
                    }}
                  >
                    <style jsx>{`
                      div::-webkit-scrollbar {
                        display: none;
                      }
                    `}</style>
                    
                    <p className="text-base leading-7">
                      {currentTestimonial.text}
                    </p>
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-0 text-3xl text-[#B08D57]/20 font-serif leading-none transform rotate-180">"</div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Bars - Professional Style */}
        <div className="flex justify-center space-x-2 mt-6 relative z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              disabled={isTransitioning}
              className={`relative transition-all duration-300 ${
                index === currentTestimonialIndex 
                  ? 'scale-110' 
                  : 'hover:scale-105'
              } ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              aria-label={`View testimonial ${index + 1}`}
            >
              <div className={`h-1 rounded-full transition-all duration-300 ${
                index === currentTestimonialIndex 
                  ? 'w-8 bg-[#B08D57] shadow-lg shadow-[#B08D57]/40' 
                  : 'w-6 bg-slate-300 hover:bg-[#B08D57]/60 hover:w-7'
              }`}>
                {index === currentTestimonialIndex && !isTransitioning && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [1, 1.2, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute inset-0 h-1 rounded-full bg-[#B08D57] opacity-30"
                  />
                )}
              </div>
              
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                index === currentTestimonialIndex 
                  ? 'bg-[#B08D57]/10 scale-150 blur-sm' 
                  : 'hover:bg-[#B08D57]/5 hover:scale-125 hover:blur-sm'
              }`}></div>
            </button>
          ))}
        </div>
      </motion.div>
      
      {/* Subtle outer glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 rounded-[2.5rem] blur-2xl opacity-60 -z-10"></div>
    </div>
  );
});

export default TestimonialsSection; 