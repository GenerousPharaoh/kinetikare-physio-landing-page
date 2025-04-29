"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { MessageSquareQuoteIcon } from 'lucide-react';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import IconBadge from '../ui/IconBadge';

// Define a type for testimonial data
type Testimonial = {
  id: number;
  name: string;
  role: string;
  stars: number;
  text: string;
  avatar?: string; // Optional avatar image
};

// Testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kathy",
    role: "Parent of Patient",
    stars: 5,
    text: "Highly recommend! In particular, Kareem has been truly exceptional! Can't express my gratitude for the remarkable care and guidance he has provided during my son's recovery from a knee injury. His expertise, genuine concern, and unwavering support has made a significant difference in my son's recovery these past 4 months.",
    avatar: "/images/avatars/avatar-1.png" 
  },
  {
    id: 2,
    name: "Catherine",
    role: "Patient",
    stars: 5,
    text: "I've been under the expert physiotherapy care of Kareem since August for Plantar Fasciitis, tendonitis & some aches & pains associated with aging. He's taught me various exercises & stretches to assist with my rehabilitation and shows genuine interest and concern for my well-being.",
    avatar: "/images/avatars/avatar-2.png"
  },
  {
    id: 3,
    name: "Tania",
    role: "Parent of Patient",
    stars: 5,
    text: "My daughter had her knee pain treated by Kareem. He was kind and really good at asking the right questions to diagnose her issues and give her the right exercises to help her heal. She had months of knee pain that was mostly gone after 1 treatment and she was back to sports after 3 treatments!",
    avatar: "/images/avatars/avatar-3.png"
  },
  {
    id: 4,
    name: "Tobi",
    role: "Patient",
    stars: 5,
    text: "For the past few months Kareem has helped me with a very stubborn shoulder injury. He's been patient and supportive every step of the way. Even when I had a few setbacks in my recovery, he knew how to adjust our sessions to keep the progress going. Thanks to him, my shoulder is finally starting to feel like my own again.",
    avatar: "/images/avatars/avatar-4.png"
  },
  {
    id: 5,
    name: "Thanula",
    role: "Patient",
    stars: 5,
    text: "Highly recommend! The clinic is well managed. Everybody go ask for Kareem. He is the best physiotherapist ever. He's kind, funny and encouraging. I've been seeing him for my ankle injury, and it has been such a positive experience. He communicates clearly and patiently explains each step of the treatment process.",
    avatar: "/images/avatars/avatar-5.png"
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
  
  // Create testimonial badge with premium styling
  const testimonialsIcon = <IconBadge 
    icon={<MessageSquareQuoteIcon className="text-accent-light" />} 
    variant="circle" 
    color="accent" 
    gradient 
    size="lg"
    className="mx-auto"
  />;
  
  return (
    <section id="testimonials" className="relative overflow-hidden py-20 md:py-28">
      {/* Background gradient with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white pointer-events-none"></div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{backgroundImage: "url('/images/patterns/pattern-dots.svg')"}}
      ></div>
      
      {/* Subtle background glow effects */}
      <div className="absolute top-20 right-[15%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px] opacity-60"></div>
      <div className="absolute bottom-40 left-[10%] w-[300px] h-[300px] rounded-full bg-primary-500/5 blur-[100px] opacity-70"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with enhanced styling */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeading
            title="Client Success Stories"
            subtitle="Discover how personalized physiotherapy has helped these patients achieve their recovery goals"
            badge={testimonialsIcon}
          />
        </div>
        
        {/* Testimonial Carousel with premium styling */}
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
                  className="rounded-2xl p-10 md:p-12 overflow-hidden bg-white shadow-xl border border-neutral-100"
                  style={{ 
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)'
                  }}
                >
                  {/* Premium gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/40 via-accent to-primary-600/40"></div>
                  
                  {/* Subtle inner shadow */}
                  <div className="absolute inset-[2px] rounded-[14px] shadow-inner pointer-events-none"></div>
                  
                  {/* Subtle pattern background */}
                  <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
                       style={{backgroundImage: "url('/images/patterns/pattern-dots.svg')"}}></div>
                  
                  {/* Central Positioning of Content */}
                  <div className="max-w-2xl mx-auto">
                    {/* Rating Stars with larger size and improved styling */}
                    <div className="flex justify-center mb-9">
                      {Array(5).fill(0).map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className="h-6 w-6 text-amber-400 mx-0.5 drop-shadow-sm" 
                        />
                      ))}
                    </div>
                    
                    {/* Quote content with premium typography */}
                    <div className="relative mb-10">
                      <div 
                        className="absolute -top-6 -left-2 text-5xl text-accent/30 font-serif" 
                        aria-hidden="true"
                      >&quot;</div>
                      <p className="text-lg md:text-xl text-primary-700/95 text-center font-light leading-relaxed">
                        {testimonials[activeIndex].text}
                      </p>
                      <div 
                        className="absolute -bottom-6 -right-2 text-5xl text-accent/30 font-serif" 
                        aria-hidden="true"
                      >&quot;</div>
                    </div>
                    
                    {/* Customer Info with premium styling */}
                    <div className="flex flex-col items-center mt-14 pt-6 border-t border-primary-100/50">
                      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 text-primary-700 rounded-full mb-4 shadow-lg border-2 border-white relative overflow-hidden">
                        {/* Avatar image or initial with enhanced styling */}
                        {testimonials[activeIndex].avatar ? (
                          <div className="w-full h-full relative">
                            <img 
                              src={testimonials[activeIndex].avatar} 
                              alt={`${testimonials[activeIndex].name}'s avatar`}
                              className="w-full h-full object-cover"
                            />
                            {/* Premium overlay on image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40"></div>
                          </div>
                        ) : (
                          <span className="text-primary-700 text-2xl font-bold relative">
                            {testimonials[activeIndex].name[0]}
                          </span>
                        )}
                      </div>
                      <h4 className="font-heading font-medium text-xl mb-1 text-primary-700">{testimonials[activeIndex].name}</h4>
                      <p className="text-accent text-sm font-medium tracking-wide">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Premium Navigation Controls */}
            <div className="absolute top-1/2 -left-4 md:left-0 transform -translate-y-1/2 z-10">
              <motion.button 
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full bg-white hover:bg-primary-50 border border-primary-200 flex items-center justify-center text-primary-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 group"
                aria-label="Previous testimonial"
                whileHover={{ x: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Premium inner glow on hover */}
                <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/80 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowLeftIcon className="h-5 w-5 relative z-10" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 -right-4 md:right-0 transform -translate-y-1/2 z-10">
              <motion.button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white hover:bg-primary-50 border border-primary-200 flex items-center justify-center text-primary-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 group"
                aria-label="Next testimonial"
                whileHover={{ x: 3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Premium inner glow on hover */}
                <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/80 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowRightIcon className="h-5 w-5 relative z-10" />
              </motion.button>
            </div>
          </div>
          
          {/* Premium pagination dots */}
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
                className="focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 rounded-full transition-all duration-200 relative overflow-hidden"
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${
                    idx === activeIndex
                      ? 'w-10 bg-gradient-to-r from-primary-500 to-accent shadow-md'
                      : 'w-3 bg-neutral-200 hover:bg-neutral-300'
                  }`}
                >
                  {/* Subtle animation for the active dot */}
                  {idx === activeIndex && (
                    <div className="absolute inset-0 bg-white/30 animate-pulse-subtle"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
