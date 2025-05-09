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
    <section id="testimonials" className="py-20 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Base background handled by global texture – removed custom grid overlay */}
      
      {/* Subtle background elements */}
      <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[150px] opacity-30"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#1A1F36]/5 blur-[120px] opacity-40"></div>
      
      {/* Content container */}
      <div ref={sectionRef} className="container mx-auto px-4 relative z-10">
        {/* Section Header with premium styling */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          {/* Premium section heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1F36] tracking-[0.02em] relative inline-block mb-4 leading-[1.2]">
            Client Success Stories
          </h2>
          <div className="relative mt-3 h-5 flex justify-center">
            {/* Refined gold line */}
            <div className="relative h-[1.5px] bg-[#D4AF37]/20 overflow-hidden rounded-full w-[70px]">
              <div className="absolute inset-0 bg-[#D4AF37]"></div>
            </div>
            
            {/* Decorative accent dot */}
            <div className="absolute top-1/2 -translate-y-1/2 h-[4px] w-[4px] rounded-full bg-[#D4AF37] left-1/2 -translate-x-1/2">
              <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-pulse-slow opacity-70"></div>
            </div>
          </div>
          <p className="font-sans text-lg text-[#A0A0A0] mx-auto leading-[1.6] mt-4">
            Discover how personalized physiotherapy has helped these patients achieve their recovery goals
          </p>
        </div>
        
        {/* Testimonial Carousel with navy/gold styling */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden mb-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Main Testimonial Card */}
            <div className="relative min-h-[400px]">
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
                  className="rounded-lg p-8 md:p-10 overflow-hidden bg-white shadow-md border border-neutral-100"
                >
                  {/* Gold accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37]"></div>
                  
                  {/* Quote icon */}
                  <div className="flex justify-center mb-8">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1A1F36] text-[#D4AF37]">
                      <MessageSquareQuoteIcon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Central Positioning of Content */}
                  <div className="max-w-2xl mx-auto">
                    {/* Rating Stars with gold color */}
                    <div className="flex justify-center mb-6">
                      {Array(5).fill(0).map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className="h-6 w-6 text-[#D4AF37] mx-0.5" 
                        />
                      ))}
                    </div>
                    
                    {/* Quote content with serif italic styling */}
                    <div className="relative mb-8">
                      <p className="font-serif italic text-lg md:text-xl text-[#1A1F36] text-center leading-[1.6]">
                        {testimonials[activeIndex].text}
                      </p>
                    </div>
                    
                    {/* Customer Info with navy/gold styling */}
                    <div className="flex flex-col items-center mt-10 pt-6 border-t border-neutral-100">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-[#1A1F36] text-[#D4AF37] rounded-full">
                          <span className="text-xl font-bold">
                            {testimonials[activeIndex].name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <h4 className="font-serif font-bold text-xl mb-1 text-[#1A1F36] tracking-[0.02em]">{testimonials[activeIndex].name}</h4>
                      <p className="text-[#A0A0A0] text-sm font-sans">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation Controls with navy/gold styling */}
            <div className="absolute top-1/2 -left-4 md:left-0 transform -translate-y-1/2 z-10">
              <motion.button 
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#F7F7F5] border border-neutral-100 flex items-center justify-center text-[#1A1F36] shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300"
                aria-label="Previous testimonial"
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeftIcon className="h-4 w-4" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 -right-4 md:right-0 transform -translate-y-1/2 z-10">
              <motion.button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#F7F7F5] border border-neutral-100 flex items-center justify-center text-[#1A1F36] shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300"
                aria-label="Next testimonial"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRightIcon className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
          
          {/* Pagination dots with gold for active */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (timerRef.current) clearTimeout(timerRef.current);
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                  setPaused(true);
                  setTimeout(() => setPaused(false), 4000);
                  startAutoSlide();
                }}
                className="focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 rounded-full transition-all duration-200"
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    idx === activeIndex
                      ? 'w-8 bg-[#D4AF37] shadow-sm'
                      : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Book Now CTA */}
        <div className="text-center mt-16">
          <a 
            href="https://endorphinshealth.janeapp.com/#/staff_member/42"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#1A1F36] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#1A1F36] text-base font-medium px-8 py-4 rounded-lg transition-colors duration-300 shadow-md"
          >
            Book Your First Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
