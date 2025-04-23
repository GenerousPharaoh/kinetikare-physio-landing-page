"use client";

import React from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// Replace with Phosphor Icons for consistency
import { 
  HandPalm, 
  HeartStraight,
  Brain,
  CheckCircle,
  ArrowRight,
  PersonArmsSpread,
  Barbell,
  Gauge,
  Person
} from "@phosphor-icons/react";
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/Button';

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

const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookLinkClick }) => {
  const prefersReducedMotion = useReducedMotion();
  
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: prefersReducedMotion ? 0.1 : 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.6,
        ease: [0.25, 0.1, 0.25, 1.0] // Custom easing for smoother animation
      }
    }
  };

  const services = [
    {
      title: 'Manual Therapy',
      description: 'Hands-on techniques to reduce pain, decrease muscle tension, and restore mobility to joints and soft tissues.',
      icon: HandPalm,
      color: 'from-blue-500/20 to-cyan-400/20'
    },
    {
      title: 'Movement Assessment',
      description: 'Detailed evaluation of your movement patterns to identify imbalances, compensations and limitations.',
      icon: PersonArmsSpread,
      color: 'from-emerald-500/20 to-teal-400/20'
    },
    {
      title: 'Therapeutic Exercise',
      description: 'Customized exercise programs to improve mobility, strength, and function specific to your needs and goals.',
      icon: Barbell,
      color: 'from-indigo-500/20 to-purple-400/20'
    },
    {
      title: 'Neuromuscular Integration',
      description: 'Advanced techniques to improve the connection between your nervous system and muscles.',
      icon: Brain,
      color: 'from-amber-500/20 to-yellow-400/20'
    },
    {
      title: 'Return to Sport',
      description: 'Specialized rehabilitation to help athletes safely return to their sport following injury.',
      icon: Person,
      color: 'from-red-500/20 to-rose-400/20'
    },
    {
      title: 'Pain Management',
      description: 'Strategies to understand, control and reduce chronic pain through evidence-based approaches.',
      icon: Gauge,
      color: 'from-violet-500/20 to-fuchsia-400/20'
    }
  ];

  // Handle booking link click
  const handleBookClick = () => {
    if (onBookLinkClick) {
      onBookLinkClick('booking');
    }
  };

  return (
    <section id="services" className="py-24 md:py-28 lg:py-32 bg-neutral-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-[0.07] text-gray-900 pointer-events-none"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block mb-2 text-sm font-medium tracking-wider text-accent uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold text-gray-900 tracking-tight mb-6">
            Specialized Physiotherapy Services
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Comprehensive treatments designed to restore function, reduce pain, and enhance your quality of life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={`service-${index}`}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 group border border-neutral-100 hover:border-neutral-200 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent">
                <service.icon weight="regular" size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
              <Link 
                href="/services"
                className="inline-flex items-center text-accent font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
              >
                Learn more <ArrowRight weight="bold" className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 lg:mt-20 text-center">
          <button
            onClick={handleBookClick}
            className="bg-accent hover:bg-accent-dark text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] inline-flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-accent-light/30"
          >
            Book an appointment
            <ArrowRight weight="bold" className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
