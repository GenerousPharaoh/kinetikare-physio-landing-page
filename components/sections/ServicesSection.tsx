"use client";

import React from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// Import Phosphor Icons
import { 
  HandPalm, 
  Needle, 
  PersonSimpleRun,
  FirstAidKit,
  Stethoscope,
  GraduationCap,
  CheckCircle // For the checklist
} from "@phosphor-icons/react"; 
import Image from 'next/image';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

interface ServiceProps {
  onBookLinkClick?: (targetId: string) => void;
}

export default function ServicesSection({ onBookLinkClick }: ServiceProps) {
  const { ref, isVisible } = useScrollAnimation();

  // Services data with Phosphor Icons
  const services = [
    {
      id: 'manual-therapy',
      title: 'Manual Therapy',
      icon: HandPalm,
      description: 'Hands-on techniques including joint mobilization, manipulation, and soft tissue release to restore movement and reduce pain.'
    },
    {
      id: 'dry-needling',
      title: 'Dry Needling',
      icon: Needle,
      description: 'Utilizing fine needles to target trigger points, alleviate muscle tension, and promote healing processes.'
    },
    {
      id: 'exercise-prescription',
      title: 'Exercise Prescription',
      icon: PersonSimpleRun,
      description: 'Customized exercise programs designed to improve strength, flexibility, and function, tailored to your specific needs.'
    },
    {
      id: 'sports-rehab',
      title: 'Sports Rehabilitation',
      icon: FirstAidKit, // Changed icon
      description: 'Specialized care for athletes of all levels, focusing on injury recovery, performance enhancement, and prevention.'
    },
    {
      id: 'post-operative',
      title: 'Post-Operative Care',
      icon: Stethoscope, // Changed icon
      description: 'Structured rehabilitation programs following surgery to ensure optimal recovery and return to function.'
    },
    {
      id: 'patient-education',
      title: 'Patient Education',
      icon: GraduationCap, // Changed icon
      description: 'Empowering you with knowledge about your condition and self-management strategies for long-term health.'
    }
  ];

  // Handle click for booking link (scroll)
  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Reliable scroll code that works without props
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      const headerOffset = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = bookingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    // Add top border for separation
    <section 
      id="services" 
      className="section bg-primary-900 text-neutral-200 relative border-t border-primary-700 pt-20 md:pt-28"
    >
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"> 
        <Image
          src="/images/about-physio.jpg" 
          alt="Clinic background"
          fill
          className="object-cover"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/95 via-primary-900/85 to-primary-900/95 backdrop-blur-sm"></div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.07, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        aria-hidden="true"
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-[-10%] w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3
        }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section header with motion */}
          <motion.div 
            className="text-center mb-16 lg:mb-20"
            variants={itemVariants}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Physiotherapy Services 
            </h2>
            <p className="section-subtitle text-lg text-neutral-300 mx-auto max-w-3xl">
              Comprehensive physiotherapy solutions tailored to your individual needs.
            </p>
            <div className="w-20 h-px bg-accent mx-auto mt-6"></div>
          </motion.div>

          {/* Services Grid with GlassCards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const delay = index * 0.1;
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <GlassCard
                    className="p-8 h-full"
                    backgroundOpacity={0.07}
                    blurStrength="md"
                    borderStyle="light"
                    hoverEffect={true}
                    animate={false}
                  >
                    {/* Icon Presentation with enhanced styling */} 
                    <motion.div 
                      className="mb-5"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary-800/70 backdrop-blur-sm border border-primary-700/80 shadow-sm">
                        <IconComponent size={28} weight="light" className="text-accent" aria-hidden="true" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-neutral-300 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Featured section with improved styling */}
          <motion.div 
            className="mt-24 mb-10"
            variants={itemVariants}
          >
            <GlassCard
              className="p-8 md:p-12 lg:p-16 max-w-6xl mx-auto"
              backgroundOpacity={0.1}
              blurStrength="lg"
              borderStyle="accent"
              animate={false}
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Text content with enhancements */}
                <div>
                  <motion.h3 
                    className="font-heading text-2xl md:text-3xl font-semibold text-white mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    One-on-One Dedicated Care
                  </motion.h3>
                  <motion.p 
                    className="text-neutral-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Unlike clinics that book multiple patients per hour, I dedicate my full attention to you during your entire appointment. This allows for deeper assessment, more hands-on treatment time, and better outcomes.
                  </motion.p>
                  <motion.ul 
                    className="space-y-2 mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <li className="flex items-start gap-2">
                      <CheckCircle weight="duotone" className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Personalized care plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle weight="duotone" className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Evidence-based treatment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle weight="duotone" className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Modern facilities in convenient locations</span>
                    </li>
                  </motion.ul>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Link 
                      href="#booking" 
                      onClick={handleBookClick}
                      className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-medium px-5 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg relative overflow-hidden group" 
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                      Book Your Dedicated Session
                    </Link>
                  </motion.div>
                </div>
                
                {/* Image with enhanced presentation */}
                <motion.div 
                  className="relative h-full min-h-[320px] rounded-xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                > 
                  <Image
                    src="/images/clinic-pic-updated.jpg"
                    alt="Physiotherapy treatment room at Endorphins Health and Wellness"
                    fill
                    sizes="(max-width: 768px) 80vw, 40vw"
                    className="object-cover"
                  />
                  {/* Subtle gradient overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent"></div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <GlassCard
                      className="m-4 p-3"
                      backgroundOpacity={0.1}
                      blurStrength="md"
                      borderStyle="none"
                      animate={false}
                    >
                      <p className="text-white/90 text-sm">
                        State-of-the-art treatment facilities
                      </p>
                    </GlassCard>
                  </div>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
