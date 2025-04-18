"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid'; 
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from 'framer-motion';

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
    text: "Highly recommend Movement Solutions Physiotherapy. In particular, Kareem has been truly exceptional! Can't express my gratitude for the remarkable care and guidance he has provided during my son's recovery from a knee injury. His expertise, genuine concern, and unwavering support has made a significant difference in my son's recovery these past 4 months.",
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
    text: "Highly recommend Movement Solutions Physiotherapy. The clinic is well managed. Everybody go ask for Kareem. He is the best physiotherapist ever. He's kind, funny and encouraging. I've been seeing him for my ankle injury, and it has been such a positive experience. He communicates clearly and patiently explains each step of the treatment process.",
    avatar: "/images/avatars/avatar-5.png"
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Get indices for card positions
  const getCardIndices = () => {
    const numTestimonials = testimonials.length;
    return {
      current: activeIndex,
      prev: activeIndex === 0 ? numTestimonials - 1 : activeIndex - 1,
      prevPrev: activeIndex <= 1 ? numTestimonials - (2 - activeIndex) : activeIndex - 2,
      next: activeIndex === numTestimonials - 1 ? 0 : activeIndex + 1,
      nextNext: activeIndex >= numTestimonials - 2 ? activeIndex + 2 - numTestimonials : activeIndex + 2
    };
  };

  const { current, prev, next, prevPrev, nextNext } = getCardIndices();

  // Auto-cycle function
  const startAutoSlide = useCallback(() => {
    clearTimeout(timerRef.current!);
    
    timerRef.current = setTimeout(() => {
      if (!paused) {
        // Move to next card
        setDirection(1);
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }
      // Restart timer
      startAutoSlide();
    }, 5000);
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

  // Generate star rating
  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <StarIcon 
        key={i} 
        className={`h-5 w-5 ${i < count ? 'text-accent' : 'text-neutral-200'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-primary-900 relative overflow-hidden border-t border-primary-700">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent/[0.03] blur-3xl" aria-hidden="true"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-accent/[0.03] blur-3xl" aria-hidden="true"></div>
        <div className="absolute top-10 left-10 text-9xl text-accent/[0.05] font-serif leading-none" aria-hidden="true">"</div>
        <div className="absolute bottom-10 right-10 text-9xl text-accent/[0.05] font-serif leading-none" aria-hidden="true">"</div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 md:mb-20 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">Voices of Recovery</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Client Success Stories
          </h2>
          <div className="w-20 h-px bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-neutral-300 mx-auto max-w-2xl">
            Discover how personalized physiotherapy has helped these patients achieve their recovery goals
          </p>
        </div>
        
        {/* Card Deck Carousel */}
        <div className={`max-w-5xl mx-auto transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div 
            className="relative min-h-[520px] md:min-h-[480px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setTimeout(() => setPaused(false), 4000)}
          >
            {/* Card Stack with 3D effect */}
            <div className="relative w-full h-full" style={{ perspective: '1500px' }}>
              <div 
                className="relative w-full h-full"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s ease'
                }}
              >
                <AnimatePresence>
                  {/* Card Stack */}
                  {[prevPrev, prev, current, next, nextNext].map((index, i) => {
                    // Determine card position type
                    let position: 'center' | 'left1' | 'left2' | 'right1' | 'right2';
                    switch (i) {
                      case 0: position = 'left2'; break;
                      case 1: position = 'left1'; break;
                      case 2: position = 'center'; break;
                      case 3: position = 'right1'; break;
                      case 4: position = 'right2'; break;
                      default: position = 'center';
                    }
                    
                    // Position styles
                    const getPositionStyles = () => {
                      switch (position) {
                        case 'center':
                          return 'z-30 translate-y-0 scale-100 opacity-100 shadow-xl';
                        case 'left1':
                          return 'z-20 -translate-x-[15%] translate-y-[4%] scale-[0.92] opacity-70 rotate-[-3deg] shadow-lg';
                        case 'left2':
                          return 'z-10 -translate-x-[25%] translate-y-[8%] scale-[0.84] opacity-40 rotate-[-6deg] shadow-md';
                        case 'right1':
                          return 'z-20 translate-x-[15%] translate-y-[4%] scale-[0.92] opacity-70 rotate-[3deg] shadow-lg';
                        case 'right2':
                          return 'z-10 translate-x-[25%] translate-y-[8%] scale-[0.84] opacity-40 rotate-[6deg] shadow-md';
                      }
                    };
                    
                    return (
                      <motion.div
                        key={index}
                        className={`absolute inset-0 p-8 bg-gradient-to-br from-primary-800 to-primary-900 backdrop-blur-md border border-white/10 rounded-xl transition-all duration-500 ease-out ${getPositionStyles()}`}
                        initial={{ 
                          opacity: 0, 
                          x: direction > 0 ? 200 : -200,
                          scale: 0.8,
                          rotateY: direction > 0 ? 45 : -45
                        }}
                        animate={{ 
                          opacity: position === 'center' ? 1 : position.includes('1') ? 0.7 : 0.4,
                          x: position === 'center' ? 0 : position === 'left1' ? '-15%' : position === 'left2' ? '-25%' : position === 'right1' ? '15%' : '25%',
                          y: position === 'center' ? 0 : position.includes('1') ? '4%' : '8%',
                          scale: position === 'center' ? 1 : position.includes('1') ? 0.92 : 0.84,
                          rotate: position === 'center' ? 0 : position === 'left1' ? -3 : position === 'left2' ? -6 : position === 'right1' ? 3 : 6,
                          rotateY: 0
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.23, 1, 0.32, 1] 
                        }}
                      >
                        {/* Card Content */}
                        <div className="h-full flex flex-col justify-between p-2 md:p-6">
                          {/* Rating Stars */}
                          <div className="flex justify-center mb-6">
                            {renderStars(testimonials[index].stars)}
                          </div>
                          
                          {/* Quote content */}
                          <div className="relative flex-grow overflow-hidden">
                            <div className="absolute top-0 left-0 text-4xl text-accent/10" aria-hidden="true">"</div>
                            <div className="absolute bottom-0 right-0 text-4xl text-accent/10" aria-hidden="true">"</div>
                            <p className="text-base md:text-lg text-neutral-200 text-center my-6 md:my-8 px-4 leading-relaxed">
                              {testimonials[index].text}
                            </p>
                          </div>
                          
                          {/* Customer Info */}
                          <div className="flex flex-col items-center mt-auto">
                            <div className="w-12 h-12 flex items-center justify-center bg-primary-700 rounded-full mb-3">
                              <span className="text-white text-xl font-semibold">
                                {testimonials[index].name[0]}
                              </span>
                            </div>
                            <h4 className="text-white font-medium text-lg">{testimonials[index].name}</h4>
                            <p className="text-neutral-400 text-sm">{testimonials[index].role}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="absolute top-1/2 -left-5 md:-left-12 transform -translate-y-1/2 z-40">
              <button 
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full bg-primary-800/90 backdrop-blur-sm hover:bg-primary-700 border border-white/10 flex items-center justify-center text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-transform duration-300 hover:-translate-x-1"
                aria-label="Previous testimonial"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-5 md:-right-12 transform -translate-y-1/2 z-40">
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-primary-800/90 backdrop-blur-sm hover:bg-primary-700 border border-white/10 flex items-center justify-center text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-transform duration-300 hover:translate-x-1"
                aria-label="Next testimonial"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
            
            {/* Indicator dots */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-6">
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
                  className="group focus:outline-none"
                  aria-label={`Go to testimonial ${idx + 1}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-6 bg-accent'
                        : 'bg-neutral-500 hover:bg-neutral-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
