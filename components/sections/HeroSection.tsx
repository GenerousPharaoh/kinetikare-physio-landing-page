"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, useAnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SplitText from '@/components/ui/SplitText';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimationControls();
  
  // Parallax scrolling effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  
  // Smoothed spring animation for the mouse movement
  const springConfig = { stiffness: 150, damping: 15 };
  const mouseSpringX = useSpring(0, springConfig);
  const mouseSpringY = useSpring(0, springConfig);
  
  // Text reveal animations with staggered children
  const [textRef, textInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-10% 0px'
  });
  
  // Image reveal with custom animation
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (textInView) {
      controls.start('visible');
    }
    
    setIsMounted(true);
    setIsVisible(true);
    
    // Handle mouse movement for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      setMousePosition({ x, y });
      mouseSpringX.set(x * 20); // Control the intensity of the effect
      mouseSpringY.set(y * 20);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [textInView, controls, mouseSpringX, mouseSpringY]);

  // Handle scroll to services
  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerOffset = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.07,
        delayChildren: 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
        duration: 0.8
      }
    }
  };
  
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      }
    }
  };
  
  const lineVariants = {
    hidden: { y: 100 },
    visible: { 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.19, 1, 0.22, 1]
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] }
    }
  };
  
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
    }
  };
  
  const imageRevealVariants = {
    hidden: { opacity: 0, scale: 0.95, rotateY: -5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.19, 1, 0.22, 1],
        delay: 0.2
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative bg-gradient-to-b from-primary-900 to-primary-800 text-white py-24 md:py-32 lg:py-40 border-b border-primary-800/50 overflow-hidden texture-grain"
    >
      {/* Background parallax layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient mesh with parallax */}
        <motion.div 
          className="gradient-mesh"
          style={{ 
            y: y1,
            opacity
          }}
        />
        
        {/* Animated circles with parallax */}
        <motion.div 
          className="absolute top-20 right-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[80px] float-animation" 
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, 70]),
            x: useTransform(mouseSpringX, (value) => value * -0.5)
          }}
        />
        
        <motion.div 
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary-800/20 blur-[100px] float-animation" 
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, -50]),
            x: useTransform(mouseSpringX, (value) => value * 0.8)
          }}
        />
        
        <motion.div 
          className="absolute top-[40%] left-[15%] w-[200px] h-[200px] rounded-full bg-accent/[0.04] blur-[60px] float-animation" 
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, 30]),
            x: useTransform(mouseSpringX, (value) => value * 0.3)
          }}
        />
        
        {/* Decorative lines with parallax */}
        <motion.svg 
          className="absolute top-0 right-0 h-full w-1/2 opacity-5" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          style={{ 
            x: useTransform(mouseSpringX, (value) => value * 5)
          }}
        >
          <motion.line 
            x1="0" y1="0" x2="100" y2="100" 
            stroke="white" 
            strokeWidth="0.5" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          />
          <motion.line 
            x1="20" y1="0" x2="100" y2="80" 
            stroke="white" 
            strokeWidth="0.3" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.7 }}
          />
          <motion.line 
            x1="40" y1="0" x2="100" y2="60" 
            stroke="white" 
            strokeWidth="0.2" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.9 }}
          />
        </motion.svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text content with advanced animations */}
          <motion.div 
            ref={textRef}
            className="md:w-1/2 lg:w-5/12 md:pr-8 lg:pr-12 mb-10 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Premium animated heading with split text */}
            <div className="overflow-hidden mb-6">
              <motion.div variants={headingVariants}>
                <div className="overflow-hidden">
                  <motion.div variants={lineVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                    Physical Therapy
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div variants={lineVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                    Tailored to <span className="accent-gradient-text">Your Needs</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Description with progressive reveal */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <p className="text-base md:text-lg text-neutral-300 mb-8 max-w-xl leading-relaxed relative">
                Expert physiotherapy services to help you move better, 
                feel better, and live better.
                <motion.span 
                  className="absolute -left-6 top-0 bottom-0 w-1 bg-accent/50"
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ delay: 0.9, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                />
              </p>
            </motion.div>
            
            {/* Button group with elegant micro-interactions */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="https://khphysiotherapy.janeapp.com/" 
                target="_blank"
                className="premium-button bg-accent hover:bg-accent-dark text-white font-medium px-5 py-3 rounded-lg transition-all duration-700 text-center flex items-center justify-center gap-2 shadow-xl hover:shadow-accent/20 group"
                aria-label="Book an appointment online"
              >
                <motion.span 
                  className="absolute inset-0 bg-accent-dark rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={{ scale: 0.85 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                />
                <CalendarDaysIcon className="h-5 w-5 relative z-10" aria-hidden="true" />
                <span className="relative z-10">Book an Appointment</span>
              </Link>
              
              <Link 
                href="/services" 
                onClick={handleServicesClick}
                className="relative premium-button bg-transparent hover:bg-primary-700/50 text-white border border-primary-700/50 font-medium px-5 py-3 rounded-lg transition-all duration-700 text-center flex items-center justify-center gap-2 overflow-hidden group"
              >
                <motion.span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent 
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out"
                />
                <span className="relative z-10">My Services</span>
                <ArrowRightIcon className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image with parallax hover and reveal animation */}
          <motion.div 
            ref={imageRef}
            className="md:w-1/2 lg:w-7/12 relative parallax-container"
            variants={imageRevealVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            style={{
              perspective: 1000,
              rotateX: useTransform(mouseSpringY, (value) => -value * 0.01),
              rotateY: useTransform(mouseSpringX, (value) => value * 0.01),
            }}
          >
            <div className="image-reveal revealed relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000">
              <Image
                src="/images/physiotherapist.jpg"
                alt="Physiotherapy treatment session showing a therapist working with a patient"
                width={700}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                className="w-full h-auto rounded-2xl"
                priority={true}
                quality={90}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/20 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              />
              
              {/* Decorative elements over the image with parallax effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                  x: useTransform(mouseSpringX, (value) => value * -1.5),
                  y: useTransform(mouseSpringY, (value) => value * -1.5),
                }}
              >
                <motion.div 
                  className="absolute -right-4 -bottom-4 w-24 h-24 border-2 border-accent/40 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2, ease: [0.19, 1, 0.22, 1] }}
                />
                <motion.div 
                  className="absolute -left-3 -top-3 w-16 h-16 border border-white/30 rounded-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.4, ease: [0.19, 1, 0.22, 1] }}
                />
              </motion.div>
            </div>
            
            {/* Floating badge with refined animation */}
            <motion.div 
              className="absolute -right-4 -bottom-8 md:right-8 md:bottom-8 refined-card px-4 py-3 rounded-lg shadow-lg bg-white/90 backdrop-blur-md z-20"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 1.6, 
                duration: 0.8, 
                ease: [0.19, 1, 0.22, 1],
                scale: { duration: 0.4, type: "spring" }
              }}
              style={{
                x: useTransform(mouseSpringX, (value) => value * 5),
                y: useTransform(mouseSpringY, (value) => value * 5),
              }}
            >
              <p className="text-primary-800 font-medium text-sm">
                <span className="gradient-text font-bold">5 years</span> of experience
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
