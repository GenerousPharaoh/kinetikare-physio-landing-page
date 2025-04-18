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
        <div className="absolute top-10 left-10 text-9xl text-accent/[0.05] font-serif leading-none" aria-hidden="true">&quot;</div>
        <div className="absolute bottom-10 right-10 text-9xl text-accent/[0.05] font-serif leading-none" aria-hidden="true">&quot;</div>
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
        
        {/* Testimonial Carousel - Simplified and More Reliable Design */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden min-h-[400px] md:min-h-[350px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Main Testimonial Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-primary-800 border border-primary-700/50 rounded-xl p-8 shadow-xl overflow-hidden"
                >
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[activeIndex].stars)}
                  </div>
                  
                  {/* Quote content */}
                  <div className="relative mb-8">
                    <div className="absolute top-0 left-0 text-4xl text-accent/20" aria-hidden="true">&quot;</div>
                    <div className="absolute bottom-0 right-0 text-4xl text-accent/20" aria-hidden="true">&quot;</div>
                    <p className="text-base md:text-lg text-neutral-100 text-center px-6 md:px-10 py-2 leading-relaxed">
                      {testimonials[activeIndex].text}
                    </p>
                  </div>
                  
                  {/* Customer Info */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary-700 rounded-full mb-3">
                      <span className="text-white text-xl font-semibold">
                        {testimonials[activeIndex].name[0]}
                      </span>
                    </div>
                    <h4 className="text-white font-medium text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-neutral-300 text-sm">{testimonials[activeIndex].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation Controls */}
            <div className="absolute top-1/2 -left-3 md:-left-5 transform -translate-y-1/2 z-10">
              <button 
                onClick={handlePrevious}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-800/90 backdrop-blur-sm hover:bg-primary-700 border border-white/10 flex items-center justify-center text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-transform duration-300 hover:-translate-x-1"
                aria-label="Previous testimonial"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-3 md:-right-5 transform -translate-y-1/2 z-10">
              <button 
                onClick={handleNext}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-800/90 backdrop-blur-sm hover:bg-primary-700 border border-white/10 flex items-center justify-center text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-transform duration-300 hover:translate-x-1"
                aria-label="Next testimonial"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Indicator dots */}
          <div className="flex justify-center space-x-2 mt-8">
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
                className="group focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-primary-900 rounded-full"
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-8 bg-accent'
                      : 'bg-neutral-500 hover:bg-neutral-400'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
