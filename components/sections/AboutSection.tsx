"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { GraduationCap, Award, Heart, Store } from 'lucide-react';
import { AcademicCapIcon, TrophyIcon, HeartIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid';
import { FaGraduationCap, FaCertificate, FaHeartbeat, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const qualifications = [
    {
      id: 'education',
      icon: FaGraduationCap,
      title: 'Education',
      items: [
        'Master of Science in Physical Therapy',
        'Bachelor of Science in Kinesiology'
      ]
    },
    {
      id: 'certification',
      icon: FaCertificate,
      title: 'Certifications',
      items: [
        'Advanced Manual & Manipulative Therapy (CAMPT)',
        'Certified Dry Needling Practitioner',
        'Sports Rehabilitation Specialist'
      ]
    },
    {
      id: 'experience',
      icon: FaHeartbeat,
      title: 'Experience',
      items: [
        '5 years of clinical experience',
        'Worked with professional athletes',
        'Specialized in complex injury rehabilitation'
      ]
    },
    {
      id: 'affiliations',
      icon: FaUsers,
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

  const credentials = [
    'Registered Physiotherapist',
    'Sports Rehabilitation',
    'Manual Therapy'
  ];

  const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    // Add top border for separation
    <section id="about" className="section bg-neutral-50 text-primary-700 overflow-hidden relative border-t border-neutral-200 pt-20 md:pt-28">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Section Header - Update text colors */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-700 mb-4">
              About Kareem
            </h2>
            <p className="section-subtitle text-lg text-primary-600 mx-auto max-w-3xl">
              A dedicated professional committed to your optimal health and recovery
            </p>
             {/* Accent separator */}
             <div className="w-20 h-px bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Image column */}
            <motion.div 
              className={`relative transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Subtle background shape */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary-50 rounded-2xl transform -rotate-3 opacity-60"></div>
              
              {/* Main profile image with enhanced shadow and border */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white w-full max-w-sm mx-auto lg:max-w-md transform transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/kareem-profile.png"
                  alt="Kareem Hassanein - Professional Physiotherapist"
                  width={400}
                  height={500}
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 40vw, 400px"
                  className="w-full h-auto object-cover"
                  quality={90}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0YPh/HwAEJgJmXaiXvwAAAABJRU5ErkJggg=="
                />
              </div>
            </motion.div>

            {/* Content column - Update text colors */}
            <motion.div 
              className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Tagline */}
              <p className="text-xl italic text-accent mb-5 font-light">
                &quot;Personalized care for optimal recovery&quot;
              </p>
              
              {/* Heading with primary color text */}
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary-700 mb-6">
                Your Path to Optimal Health
              </h3>
              
              {/* Paragraph text updated to primary */}
              <div className="space-y-4 text-primary-700 leading-relaxed">
                <p>
                  Providing expert physiotherapy care in Burlington and Waterdown. My approach focuses on individualized treatment plans to help you achieve your health and performance goals.
                </p>
                <p>
                  I bring advanced manual therapy skills, evidence-based treatment approaches, and a passion for helping people overcome pain and movement limitations. My approach focuses on identifying the root cause of your issues, not just treating symptoms.
                </p>
                <p>
                  Building on extensive experience, including several years dedicatedly serving the Waterdown community, 
                  my focus is always on achieving the best possible outcomes for my patients. 
                </p>
                <p>
                  Whether you&apos;re recovering from an injury, managing chronic pain, or seeking to optimize 
                  your physical performance, I&apos;m committed to helping you achieve your health goals through 
                  dedicated one-on-one care.
                </p>
              </div>
              
              {/* Credentials - Update background and text colors */}
              <div className="flex flex-wrap gap-2 mt-6">
                {credentials.map((credential, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-primary-100 rounded-md text-sm text-primary-700 border border-primary-200/50"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </motion.div>
          </div> {/* End of main 2-column grid */} 

          {/* Qualifications Section - Update colors */}
          <div className="mt-20 lg:mt-24 max-w-5xl mx-auto"> 
            <h3 className="text-2xl font-semibold text-primary-700 mb-8 text-center">My Qualifications</h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {qualifications.map((qual, index) => {
                const IconComponent = qual.icon; 
                return (
                  <motion.div 
                    key={qual.id}
                    variants={animationVariants}
                    className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-accent/20 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 premium-icon-badge premium-icon-badge-sm premium-icon-badge-square premium-icon-badge-primary mr-4">
                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h4 className="font-semibold text-primary-700 text-lg">{qual.title}</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-primary-600 pl-1">
                      {qual.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent mr-2.5 mt-1 inline-block w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" aria-hidden="true"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Professional Affiliations with Logos */}
          <motion.div 
            className="mt-20 lg:mt-24 pb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-primary-700 mb-8 text-center">Professional Affiliations</h3>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center">
                {/* Canadian Physiotherapy Association Logo */}
                <Link 
                  href="https://physiotherapy.ca/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-neutral-100 flex items-center justify-center h-36 w-full">
                    <Image
                      src="/images/canadian-physio-association-logo.png"
                      alt="Canadian Physiotherapy Association"
                      width={200}
                      height={120}
                      className="object-contain h-auto max-h-28"
                    />
                  </div>
                </Link>
                
                {/* College of Physiotherapists of Ontario Logo */}
                <Link 
                  href="https://collegept.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-neutral-100 flex items-center justify-center h-36 w-full">
                    <Image
                      src="/images/college-of-physiotherapists-of-ontario-logo.webp"
                      alt="College of Physiotherapists of Ontario"
                      width={200}
                      height={120}
                      className="object-contain h-auto max-h-28"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* REMOVED Subtle Bottom Divider */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-700"></div> */}
    </section>
  );
}
