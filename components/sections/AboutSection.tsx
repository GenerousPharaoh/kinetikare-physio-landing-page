"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
// Replace with Phosphor Icons
import { 
  GraduationCap, 
  Trophy, 
  Heart, 
  Certificate, 
  Heartbeat, 
  Users, 
  ArrowRight,
  CheckCircle
} from "@phosphor-icons/react";

const AboutSection = () => {
  const prefersReducedMotion = useReducedMotion();
  
  // Animation variants with reduced motion preference support
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: prefersReducedMotion ? 0.1 : 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Professional credentials - moved inside the component
  const credentials = [
    'Registered Physiotherapist',
    'Sports Rehabilitation',
    'Manual Therapy',
    'Functional Dry Needling'
  ];

  const qualifications = [
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education',
      items: [
        'Master of Science in Physical Therapy',
        'Bachelor of Science in Kinesiology'
      ]
    },
    {
      id: 'certification',
      icon: Certificate,
      title: 'Certifications',
      items: [
        'Advanced Manual & Manipulative Therapy (CAMPT)',
        'Certified Dry Needling Practitioner',
        'Sports Rehabilitation Specialist'
      ]
    },
    {
      id: 'experience',
      icon: Heartbeat,
      title: 'Experience',
      items: [
        '5 years of clinical experience',
        'Worked with professional athletes',
        'Specialized in complex injury rehabilitation'
      ]
    },
    {
      id: 'affiliations',
      icon: Users,
      title: 'Affiliations',
      items: [
        'Canadian Physiotherapy Association',
        'Orthopaedic Division of CPA',
        'Canadian Academy of Manipulative Physiotherapy'
      ]
    }
  ];

  const listItems = [
    'Manual therapy & joint mobilization',
    'Soft tissue release techniques',
    'Exercise prescription & rehabilitation',
    'Pain management strategies',
    '5 years of clinical experience',
    'Personalized treatment plans'
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-paper pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center"
        >
          {/* Enhanced image container with subtle border and shadow */}
          <div className="lg:col-span-5 col-span-12 relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-neutral-100 shadow-xl transition-all duration-500 group bg-gradient-to-b from-gray-100 to-gray-200">
              <Image
                src="/images/kareem-profile.png"
                alt="Kareem Hassanein, Registered Physiotherapist"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Remove or fix gradient decoration */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-80 h-80 bg-gradient-to-br from-primary-100 to-primary-300/50 rounded-full blur-3xl opacity-40"></div>
          </div>
          
          {/* Enhanced content section */}
          <motion.div variants={itemVariants}>
            <span className="inline-block mb-3 text-sm font-medium tracking-wider text-accent uppercase relative">
              <span className="relative z-10">About Me</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-accent/10 -z-10"></span>
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold text-gray-900 tracking-tight mb-6">
              Kareem Hassanein
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>
                With over five years of experience as a registered physiotherapist, I specialize in providing individualized care to clients with a wide range of conditions and goals.
              </p>
              <p>
                My approach combines manual therapy, targeted exercise prescription, and patient education to create comprehensive treatment plans that address not just symptoms, but root causes.
              </p>
              <p>
                I believe in spending quality time with each client, ensuring thorough assessments and personalized care. This dedication to one-on-one treatment allows for better outcomes and more meaningful therapeutic relationships.
              </p>
            </div>
            
            {/* Enhanced key qualifications with accent colors */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-accent to-accent-light shadow-sm mr-2"></div>
                  <span className="text-gray-700">{credential}</span>
                </div>
              ))}
            </div>
            
            {/* Enhanced button with icon */}
            <Button 
              href="/about" 
              variant="outline" 
              size="lg"
              icon={<ArrowRight weight="bold" className="h-5 w-5" />}
              iconPosition="right"
              className="group hover:border-accent/70 hover:bg-gradient-to-r hover:from-accent/5 hover:to-accent/10"
            >
              Learn more about me
            </Button>
          </motion.div>
        </motion.div>
        
        {/* New qualification cards section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-neutral-100"
              >
                <div className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-accent/10">
                  <qual.icon weight="regular" size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{qual.title}</h3>
                <ul className="space-y-2">
                  {qual.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent mt-1 mr-2 flex-shrink-0" weight="fill" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
