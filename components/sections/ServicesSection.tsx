"use client";

import React from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// Import better looking icons from HeroIcons instead of React Icons
import { 
  HandIcon, 
  HeartPulseIcon,
  BrainCircuitIcon,
  CheckCircle2Icon,
  CalendarDaysIcon
} from "lucide-react"; 
// Safe import of icons using dynamic
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import SectionBackground from '@/components/SectionBackground';

// Safely import icons with dynamic to avoid hydration issues
const DumbbellIcon = dynamic(() => import('lucide-react').then(mod => mod.DumbbellIcon), { ssr: false });
const WrenchScrewdriverIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.WrenchScrewdriverIcon), { ssr: false });
const UserIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.UserIcon), { ssr: false });
const BookOpenIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.BookOpenIcon), { ssr: false });
const AcademicCapIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.AcademicCapIcon), { ssr: false });

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

const ServiceCard = ({ id, title, icon: IconComponent, description, onBookLinkClick }: ServiceProps) => {
  return (
    <Card
      variant="gradient"
      hoverEffect={true}
      elevate={true}
      className="h-full p-6 md:p-8"
    >
      <div className="flex flex-col items-center h-full">
        <div className="w-16 h-16 flex justify-center items-center rounded-xl bg-[#1A2036]/10 mb-5">
          {IconComponent && (
            <div className="w-7 h-7 flex items-center justify-center">
              {React.createElement(IconComponent, {
                size: 28,
                className: "text-[#D4AF37]"
              })}
            </div>
          )}
        </div>
        <h3 className="font-serif font-bold text-xl tracking-tight text-[#1A2036] text-center">{title}</h3>
        <p className="text-center text-[#455070] font-sans leading-relaxed mt-3 mb-5">{description}</p>
        {onBookLinkClick && (
          <div className="mt-auto pt-3">
            <Button 
              variant="outline" 
              onClick={() => onBookLinkClick(id)} 
              premium
              className="w-full justify-center"
            >
              Learn More
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default function ServicesSection({ onBookLinkClick }: ServicesSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  // Services data with safer icon references
  const services: ServiceProps[] = [
    {
      id: 'manual-therapy',
      title: 'Manual Therapy',
      icon: HandIcon,
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
      icon: DumbbellIcon,
      description: 'Customized exercise programs designed to improve strength, flexibility, and function, tailored to your specific needs.'
    },
    {
      id: 'sports-rehab',
      title: 'Sports Rehabilitation',
      icon: HeartPulseIcon,
      description: 'Specialized care for athletes of all levels, focusing on injury recovery, performance enhancement, and prevention.'
    },
    {
      id: 'post-operative',
      title: 'Post-Operative Care',
      icon: BrainCircuitIcon,
      description: 'Structured rehabilitation programs following surgery to ensure optimal recovery and return to function.'
    },
    {
      id: 'patient-education',
      title: 'Patient Education',
      icon: AcademicCapIcon,
      description: 'Empowering you with knowledge about your condition and self-management strategies for long-term health.'
    }
  ];

  // Handle click for booking link (scroll)
  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Reliable scroll code that works without props
    const bookingSection = document.getElementById('booking');
    if (bookingSection && typeof window !== 'undefined') {
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
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }
    }
  };

  return (
    <SectionBackground 
      id="services"
      bgVariant="subtle"
      patternOverlay={true}
      patternVariant="dots"
      patternOpacity={0.03}
      texture="noise"
      textureOpacity={0.03}
      spacing="none"
      glowEffect={false}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Heading with new component */}
          <SectionHeading
            title="Physiotherapy Services"
            subtitle="Comprehensive physiotherapy solutions tailored to your individual needs, delivered with expertise and compassion."
            align="center"
            size="lg"
            theme="light"
            decorated={true}
            eyebrow="Expert Care"
            highlight="Physiotherapy"
          />

          {/* Services Grid with standardized card sizes */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                custom={index}
                className="h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ServiceCard 
                  id={service.id}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  onBookLinkClick={onBookLinkClick}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Featured section with glass card styling */}
          <motion.div 
            className="mt-24 mb-12"
            variants={itemVariants}
          >
            <GlassCard
              variant="light"
              blur="lg"
              border={true}
              glow={true}
              hoverEffect="lift"
              className="p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Text content with refined typography */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <motion.div 
                    className="inline-block rounded-full px-4 py-1.5 bg-[#1A2036] text-[#D4AF37] text-xs font-semibold mb-6 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Featured
                  </motion.div>
                  
                  <SectionHeading
                    title="One-on-One Dedicated Care"
                    decorated={true}
                    align="left"
                    size="md"
                    theme="light"
                    animateOnScroll={false}
                  />
                  
                  <motion.p 
                    className="font-sans text-base text-[#455070] mb-6 leading-relaxed mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Unlike clinics that book multiple patients per hour, I dedicate my full attention to you during your entire appointment. This allows for deeper assessment, more hands-on treatment time, and better outcomes.
                  </motion.p>
                  
                  {/* Bullet points with gold accents */}
                  <motion.ul 
                    className="space-y-3 mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5, staggerChildren: 0.1 }}
                  >
                    <motion.li variants={itemVariants} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1A2036]/5 flex items-center justify-center mt-0.5">
                        <CheckCircle2Icon className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <span className="font-sans text-[#455070] text-base leading-relaxed">Personalized care plans designed for your specific needs</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1A2036]/5 flex items-center justify-center mt-0.5">
                        <CheckCircle2Icon className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <span className="font-sans text-[#455070] text-base leading-relaxed">Evidence-based treatment with proven results</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1A2036]/5 flex items-center justify-center mt-0.5">
                        <CheckCircle2Icon className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <span className="font-sans text-[#455070] text-base leading-relaxed">Modern facilities in convenient locations</span>
                    </motion.li>
                  </motion.ul>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-8"
                  >
                    <Button 
                      variant="primary"
                      href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                      premium={true}
                      icon={<CalendarDaysIcon className="h-5 w-5" />}
                      iconPosition="left"
                    >
                      Book Your Dedicated Session
                    </Button>
                  </motion.div>
                </motion.div>
                
                {/* Image with navy overlay */}
                <motion.div 
                  className="relative h-full min-h-[240px] md:min-h-[380px] rounded-xl overflow-hidden shadow-lg group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                > 
                  <Image
                    src="/images/clinic-pic-updated.jpg"
                    alt="Physiotherapy treatment room at KH Physiotherapy"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Navy overlay with gold accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2036]/60 via-[#1A2036]/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  {/* Gold accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#C8A52E]"></div>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Modern clinic environment - Navy/gold styling */}
          <motion.div 
            className="mt-20 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              title="Modern Clinic Environment"
              subtitle="Experience physiotherapy in a welcoming, comfortable space designed for your healing journey."
              align="center"
              size="md"
              theme="light"
              decorated={true}
            />
            
            {/* Image showcase with navy/gold styling */}
            <div className="relative mx-auto max-w-6xl mt-12 group">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-lg transform-gpu">
                <Image
                  src="/images/clinic-pic-3.jpg"
                  alt="KH Physiotherapy clinic reception area"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 95vw, (max-width: 1280px) 90vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2036]/50 via-[#1A2036]/30 to-transparent"></div>
                
                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/60"></div>
              </div>
              
              {/* Overlapping card with navy/gold styling */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[85%] md:w-[60%] lg:w-[50%]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                viewport={{ once: true, margin: "-5%" }}
              >
                <GlassCard
                  variant="light"
                  blur="lg"
                  border={true}
                  className="p-5"
                >
                  <div className="inline-block text-xs md:text-sm uppercase tracking-wider bg-[#1A2036] text-[#D4AF37] px-3 py-1.5 rounded-full mb-2.5 shadow-sm font-medium">
                    Professional Environment
                  </div>
                  <p className="font-serif text-base lg:text-lg font-medium text-[#1A2036] leading-relaxed tracking-tight">
                    A calming space where your recovery journey begins
                  </p>
                </GlassCard>
              </motion.div>
            </div>
            
            {/* Book Now CTA - Added as per design requirements */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button 
                variant="primary"
                size="lg"
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                premium={true}
                icon={<CalendarDaysIcon className="h-5 w-5" />}
                iconPosition="left"
              >
                Book Your First Appointment
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SectionBackground>
  );
}
