"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';
import dynamic from 'next/dynamic';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from 'framer-motion';

// Dynamically import the MessageSquareQuoteIcon
const MessageSquareQuoteIcon = dynamic(
  () => import('lucide-react').then((mod) => mod.MessageSquareQuoteIcon),
  { ssr: false, loading: () => <div className="w-5 h-5" /> }
);

// Define a type for testimonial data
type Testimonial = {
  id: number;
  name: string;
  role: string;
  stars: number;
  text: string;
};

// Testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kathy",
    role: "Parent of Patient",
    stars: 5,
    text: "Highly recommend! In particular, Kareem has been truly exceptional! Can't express my gratitude for the remarkable care and guidance he has provided during my son's recovery from a knee injury. His expertise, genuine concern, and unwavering support has made a significant difference in my son's recovery these past 4 months."
  },
  {
    id: 2,
    name: "Catherine",
    role: "Patient",
    stars: 5,
    text: "I've been under the expert physiotherapy care of Kareem since August for Plantar Fasciitis, tendonitis & some aches & pains associated with aging. He's taught me various exercises & stretches to assist with my rehabilitation and shows genuine interest and concern for my well-being."
  },
  {
    id: 3,
    name: "Tania",
    role: "Parent of Patient",
    stars: 5,
    text: "My daughter had her knee pain treated by Kareem. He was kind and really good at asking the right questions to diagnose her issues and give her the right exercises to help her heal. She had months of knee pain that was mostly gone after 1 treatment and she was back to sports after 3 treatments!"
  },
  {
    id: 4,
    name: "Tobi",
    role: "Patient",
    stars: 5,
    text: "For the past few months Kareem has helped me with a very stubborn shoulder injury. He's been patient and supportive every step of the way. Even when I had a few setbacks in my recovery, he knew how to adjust our sessions to keep the progress going. Thanks to him, my shoulder is finally starting to feel like my own again."
  },
  {
    id: 5,
    name: "Thanula",
    role: "Patient",
    stars: 5,
    text: "Highly recommend! The clinic is well managed. Everybody go ask for Kareem. He is the best physiotherapist ever. He's kind, funny and encouraging. I've been seeing him for my ankle injury, and it has been such a positive experience. He communicates clearly and patiently explains each step of the treatment process."
  },
];

export default function TestimonialsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle function with cleaner implementation
  const startAutoSlide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    timerRef.current = setTimeout(() => {
      if (!paused) {
        setDirection(1);
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }
      startAutoSlide(); // Restart timer
    }, 6000); // Longer cycle time for better readability
  }, [paused]);

  // Start the auto-cycle on mount
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startAutoSlide]);

  // Handle previous/next clicks
  const handlePrevious = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDirection(-1);
    setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
    startAutoSlide();
  };

  const handleNext = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % testimonials.length);
    startAutoSlide();
  };

  // Improved animation variants with refined transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98
    }),
  };
  
  return (
    <section id="testimonials" className="py-20 md:py-24 lg:py-32 relative overflow-hidden bg-premium-light">
      {/* Removing problematic background pattern and using more sophisticated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1F36]/02 to-transparent"></div>
      
      {/* Premium decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      <div className="absolute top-12 left-12 w-32 h-32 border-t-2 border-l-2 border-[#D4AF37]/20 rounded-tl-3xl"></div>
      <div className="absolute bottom-12 right-12 w-32 h-32 border-b-2 border-r-2 border-[#D4AF37]/20 rounded-br-3xl"></div>
      
      {/* Enhanced background elements */}
      <div className="absolute top-[30%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[150px] opacity-40"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#1A1F36]/5 blur-[120px] opacity-50"></div>
      <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#D4AF37]/5 blur-[100px] opacity-30"></div>
      
      {/* Content container */}
      <div ref={sectionRef} className="container mx-auto px-4 relative z-10">
        {/* Luxury section header */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
          {/* Premium heading with simplified decorative elements */}
          <div className="relative inline-flex flex-col items-center">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8">
              <div className="absolute inset-0 border-2 border-[#D4AF37]/30 rotate-45"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F36] tracking-[0.02em] relative inline-block mb-10 leading-[1.2]">
              Client Success Stories
            </h2>
            
            {/* Simplified tagline - cleaner and more impactful */}
            <h3 className="text-2xl font-medium text-[#1A1F36]">
              Client experiences and 
              <span className="text-[#D4AF37] font-semibold"> treatment outcomes</span>
            </h3>
          </div>
        </div>
        
        {/* Premium Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative overflow-visible mb-20"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Ultra-premium Testimonial Card */}
            <div className="relative min-h-[420px]">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    duration: 0.5,
                    ease: [0.2, 0.1, 0.3, 1.0]
                  }}
                  className="rounded-2xl p-12 md:p-14 overflow-hidden bg-white/90 backdrop-blur-sm shadow-premium-card border border-neutral-100 relative"
                >
                  {/* Luxury card accents */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent opacity-70 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37] to-[#D4AF37]/50"></div>
                  <div className="absolute top-1.5 left-0 right-0 h-0.5 bg-white/50"></div>
                  <div className="absolute top-[6px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  
                  {/* Luxury corner accents */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-xl"></div>
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-xl"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37] rounded-br-xl"></div>
                  
                  {/* Inner decorative border */}
                  <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#D4AF37]/10 rounded-xl pointer-events-none"></div>
                  
                  {/* Premium quote icon with enhanced styling */}
                  <div className="flex justify-center mb-10">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#1A1F36] to-[#2A3046] text-[#D4AF37] shadow-xl p-0.5 relative">
                      <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-[10px]"></div>
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1A1F36] to-[#2A3046] flex items-center justify-center relative z-10">
                        <MessageSquareQuoteIcon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Central Positioning of Content with enhanced luxury styling */}
                  <div className="max-w-2xl mx-auto relative z-10">
                    {/* Enhanced rating stars with premium styling */}
                    <div className="flex justify-center mb-8">
                      {Array(5).fill(0).map((_, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + (i * 0.1), duration: 0.3 }}
                        >
                          <StarIcon 
                            className="h-7 w-7 text-[#D4AF37] drop-shadow-md mx-1 filter" 
                          />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Premium quote content with luxury typography and styling */}
                    <div className="relative mb-10">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="relative"
                      >
                        {/* Large decorative quotes */}
                        <div className="absolute -top-8 -left-4 text-7xl text-[#D4AF37]/20 font-serif font-bold">"</div>
                        <div className="absolute -bottom-20 -right-4 text-7xl text-[#D4AF37]/20 font-serif font-bold rotate-180">"</div>
                        
                        {/* More elegant text styling for the quote itself */}
                        <div className="font-serif text-xl md:text-2xl text-[#1A1F36] text-center leading-relaxed px-6 tracking-wide">
                          <p className="relative font-light !leading-[1.8]">
                            {testimonials[activeIndex].text}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Customer Info with ultra-premium styling */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="flex flex-col items-center mt-12 pt-8 relative"
                    >
                      {/* Decorative separator */}
                      <div className="absolute -top-2 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
                      <div className="absolute -top-1 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
                      
                      <div className="flex items-center justify-center mb-5">
                        <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#1A1F36] to-[#2A3046] text-[#D4AF37] rounded-full shadow-lg p-0.5 relative">
                          <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-[10px]"></div>
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1A1F36] to-[#2A3046] flex items-center justify-center relative">
                            <span className="text-2xl font-bold">
                              {testimonials[activeIndex].name.charAt(0)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h4 className="font-serif font-bold text-2xl mb-2 text-[#1A1F36] tracking-[0.02em]">{testimonials[activeIndex].name}</h4>
                      <p className="text-[#1A1F36]/70 text-sm font-medium uppercase tracking-wider">{testimonials[activeIndex].role}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Luxury Navigation Controls */}
            <div className="absolute top-1/2 -left-7 md:-left-6 transform -translate-y-1/2 z-10">
              <motion.button 
                onClick={handlePrevious}
                className="w-14 h-14 rounded-full bg-white hover:bg-[#F7F7F5] border border-neutral-200 flex items-center justify-center text-[#1A1F36] shadow-premium-subtle hover:shadow-premium-card focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300"
                aria-label="Previous testimonial"
                whileHover={{ x: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 -right-7 md:-right-6 transform -translate-y-1/2 z-10">
              <motion.button 
                onClick={handleNext}
                className="w-14 h-14 rounded-full bg-white hover:bg-[#F7F7F5] border border-neutral-200 flex items-center justify-center text-[#1A1F36] shadow-premium-subtle hover:shadow-premium-card focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300"
                aria-label="Next testimonial"
                whileHover={{ x: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRightIcon className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
          
          {/* Luxury Pagination indicators */}
          <div className="flex justify-center space-x-3 mt-10">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  if (timerRef.current) clearTimeout(timerRef.current);
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                  setPaused(true);
                  setTimeout(() => setPaused(false), 4000);
                  startAutoSlide();
                }}
                className="focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 rounded-full transition-all duration-200 p-1.5"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                <div
                  className={`rounded-full transition-all duration-500 ${
                    idx === activeIndex
                      ? 'w-12 h-3 bg-gradient-to-r from-[#D4AF37]/70 via-[#D4AF37] to-[#D4AF37]/70 shadow-[0_0_8px_rgba(212,175,55,0.5)]'
                      : 'w-3 h-3 bg-neutral-300/70 backdrop-blur-sm hover:bg-neutral-400/80'
                  }`}
                ></div>
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Ultra-premium Book Now CTA */}
        <div className="text-center mt-20">
          <motion.a 
            href="https://endorphinshealth.janeapp.com/#/staff_member/42"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-br from-[#1A1F36] to-[#2A3046] hover:from-[#D4AF37] hover:to-[#BE9C30] text-[#D4AF37] hover:text-[#1A1F36] text-lg font-medium px-12 py-5 rounded-lg transition-all duration-300 shadow-premium-card hover:shadow-premium-glow border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 group relative overflow-hidden"
            whileHover={{ y: -3 }}
            whileTap={{ y: 1 }}
          >
            {/* Subtle button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
            
            <span className="mr-3 relative z-10">Book Your First Appointment</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
