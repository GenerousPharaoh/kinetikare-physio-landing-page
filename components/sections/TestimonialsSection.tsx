"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid'; 
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
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

// Testimonial data (Content preserved)
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kathy",
    role: "Parent of Patient",
    stars: 5,
    text: "Highly recommend Movement Solutions Physiotherapy. In particular, Kareem has been truly exceptional! Can't express my gratitude for the remarkable care and guidance he has provided during my son's recovery from a knee injury. His expertise, genuine concern, and unwavering support has made a significant difference in my son's recovery these past 4 months.",
    avatar: "/images/avatars/avatar-1.png" // Replace with actual image paths if available
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Get previous and next indices for the card stack effect
  const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  
  // Handle next testimonial with animation (wrapped in useCallback)
  const nextTestimonial = useCallback(() => {
    if (isTransitioning) return;
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => { 
        setIsTransitioning(false); 
        setDirection(null); 
      }, 50);
    }, 450);
  }, [isTransitioning]); // Dependency: isTransitioning
  
  // Handle previous testimonial with animation (wrapped in useCallback)
  const prevTestimonial = useCallback(() => {
    if (isTransitioning) return;
    setDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setTimeout(() => { 
        setIsTransitioning(false); 
        setDirection(null); 
      }, 50);
    }, 450);
  }, [isTransitioning]); // Dependency: isTransitioning
  
  // Fix for auto-cycling - initialize without delays and add a forced trigger
  useEffect(() => {
    // Function to start or restart the interval
    const startInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      // Create a new interval that calls nextTestimonial every 5 seconds
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000); // Reduced from 7000 for more frequent cycling
    };
    
    // Initial interval start
    if (!isPaused) {
      startInterval();
    }
    
    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextTestimonial]);
  
  // Additional effect to trigger initial animation after a short delay
  useEffect(() => {
    // Trigger first auto-cycle after 2 seconds to ensure it starts working
    const initialTimer = setTimeout(() => {
      if (!isPaused && !isTransitioning) {
        nextTestimonial();
      }
    }, 2000);
    
    return () => clearTimeout(initialTimer);
  }, [isPaused, isTransitioning, nextTestimonial]);
  
  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true); // Pause the rotation when user interacts
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    // Swipe threshold of 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextTestimonial(); // Swipe left = next
      } else {
        prevTestimonial(); // Swipe right = previous
      }
    }
    
    // Resume auto-rotation after a delay
    setTimeout(() => setIsPaused(false), 5000);
  };
  
  // Generate star rating with new accent color
  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <StarIcon 
        key={i} 
        className={`h-5 w-5 ${i < count ? 'text-accent' : 'text-neutral-200'}`} 
      />
    ));
  };

  // Create a testimonial card component for reuse
  const TestimonialCard = ({ testimonial, position }: { testimonial: Testimonial, position: 'current' | 'previous' | 'next' }) => {
    // Set styling based on position
    const positionStyles = {
      current: "z-30 scale-100 opacity-100 shadow-2xl",
      previous: "z-20 scale-95 opacity-60 -translate-x-[5%] rotate-[-2deg] shadow-xl pointer-events-none",
      next: "z-20 scale-95 opacity-60 translate-x-[5%] rotate-[2deg] shadow-xl pointer-events-none"
    };
    
    return (
      <motion.div 
        className={`absolute inset-0 rounded-xl bg-gradient-to-br from-primary-800 to-primary-800/60 backdrop-blur-md border border-white/5 transition-all duration-500 ease-out ${positionStyles[position]}`}
        initial={false}
        animate={{ 
          scale: position === 'current' ? 1 : 0.95,
          opacity: position === 'current' ? 1 : 0.6,
          x: position === 'previous' ? '-5%' : position === 'next' ? '5%' : 0,
          rotate: position === 'previous' ? -2 : position === 'next' ? 2 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true"></div>
        <div className="absolute top-4 left-4 text-6xl md:text-7xl text-accent/10 font-serif leading-none" aria-label="Decorative opening quote mark" aria-hidden="true">&quot;</div>
        <div className="absolute bottom-4 right-4 text-6xl md:text-7xl text-accent/10 font-serif leading-none rotate-180" aria-label="Decorative closing quote mark" aria-hidden="true">&quot;</div>
        
        {/* Card content */}
        <div className="px-8 py-10 md:p-12 lg:p-16">
          {/* Stars at top */}
          <div className="flex justify-center mb-8">
            {renderStars(testimonial.stars)}
          </div>
          
          {/* Testimonial text */}
          <p className="text-lg md:text-xl leading-relaxed text-neutral-200 font-light text-center mb-10 max-w-3xl mx-auto">
            {testimonial.text}
          </p>
          
          {/* Client info with stylized initial */}
          <div className="flex flex-col items-center mt-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-700 to-accent/20 flex items-center justify-center shadow-lg mb-4 border border-white/10">
              <span className="text-white font-heading text-2xl">
                {testimonial.name[0]}
              </span>
            </div>
            
            <div className="text-center">
              <div className="font-heading font-semibold text-white text-xl md:text-2xl">
                {testimonial.name}
              </div>
              <div className="text-accent/80 text-sm mt-1">
                {testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-primary-900 relative overflow-hidden border-t border-primary-700">
      {/* Premium Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent/[0.04] blur-3xl" aria-hidden="true"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-accent/[0.04] blur-3xl" aria-hidden="true"></div>
        <div className="absolute top-24 left-10 text-9xl text-accent/[0.05] font-serif" aria-label="Decorative opening quote mark" aria-hidden="true">&quot;</div>
        <div className="absolute bottom-24 right-10 text-9xl text-accent/[0.05] font-serif" aria-label="Decorative closing quote mark" aria-hidden="true">&quot;</div>
        <div className="absolute inset-0 bg-pattern opacity-[0.01]" aria-hidden="true"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Reduce animation delay threshold */}
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
        
        {/* Premium Testimonial Carousel with Card Deck Effect */}
        <div 
          className={`max-w-5xl mx-auto transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <div 
            className="relative h-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows - Improved positioning and style */}
            <div className="absolute top-1/2 -left-5 md:-left-12 -translate-y-1/2 z-40">
              <motion.button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-primary-800/90 backdrop-blur-sm hover:bg-primary-700 border border-white/10 flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                aria-label="Previous testimonial"
                disabled={isTransitioning}
                whileHover={{ x: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 -right-5 md:-right-12 -translate-y-1/2 z-40">
              <motion.button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-primary-800/90 backdrop-blur-sm hover:bg-primary-700 border border-white/10 flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                aria-label="Next testimonial"
                disabled={isTransitioning}
                whileHover={{ x: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRightIcon className="h-5 w-5" />
              </motion.button>
            </div>
            
            {/* Testimonial Card Stack - 3D Effect */}
            <div className="relative h-full aspect-auto">
              <div className="relative w-full h-full px-10 py-10 md:py-16 md:px-16">
                {/* Perspective container to create 3D space */}
                <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
                  
                  {/* Cards Container */}
                  <div 
                    className="relative w-full"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      minHeight: '500px' 
                    }}
                  >
                    {/* Previous card (behind current) */}
                    <TestimonialCard 
                      testimonial={testimonials[prevIndex]} 
                      position="previous"
                    />
                    
                    {/* Next card (behind current) */}
                    <TestimonialCard 
                      testimonial={testimonials[nextIndex]} 
                      position="next"
                    />
                    
                    {/* Current card */}
                    <TestimonialCard 
                      testimonial={testimonials[currentIndex]} 
                      position="current"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (idx === currentIndex || isTransitioning) return;
                    setDirection(idx > currentIndex ? 'right' : 'left');
                    setIsTransitioning(true);
                    setIsPaused(true); // Pause auto-cycling when user interacts
                    setTimeout(() => {
                      setCurrentIndex(idx);
                      setTimeout(() => {
                        setIsTransitioning(false);
                        setDirection(null);
                        
                        // Resume auto-rotation after user interaction
                        setTimeout(() => setIsPaused(false), 3000);
                      }, 50);
                    }, 450);
                  }}
                  className="group focus:outline-none"
                  aria-label={`Go to testimonial ${idx + 1}`}
                >
                  <motion.div 
                    className={`h-2 rounded-full transition-all duration-300 ${ 
                      idx === currentIndex ? 'bg-accent w-10' : 'bg-primary-700 w-5 group-hover:bg-primary-600'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    animate={{ 
                      width: idx === currentIndex ? 40 : 20,
                      backgroundColor: idx === currentIndex ? 'rgb(216, 180, 88)' : 'rgb(30, 58, 66)'
                    }}
                  ></motion.div>
                </button>
              ))}
            </div>
            
            {/* Current index indicator */}
            <div className="mt-6 text-center text-neutral-400 text-sm">
              <span className="text-accent font-medium">{currentIndex + 1}</span> / {testimonials.length}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern style */}
      <style jsx>{`
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.01'%3E
            <path d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E
          </C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-700"></div>
    </section>
  );
}
