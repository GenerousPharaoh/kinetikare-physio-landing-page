"use client";

import React from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// Import better looking icons
import { 
  HandIcon, 
  HeartPulseIcon,
  BrainCircuitIcon,
  CheckCircle2Icon
} from "lucide-react"; 
// Complementary icons from React Icons
import { IoIosFitness, IoMdMedical } from "react-icons/io";
import { FaRunning, FaHandsHelping, FaDumbbell, FaWalking } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { MdOutlineBiotech, MdSchool, MdSportsGymnastics } from "react-icons/md";
import { RiSurgicalMaskLine, RiMentalHealthLine } from "react-icons/ri";
import Image from 'next/image';
import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/Button';
import dynamic from 'next/dynamic';

// Dynamically import SectionBackground with no SSR to avoid hydration issues
const SectionBackground = dynamic(() => import('@/components/SectionBackground'), { ssr: false });

// Create a custom Acupuncture icon component
const AcupunctureIcon = ({ className, size, ...props }: { className?: string; size?: number } & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 3v8l5 5" />
      <path d="M8 21l4-4" />
      <path d="M21 8l-4 4" />
    </svg>
  );
};

type ServiceProps = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any> | null;
  onBookLinkClick?: (id: string) => void;
};

// Add a separate type for the ServicesSection component
type ServicesSectionProps = {
  onBookLinkClick?: (id: string) => void;
};

const Service = ({ id, title, icon: IconComponent, description, onBookLinkClick }: ServiceProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 flex justify-center items-center rounded-xl bg-primary/10 mb-4">
        {IconComponent && (
          <IconComponent 
            className="w-8 h-8 text-primary" 
            aria-hidden="true" 
          />
        )}
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-center text-gray-600 mt-2">{description}</p>
      {onBookLinkClick && (
        <Button onClick={() => onBookLinkClick(id)} className="mt-4">
          Book Now
        </Button>
      )}
    </div>
  );
};

export default function ServicesSection({ onBookLinkClick }: ServicesSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  // Services data with better icons
  const services: ServiceProps[] = [
    {
      id: 'manual-therapy',
      title: 'Manual Therapy',
      icon: FaHandsHelping,
      description: 'Hands-on techniques including joint mobilization, manipulation, and soft tissue release to restore movement and reduce pain.'
    },
    {
      id: 'dry-needling',
      title: 'Dry Needling',
      icon: AcupunctureIcon,
      description: 'Utilizing fine needles to target trigger points, alleviate muscle tension, and promote healing processes.'
    },
    {
      id: 'exercise-prescription',
      title: 'Exercise Prescription',
      icon: FaDumbbell,
      description: 'Customized exercise programs designed to improve strength, flexibility, and function, tailored to your specific needs.'
    },
    {
      id: 'sports-rehab',
      title: 'Sports Rehabilitation',
      icon: MdSportsGymnastics,
      description: 'Specialized care for athletes of all levels, focusing on injury recovery, performance enhancement, and prevention.'
    },
    {
      id: 'post-operative',
      title: 'Post-Operative Care',
      icon: FaWalking,
      description: 'Structured rehabilitation programs following surgery to ensure optimal recovery and return to function.'
    },
    {
      id: 'patient-education',
      title: 'Patient Education',
      icon: MdSchool,
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
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
    }
  };

  // New, enhanced icon animation variants
  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.12,
      rotate: 0,
      y: -5,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 15 
      }
    }
  };

  // Subtle background pulse animation
  const bgPulseVariants = {
    initial: { 
      opacity: 0.7,
      boxShadow: "0 0 0 rgba(222, 184, 135, 0)" 
    },
    hover: { 
      opacity: 1,
      boxShadow: "0 0 15px rgba(222, 184, 135, 0.5)",
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  };

  return (
    <section 
      id="services" 
      className="section bg-neutral-50 text-primary-700 relative border-t border-neutral-200 pt-20 md:pt-28 pb-24"
    >
      {/* Add subtle section background */}
      <SectionBackground variant="subtle-lines" />
      
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"> 
        <Image
          src="/images/about-physio.jpg" 
          alt="Clinic background"
          fill
          className="object-cover"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/95 via-neutral-50/85 to-neutral-50/95 backdrop-blur-sm"></div>
      </div>

      {/* Improved decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-[-5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.09, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        aria-hidden="true"
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-[-5%] w-[700px] h-[700px] bg-primary-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3
        }}
        aria-hidden="true"
      />
      
      {/* Additional decorative elements */}
      <motion.div 
        className="absolute top-[60%] left-[50%] w-[300px] h-[300px] bg-accent/3 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1.5
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
          {/* Enhanced section header with motion */}
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="premium-icon-badge premium-icon-badge-circle premium-icon-badge-accent">
                <FaHandsHelping className="w-8 h-8" />
              </div>
            </motion.div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-700 mb-4 relative">
              Physiotherapy Services
              <motion.span 
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-accent rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 80, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="section-subtitle text-lg text-primary-600 mx-auto max-w-3xl mt-6">
              Comprehensive physiotherapy solutions tailored to your individual needs,
              delivered with expertise and compassion.
            </p>
          </motion.div>

          {/* Reimagined Services Grid with enhanced GlassCards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
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
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="h-full"
                >
                  <div
                    className={`card p-5 sm:p-8 h-full flex flex-col group`}
                  >
                    {/* Enhanced Premium Icon Badge */}
                    <motion.div 
                      className="mb-4 md:mb-6 relative"
                      initial="initial"
                      whileHover="hover"
                    >
                      <motion.div 
                        className="premium-icon-badge premium-icon-badge-hexagon premium-icon-badge-pattern bg-gradient-to-br from-primary/5 via-primary/10 to-primary/15"
                        variants={{
                          initial: { scale: 1 },
                          hover: { 
                            scale: 1.05,
                            y: -4,
                            transition: { 
                              type: "spring", 
                              stiffness: 500, 
                              damping: 15 
                            }
                          }
                        }}
                      >
                        {IconComponent && (
                          React.isValidElement(IconComponent) ? (
                            <div className="w-6 h-6 md:w-7 md:h-7">{IconComponent}</div>
                          ) : typeof IconComponent === 'function' ? (
                            <IconComponent size={window?.innerWidth < 768 ? 24 : 28} aria-hidden="true" />
                          ) : (
                            <span className="w-6 h-6 md:w-7 md:h-7"></span>
                          )
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Content with improved typography */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-semibold text-primary-700 mb-2 md:mb-4 font-heading">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-primary-600 leading-relaxed flex-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Featured section with improved styling */}
          <motion.div 
            className="mt-20 md:mt-32 mb-10"
            variants={itemVariants}
          >
            <GlassCard
              className="p-6 sm:p-10 md:p-16 max-w-6xl mx-auto rounded-xl md:rounded-2xl bg-white border border-primary-100"
              animate={false}
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Text content with enhancements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <motion.div 
                    className="inline-block rounded-full px-3 md:px-4 py-1 bg-accent/10 text-accent text-xs md:text-sm font-medium mb-4 md:mb-6 border border-accent/20 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Featured
                  </motion.div>
                  
                  <motion.h3 
                    className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-700 mb-3 md:mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    One-on-One Dedicated Care
                  </motion.h3>
                  <motion.p 
                    className="text-primary-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Unlike clinics that book multiple patients per hour, I dedicate my full attention to you during your entire appointment. This allows for deeper assessment, more hands-on treatment time, and better outcomes.
                  </motion.p>
                  
                  {/* Redesigned bullet points with premium badges */}
                  <motion.ul 
                    className="space-y-3 md:space-y-5 mt-6 md:mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5, staggerChildren: 0.1 }}
                  >
                    <motion.li variants={itemVariants} className="flex items-start gap-3 md:gap-4">
                      {/* Directly apply Tailwind styles for the badge */}
                      <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 md:mt-0">
                        <CheckCircle2Icon className="w-4 h-4 md:w-5 md:w-5 text-accent" />
                      </div>
                      <span className="text-primary-700 text-sm md:text-base">Personalized care plans designed for your specific needs</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start gap-3 md:gap-4">
                      {/* Directly apply Tailwind styles for the badge */}
                      <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 md:mt-0">
                        <CheckCircle2Icon className="w-4 h-4 md:w-5 md:w-5 text-accent" />
                      </div>
                      <span className="text-primary-700 text-sm md:text-base">Evidence-based treatment with proven results</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start gap-3 md:gap-4">
                      {/* Directly apply Tailwind styles for the badge */}
                      <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 md:mt-0">
                        <CheckCircle2Icon className="w-4 h-4 md:h-5 md:w-5 text-accent" />
                      </div>
                      <span className="text-primary-700 text-sm md:text-base">Modern facilities in convenient locations</span>
                    </motion.li>
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
                      className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white text-xs md:text-sm font-medium px-4 md:px-6 py-2.5 md:py-3.5 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg relative overflow-hidden group mt-6 md:mt-8" 
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                      Book Your Dedicated Session
                    </Link>
                  </motion.div>
                </motion.div>
                
                {/* Image with enhanced presentation */}
                <motion.div 
                  className="relative h-full min-h-[250px] md:min-h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                > 
                  <Image
                    src="/images/clinic-pic-updated.jpg"
                    alt="Physiotherapy treatment room at KH Physiotherapy"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 40vw"
                    className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                    style={{ 
                      filter: 'brightness(1.1) saturate(1.15) contrast(1.05)',
                    }}
                  />
                  {/* Subtle overlay for better depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-800/20 via-transparent to-primary-100/10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Add clinic reception area showcase - REDESIGNED */}
          <motion.div 
            className="mt-16 md:mt-28 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8 md:mb-12">
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-700 mb-3 md:mb-4">
                Modern Clinic Environment
              </h3>
              <p className="text-primary-600 max-w-3xl mx-auto text-sm md:text-lg px-4">
                Experience physiotherapy in a welcoming, comfortable space designed for your healing journey.
              </p>
            </div>
            
            {/* Redesigned Image Showcase with Overlapping Effect */}
            <div className="relative mx-auto max-w-6xl group">
              <div className="relative aspect-[16/9] sm:aspect-[16/8] w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transform-gpu perspective-1000">
                <Image
                  src="/images/clinic-pic-3.jpg"
                  alt="KH Physiotherapy clinic reception area"
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ 
                    filter: 'brightness(1.15) contrast(1.05) saturate(1.15)',
                  }}
                  sizes="(max-width: 640px) 95vw, (max-width: 1280px) 90vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              
              {/* Overlapping text card */}
              <motion.div
                className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-[85%] md:w-[60%] lg:w-[50%] bg-white/95 backdrop-blur-sm p-3 md:p-5 rounded-lg shadow-lg border border-neutral-200/80"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                viewport={{ once: true, margin: "-5%" }}
              >
                <div className="inline-block text-[10px] xs:text-xs md:text-sm uppercase tracking-wider bg-accent/90 text-white px-2 md:px-3 py-0.5 rounded-full mb-1 md:mb-2 shadow-sm">
                  Professional Environment
                </div>
                <p className="text-sm md:text-base lg:text-lg font-medium text-primary-800">
                  A calming space where your recovery journey begins
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
