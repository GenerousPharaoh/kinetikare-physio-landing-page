"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { GraduationCap, Award, Heart, Store } from 'lucide-react';
import { AcademicCapIcon, TrophyIcon, HeartIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid';
import { FaGraduationCap, FaCertificate, FaHeartbeat, FaUsers } from 'react-icons/fa';
// import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import IconBadge from '../ui/IconBadge';

export default function AboutSection() {
  // Removed animation variants since they're no longer needed

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
        'Advanced Manual & Manipulative Therapy (CAMPT) - Level 2 Upper and Lower Quadrant',
        'Certified Dry Needling Practitioner',
      ]
    },
    {
      id: 'experience',
      icon: FaHeartbeat,
      title: 'Experience',
      items: [
        '5+ years of clinical experience',
        'Treating a wide range of musculoskeletal conditions'
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

  return (
    <section id="about" className="relative overflow-hidden py-10 md:py-12 lg:py-14 section-bg-primary">
      {/* Subtle texture background */}
      <div 
        className="absolute inset-0 opacity-[0.04] bg-texture-grid" 
      ></div>
      
      {/* Enhanced subtle background elements */}
      <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[180px] opacity-60"></div>
      <div className="absolute bottom-[20%] left-[5%] w-[500px] h-[500px] rounded-full bg-accent-light/5 blur-[150px] opacity-50"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          {/* Premium section heading with improved typography */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight relative inline-block mb-4 leading-tight">
            About Kareem
          </h2>
          <div className="relative mt-4 flex justify-center">
            {/* Refined gold accent */}
            <div className="h-[3px] w-[80px] bg-accent rounded-full overflow-hidden">
              <div className="absolute inset-0 w-full bg-gradient-to-r from-accent-light via-accent to-accent-light animate-pulse-slow"></div>
            </div>
          </div>
          <p className="font-sans text-lg text-white font-medium mx-auto leading-relaxed mt-6 max-w-2xl">
            A dedicated professional committed to your optimal health and recovery
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto relative z-10">
          {/* Image column with premium styling */}
          <div className="relative order-2 md:order-1">
            {/* Premium frame with subtle accents */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-r-2 border-b-2 border-accent/30 rounded-br-lg"></div>
            
            {/* Main profile image with enhanced container */}
            <div className="relative overflow-hidden rounded-xl shadow-medium bg-white w-full max-w-lg mx-auto transition-all duration-500 hover:shadow-lg group">
              <div className="p-2 md:p-3 border border-neutral-100">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/kareem-profile.png"
                    alt="Kareem Hassanein - Professional Physiotherapist"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 40vw, 500px"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent opacity-60"></div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
          </div>

          {/* Content column with premium card styling */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-medium border border-neutral-100/80 order-1 md:order-2 hover:shadow-lg transition-all duration-300 relative">
            {/* Professional badge with improved styling */}
            <div className="inline-block px-5 py-2 bg-primary-800 text-accent rounded-full text-sm font-medium mb-8 shadow-sm">
              Professional Physiotherapist
            </div>
            
            {/* Enhanced quote styling */}
            <div className="mb-8 relative">
              <p className="font-heading text-xl md:text-2xl italic text-primary-700 pl-4 tracking-tight">
                <span className="absolute top-0 left-0 text-3xl text-accent -mt-2">&ldquo;</span>
                Personalized care for optimal recovery
                <span className="text-3xl text-accent inline-block ml-1">&rdquo;</span>
              </p>
            </div>
            
            {/* Heading with elegant underline */}
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-800 mb-8 relative inline-block tracking-tight leading-tight">
              Your Path to Optimal Health
              <span className="absolute -bottom-2 left-0 w-full max-w-[180px] h-[3px] bg-gradient-to-r from-accent/80 to-accent-light/50 rounded-full"></span>
            </h3>
            
            {/* Content with improved typography and spacing */}
            <div className="space-y-5 text-primary-600 font-sans leading-relaxed">
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
            
            {/* Modern credential tags */}
            <div className="flex flex-wrap gap-3 mt-10">
              {credentials.map((credential, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-primary-800/90 text-white rounded-lg text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow inline-flex items-center"
                >
                  <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                  {credential}
                </span>
              ))}
            </div>
            
            {/* Premium CTA button */}
            <div className="mt-10">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent to-accent-dark text-primary-900 font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="relative z-10">Book a Consultation</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Qualifications Section with premium card styling */}
        <div className="mt-24 max-w-6xl mx-auto relative z-10"> 
          {/* Premium section heading */}
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-white tracking-tight relative inline-block leading-tight">
              Qualifications
            </h3>
            <div className="relative mt-4 flex justify-center">
              <div className="h-[2px] w-[60px] bg-accent rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8">
            {qualifications.map((qual, index) => {
              const IconComponent = qual.icon; 
              return (
                <div 
                  key={qual.id}
                  className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100/80 hover:shadow-medium hover:-translate-y-1 transition-all duration-300 h-full mx-auto w-full"
                >
                  {/* Icon with gradient background */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-700 to-primary-900 mr-4 shadow-sm">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <h4 className="font-heading font-bold text-xl text-primary-800 tracking-tight leading-tight">{qual.title}</h4>
                  </div>
                  
                  <ul className="space-y-3 text-primary-600 pl-1 font-sans leading-relaxed">
                    {qual.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-3 mt-1.5 inline-block w-2 h-2 rounded-full bg-current flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Affiliations with enhanced styling */}
        <div className="mt-24 pb-16 relative z-10">
          {/* Premium section heading */}
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-white tracking-tight relative inline-block leading-tight">
              Professional Affiliations
            </h3>
            <div className="relative mt-4 flex justify-center">
              <div className="h-[2px] w-[60px] bg-accent rounded-full"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
              {/* Canadian Physiotherapy Association Logo with premium styling */}
              <Link 
                href="https://physiotherapy.ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full group"
              >
                <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100/80 hover:border-accent/20 hover:shadow-medium hover:-translate-y-1 flex items-center justify-center h-44 w-full transition-all duration-300">
                  <Image
                    src="/images/canadian-physio-association-logo.png"
                    alt="Canadian Physiotherapy Association"
                    width={220}
                    height={140}
                    className="object-contain h-auto max-h-28 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              
              {/* College of Physiotherapists of Ontario Logo with premium styling */}
              <Link 
                href="https://collegept.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full group"
              >
                <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100/80 hover:border-accent/20 hover:shadow-medium hover:-translate-y-1 flex items-center justify-center h-44 w-full transition-all duration-300">
                  <Image
                    src="/images/college-of-physiotherapists-of-ontario-logo.webp"
                    alt="College of Physiotherapists of Ontario"
                    width={220}
                    height={140}
                    className="object-contain h-auto max-h-28 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>
          </div>
          
          {/* Premium CTA Button */}
          <div className="text-center mt-16">
            <Link 
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-primary-900 font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">Book Your First Appointment</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
