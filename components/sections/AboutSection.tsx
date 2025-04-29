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
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white pointer-events-none"></div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{backgroundImage: "url('/images/patterns/pattern-dots.svg')"}}
      ></div>
      
      {/* Subtle background glow effects */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] opacity-40"></div>
      <div className="absolute bottom-[30%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary-500/5 blur-[120px] opacity-50"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeading 
            title="About Kareem"
            subtitle="A dedicated professional committed to your optimal health and recovery"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto relative z-10">
          {/* Image column - Premium styling */}
          <div className="relative">
            {/* Enhanced decorative elements */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-primary-50 rounded-2xl transform -rotate-3 opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full bg-accent/10 opacity-70 animate-pulse-slow"></div>
            
            {/* Diagonal decorative line */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-0 left-0 w-[120%] h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent transform rotate-[30deg] translate-x-[-10%] translate-y-[150%] opacity-60"></div>
            </div>
            
            {/* Main profile image with premium styling */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white w-full max-w-sm mx-auto lg:max-w-md transition duration-500 hover:scale-[1.02] group">
              <Image
                src="/images/kareem-profile.png"
                alt="Kareem Hassanein - Professional Physiotherapist"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 40vw, 400px"
              />
              {/* Premium overlay gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-2000 ease-in-out"></div>
            </div>
          </div>

          {/* Content column - Premium styling */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-neutral-100 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl">
            {/* Subtle gradient interior */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-white pointer-events-none"></div>
            
            {/* Refined tagline */}
            <div className="inline-block px-4 py-1.5 bg-primary-50 rounded-full text-accent font-medium mb-6 text-sm">
              Professional Physiotherapist
            </div>
            
            {/* Enhanced quote with premium styling */}
            <p className="text-xl italic text-primary-700 mb-5 font-light relative pl-4">
              <span className="absolute top-0 left-0 text-3xl text-accent/70 -mt-2">&ldquo;</span>
              Personalized care for optimal recovery
              <span className="text-3xl text-accent/70 inline-block ml-1">&rdquo;</span>
            </p>
            
            {/* Heading with premium accent */}
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary-700 mb-8 relative inline-block">
              Your Path to Optimal Health
              <span className="absolute -bottom-2 left-0 w-full max-w-[180px] h-1 bg-gradient-to-r from-primary-500/60 to-accent/60 rounded-full"></span>
            </h3>
            
            {/* Content with improved spacing and premium typography */}
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
            
            {/* Premium credential tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {credentials.map((credential, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 border border-primary-100 shadow-sm transition-all duration-300 hover:bg-primary-100 hover:shadow group-hover:translate-y-[-2px]"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Qualifications Section with premium styling */}
        <div className="mt-24 max-w-5xl mx-auto"> 
          <h3 className="text-2xl font-semibold text-primary-700 mb-10 text-center relative inline-block mx-auto">
            <span className="relative inline-block px-10">
              My Qualifications
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-primary-500/60 via-accent/60 to-primary-500/60 rounded-full"></span>
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {qualifications.map((qual, index) => {
              const IconComponent = qual.icon; 
              return (
                <div 
                  key={qual.id}
                  className="bg-white p-7 rounded-2xl shadow-xl border border-neutral-100 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] group"
                >
                  {/* Subtle interior glow on hover */}
                  <div className="absolute inset-[1px] rounded-[14px] bg-gradient-to-b from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <div className="flex items-center mb-4">
                    <IconBadge 
                      icon={<IconComponent className="h-5 w-5" />}
                      variant="circle"
                      color="primary"
                      size="sm"
                      className="mr-4"
                    />
                    <h4 className="font-semibold text-primary-700 text-lg">{qual.title}</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-primary-600 pl-1">
                    {qual.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2.5 mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" aria-hidden="true"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Affiliations with premium styling */}
        <div className="mt-24 pb-16">
          <h3 className="text-2xl font-semibold text-primary-700 mb-10 text-center relative inline-block mx-auto">
            <span className="relative inline-block px-10">
              Professional Affiliations
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-primary-500/60 via-accent/60 to-primary-500/60 rounded-full"></span>
            </span>
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center">
              {/* Canadian Physiotherapy Association Logo */}
              <Link 
                href="https://physiotherapy.ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105 block w-full group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-neutral-100 flex items-center justify-center h-40 w-full relative overflow-hidden">
                  {/* Subtle interior glow on hover */}
                  <div className="absolute inset-[1px] rounded-[14px] bg-gradient-to-b from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Subtle highlight on hover */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Image
                    src="/images/canadian-physio-association-logo.png"
                    alt="Canadian Physiotherapy Association"
                    width={200}
                    height={120}
                    className="object-contain h-auto max-h-28 relative z-10"
                  />
                </div>
              </Link>
              
              {/* College of Physiotherapists of Ontario Logo */}
              <Link 
                href="https://collegept.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105 block w-full group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-neutral-100 flex items-center justify-center h-40 w-full relative overflow-hidden">
                  {/* Subtle interior glow on hover */}
                  <div className="absolute inset-[1px] rounded-[14px] bg-gradient-to-b from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Subtle highlight on hover */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Image
                    src="/images/college-of-physiotherapists-of-ontario-logo.webp"
                    alt="College of Physiotherapists of Ontario"
                    width={200}
                    height={120}
                    className="object-contain h-auto max-h-28 relative z-10"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
