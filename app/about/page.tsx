"use client";

import Link from 'next/link';
import ClientImage from '@/components/ClientImage';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { LightBulbIcon, UserGroupIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { 
  DocumentTextIcon, 
  ChatBubbleBottomCenterTextIcon,
  AdjustmentsHorizontalIcon as AdjustmentsIcon,
  UserIcon,
  BeakerIcon,
  UserGroupIcon as UserGroupIconSolid
} from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const commitmentItems = [
    {
      id: 'assessment',
      title: 'Thorough Assessment',
      description: 'A comprehensive evaluation in a comfortable, judgment-free environment',
      icon: DocumentTextIcon
    },
    {
      id: 'communication',
      title: 'Clear Communication',
      description: 'Easy-to-understand explanations of findings in accessible language',
      icon: ChatBubbleBottomCenterTextIcon
    },
    {
      id: 'customization',
      title: 'Custom Treatment',
      description: 'A tailored therapy plan addressing your specific recovery goals',
      icon: AdjustmentsIcon
    },
    {
      id: 'attention',
      title: 'Dedicated Attention',
      description: 'One-on-one, unhurried focus during every treatment session',
      icon: UserIcon
    },
    {
      id: 'evidence',
      title: 'Evidence-Based Care',
      description: 'Proven interventions combining manual therapy, movement retraining, and self-management',
      icon: BeakerIcon
    },
    {
      id: 'collaboration',
      title: 'Collaborative Approach',
      description: 'A partnership that respects your input and preferences',
      icon: UserGroupIconSolid
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % commitmentItems.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, commitmentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % commitmentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + commitmentItems.length) % commitmentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <main className="min-h-screen flex flex-col text-primary-700 bg-white">
      {/* Hero Section */}
      <section className="bg-primary-50 text-primary-800 py-10 pt-20 relative border-b border-neutral-200">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-5">
              About <span className="text-[#B08D57]">Kareem</span>
            </h1>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              A journey of experience, empathy, and a commitment to expertise in physiotherapy
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B08D57] opacity-20"></div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            {/* Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Profile Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
                  <ClientImage
                    src="/images/kareem-profile.png"
                    alt="Kareem Hassanein, Physiotherapist"
                    width={500}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Professional Highlights */}
                <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-[#B08D57]/20 shadow-lg">
                  <h3 className="text-lg font-bold mb-4 text-primary-800 border-b border-primary-200 pb-3">Professional Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#B08D57] mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">MSc Physiotherapy (Distinction)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#B08D57] mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">FCAMPT Level 2 Certified</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#B08D57] mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">5+ Years Clinical Practice</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#B08D57] mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">6,000+ hours personal training</span>
                    </li>
                  </ul>
                </div>

                {/* Professional Affiliations */}
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-neutral-200 shadow-lg">
                  <h3 className="text-lg font-bold mb-6 text-primary-800 border-b border-primary-200 pb-3">Professional Affiliations</h3>
                  <div className="space-y-5">
                    <Link 
                      href="https://physiotherapy.ca/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-white p-5 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
                    >
                      <ClientImage
                        src="/images/canadian-physio-association-logo.png"
                        alt="Canadian Physiotherapy Association"
                        width={140}
                        height={70}
                        className="object-contain h-auto max-h-14 mx-auto filter contrast-110 brightness-105"
                        style={{ 
                          filter: 'contrast(1.1) brightness(1.05) saturate(1.1) unsharp-mask(amount=1.5, radius=1, threshold=0)',
                          imageRendering: 'crisp-edges'
                        }}
                      />
                    </Link>
                    
                    <Link 
                      href="https://collegept.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-white p-5 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
                    >
                      <ClientImage
                        src="/images/college-of-physiotherapists-of-ontario-logo.webp"
                        alt="College of Physiotherapists of Ontario"
                        width={140}
                        height={70}
                        className="object-contain h-auto max-h-14 mx-auto"
                      />
                    </Link>
                    
                    <Link 
                      href="https://endorphinshealth.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-white p-5 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
                    >
                      <ClientImage
                        src="/images/endorphins-health-and-wellness-centre-logo.png"
                        alt="Endorphins Health & Wellness Centre"
                        width={140}
                        height={70}
                        className="object-contain h-auto max-h-14 mx-auto"
                      />
                    </Link>
                  </div>
                </div>
                
                {/* KinetiKare Logo */}
                <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/kinetikare-logo.png"
                      alt="KinetiKare Logo"
                      width={120}
                      height={120}
                      className="w-30 h-30 object-contain"
                      style={{
                        filter: 'contrast(1.15) saturate(1.2) brightness(0.95)',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                  </div>
                </div>
                
                {/* CTA */}
                <div className="bg-gradient-to-br from-primary-800 to-slate-800 p-6 rounded-2xl text-white shadow-lg">
                  <h3 className="text-lg font-bold mb-3 text-white">Take the Next Step</h3>
                  <p className="mb-4 text-sm text-white/90 leading-relaxed">Ready to work together on your recovery? Let's discuss how I can support your specific goals and challenges.</p>
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-4 bg-[#B08D57] hover:bg-[#A17D47] text-white rounded-xl font-semibold transition-colors duration-300"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-4xl font-heading font-bold mb-8 text-primary-800">
                The Path That Shaped My Practice
              </h2>
              
              {/* Mobile integrated image and intro */}
              <div className="lg:hidden mb-10">
                <div className="w-36 h-44 float-left mr-6 mb-4 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-white">
                  <ClientImage
                    src="/images/kareem-profile.png"
                    alt="Kareem Hassanein, Physiotherapist"
                    width={500}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-primary-700 leading-relaxed">
                  <p className="mb-4 text-lg">
                    My journey into physiotherapy wasn't merely academic—it was forged through personal experience. From competitive soccer and pursuing a Kinesiology degree at McMaster University to navigating my own significant injuries including debilitating disc herniations, I've experienced both sides of rehabilitation.
                  </p>
                  <p className="text-lg">
                    These moments of vulnerability transformed my professional purpose, leading me to complete a Master's in Physiotherapy from Robert Gordon University with distinction. My education, combined with firsthand experience as a patient, has deeply informed my approach to care.
                  </p>
                </div>
                <div className="clear-both"></div>
              </div>
              
              <div className="prose prose-xl max-w-none prose-headings:font-heading prose-headings:text-primary-800 prose-p:text-primary-700">
                <p className="hidden lg:block text-lg leading-relaxed">
                  My journey into physiotherapy wasn't merely academic—it was forged through personal experience. From competitive soccer and pursuing a Kinesiology degree at McMaster University to navigating my own significant injuries including debilitating disc herniations, I've experienced both sides of rehabilitation.
                </p>
                <p className="hidden lg:block text-lg leading-relaxed">
                  These moments of vulnerability transformed my professional purpose, leading me to complete a Master's in Physiotherapy from Robert Gordon University with distinction. My education, combined with firsthand experience as a patient, has deeply informed my approach to care.
                </p>
                
                {/* Philosophy of Practice Section */}
                <div className="py-16">
                  <h3 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-12 text-center relative pb-4">
                    Philosophy of Practice
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#B08D57]"></span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* Card 1: Root Cause Resolution */}
                    <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
                      <LightBulbIcon className="h-12 w-12 text-[#B08D57] mb-6" />
                      <h4 className="font-semibold text-xl text-primary-800 mb-3">Root Cause Resolution</h4>
                      <p className="text-primary-600 leading-relaxed">
                        I don't just treat symptoms; I investigate underlying movement patterns to address what's truly driving your pain.
                      </p>
                    </div>
                    {/* Card 2: Collaborative Partnership */}
                    <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
                      <UserGroupIcon className="h-12 w-12 text-[#B08D57] mb-6" />
                      <h4 className="font-semibold text-xl text-primary-800 mb-3">Collaborative Partnership</h4>
                      <p className="text-primary-600 leading-relaxed">
                        Your input is key. I listen, explain clearly, and involve you in every treatment decision.
                      </p>
                    </div>
                    {/* Card 3: Personalized Progression */}
                    <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
                      <AdjustmentsHorizontalIcon className="h-12 w-12 text-[#B08D57] mb-6" />
                      <h4 className="font-semibold text-xl text-primary-800 mb-3">Personalized Progression</h4>
                      <p className="text-primary-600 leading-relaxed">
                        Recovery isn't linear. Your treatment evolves with you, adapting to optimize your unique healing journey.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mt-16 mb-12 text-center">What Drives My Practice</h3>
                
                <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-3xl border border-slate-200/50 shadow-lg mb-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-1 h-20 bg-gradient-to-b from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed italic mb-6">
                          "Having sat on both sides of the treatment table, I recognize the profound difference between being processed through a system and being truly understood."
                        </blockquote>
                        <div className="text-right">
                          <cite className="text-[#B08D57] font-semibold not-italic">— Kareem Hassanein</cite>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    My practice is built on firsthand experience—both as a clinician and as a patient who has navigated the frustrations of pain, slow recovery, and an often impersonal healthcare system. This dual perspective means I genuinely understand how easily patients can be overlooked.
                  </p>
                  <p>
                    I don't subscribe to high-volume, prescriptive protocols; instead, I focus on individualized care. Each patient receives a plan tailored to their unique needs, grounded in advanced manual therapy, exercise science, and a refusal to overlook the details that drive real outcomes and measurable progress.
                  </p>
                  <p>
                    Beyond treatment, I take pride in acting as your advocate within a complex medical landscape. My standard for care isn't based on industry averages or convenient shortcuts—it's built on the dedicated attention and rigor you deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Foundation Section - Full Width */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary-800 mb-6">Professional Foundation</h3>
            <div className="w-32 h-1 bg-gradient-to-r from-[#B08D57] to-[#A17D47] mx-auto mb-8"></div>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Built on rigorous education, advanced certifications, and extensive hands-on experience
            </p>
          </div>

          {/* Education & Certifications Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 max-w-6xl mx-auto">
            {/* Education */}
            <div className="group">
              <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B08D57]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center mb-10">
                    <div className="w-3 h-8 bg-gradient-to-b from-[#B08D57] to-[#A17D47] rounded-full mr-4"></div>
                    <h4 className="text-2xl font-bold text-slate-800">Education</h4>
                  </div>

                  <div className="space-y-6">
                    {/* Master's Degree */}
                    <div className="group">
                      <Link 
                        href="https://www.rgu.ac.uk/study/courses/919-pgcert-pgdip-msc-physiotherapy-pre-registration"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-white/95 rounded-xl border border-white/90 backdrop-blur-sm hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-start space-x-5">
                          <div className="flex-shrink-0">
                        <ClientImage
                          src="/images/robert-gordon-university-logo-png_seeklogo-341455.png"
                              alt="Robert Gordon University"
                              width={96}
                              height={96}
                              className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                              style={{
                                filter: 'contrast(1.1) saturate(1.2) brightness(1.05)',
                                imageRendering: 'crisp-edges'
                              }}
                        />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <h5 className="font-bold text-slate-800 text-xl group-hover:text-[#B08D57] transition-colors duration-300">
                                Master of Science in Physiotherapy
                              </h5>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#B08D57]/10 text-[#B08D57] border border-[#B08D57]/20">
                                Distinction
                              </span>
                            </div>
                            <p className="text-slate-600 font-medium text-base mb-2">Robert Gordon University, Aberdeen, Scotland</p>
                            <div className="mt-3 flex items-center text-xs text-slate-400">
                              <span className="inline-flex items-center">
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                2020
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Bachelor's Degree */}
                    <div className="group">
                      <Link 
                        href="https://kinesiology.mcmaster.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-white/95 rounded-xl border border-white/90 backdrop-blur-sm hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-start space-x-5">
                          <div className="flex-shrink-0">
                        <ClientImage
                          src="/images/mcmaster-university-logo-png_seeklogo-90018.png"
                              alt="McMaster University"
                              width={96}
                              height={96}
                              className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                              style={{
                                filter: 'contrast(1.1) saturate(1.2) brightness(1.05)',
                                imageRendering: 'crisp-edges'
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <h5 className="font-bold text-slate-800 text-xl group-hover:text-[#B08D57] transition-colors duration-300">
                                Bachelor of Science in Kinesiology
                              </h5>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#B08D57]/10 text-[#B08D57] border border-[#B08D57]/20">
                                Honours
                              </span>
                            </div>
                            <p className="text-slate-600 font-medium text-base mb-2">McMaster University, Hamilton, Ontario</p>
                            <div className="mt-3 flex items-center text-xs text-slate-400">
                              <span className="inline-flex items-center">
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                2016
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Certifications */}
            <div className="group">
              <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B08D57]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center mb-10">
                    <div className="w-3 h-8 bg-gradient-to-b from-[#B08D57] to-[#A17D47] rounded-full mr-4"></div>
                    <h4 className="text-2xl font-bold text-slate-800">Advanced Certifications</h4>
                  </div>
                  
                  <div className="space-y-6 flex-1">
                    <div className="p-6 bg-white/90 rounded-xl border border-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mt-2 flex-shrink-0 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-800 text-xl mb-2">FCAMPT Level 2</div>
                          <div className="text-[#B08D57] font-semibold text-base mb-1">Manual & Manipulative Therapy (Upper and Lower Quadrants)</div>
                          <div className="text-slate-600 text-sm leading-relaxed">Advanced certification in orthopedic manual physical therapy</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white/90 rounded-xl border border-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mt-2 flex-shrink-0 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-800 text-xl mb-2">Certified Dry Needling</div>
                          <div className="text-[#B08D57] font-semibold text-base mb-1">Practitioner</div>
                          <div className="text-slate-600 text-sm leading-relaxed">Advanced technique for trigger point release and pain management</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white/90 rounded-xl border border-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mt-2 flex-shrink-0 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-800 text-xl mb-2">Continuing Education</div>
                          <div className="text-[#B08D57] font-semibold text-base mb-1">Ongoing Professional Development</div>
                          <div className="text-slate-600 text-sm leading-relaxed">Regular advancement in evidence-based treatment techniques</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Athletic Background Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Experience */}
            <div className="group">
              <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B08D57]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center mb-10">
                    <div className="w-3 h-8 bg-gradient-to-b from-[#B08D57] to-[#A17D47] rounded-full mr-4"></div>
                    <h4 className="text-2xl font-bold text-slate-800">Clinical Experience</h4>
                  </div>
                  
                  <div className="space-y-6 flex-1">
                    <div className="p-6 bg-white/90 rounded-xl border border-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mt-2 flex-shrink-0 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-800 text-xl mb-2">5+ Years Clinical Practice</div>
                          <div className="text-[#B08D57] font-semibold text-base mb-1">Physiotherapy</div>
                          <div className="text-slate-600 text-sm leading-relaxed">Comprehensive patient care across diverse conditions and populations</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white/90 rounded-xl border border-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mt-2 flex-shrink-0 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-800 text-xl mb-2">6,000+ Hours Personal Training</div>
                          <div className="text-[#B08D57] font-semibold text-base mb-1">Fitness & Conditioning</div>
                          <div className="text-slate-600 text-sm leading-relaxed">Extensive experience in movement analysis and exercise prescription</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white/90 rounded-xl border border-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mt-2 flex-shrink-0 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-800 text-xl mb-2">Assistant Fitness Manager</div>
                          <div className="text-[#B08D57] font-semibold text-base mb-1">Leadership & Operations</div>
                          <div className="text-slate-600 text-sm leading-relaxed">Team management and facility operations in fitness environment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Athletic Background */}
            <div className="group">
              <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B08D57]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center mb-10">
                    <div className="w-3 h-8 bg-gradient-to-b from-[#B08D57] to-[#A17D47] rounded-full mr-4"></div>
                    <h4 className="text-2xl font-bold text-slate-800">Athletic Background</h4>
                  </div>
                  
                  <div className="space-y-5 flex-1">
                    <div className="p-6 bg-white/90 rounded-xl border border-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mt-2 flex-shrink-0 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-800 text-xl mb-2">Semi-Professional Soccer</div>
                          <div className="text-[#B08D57] font-semibold text-base mb-1">Cove Rangers, Scotland</div>
                          <div className="text-slate-600 text-sm leading-relaxed">Competitive experience at high-level football in Scottish leagues</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white/90 rounded-xl border border-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mt-2 flex-shrink-0 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-800 text-xl mb-2">Canadian Soccer League</div>
                          <div className="text-[#B08D57] font-semibold text-base mb-1">Brantford Galaxy</div>
                          <div className="text-slate-600 text-sm leading-relaxed">Semi-professional league experience in Canadian competitive soccer</div>
                  </div>
                </div>
              </div>

                    <div className="p-6 bg-white/90 rounded-xl border border-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mt-2 flex-shrink-0 shadow-sm"></div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-800 text-xl mb-2">Injury & Recovery Experience</div>
                          <div className="text-[#B08D57] font-semibold text-base mb-1">Personal Journey</div>
                          <div className="text-slate-600 text-sm leading-relaxed">Firsthand understanding of athletic injury, rehabilitation, and return to sport</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* My Commitment to You Section - Full Width */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#D4AF37]/10 text-[#B08D57] text-sm font-medium rounded-full mb-6">
              My Professional Guarantee
            </span>
          
            <h3 className="text-4xl font-bold text-primary-800 mb-8">
              My Commitment to You
            </h3>
            <div className="w-48 h-1 bg-[#B08D57] mx-auto mb-10"></div>
            
            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Every aspect of your care is delivered with precision and attention to detail
            </p>
          </div>

          {/* Carousel Container */}
          <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Carousel Content */}
            <div className="overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="bg-gradient-to-br from-white to-slate-50 p-16 text-center border border-[#B08D57]/20 shadow-xl"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#1A2036] to-slate-700 rounded-full flex items-center justify-center mb-10 mx-auto shadow-lg">
                    {React.createElement(commitmentItems[currentSlide].icon, {
                      className: "h-12 w-12 text-[#D4AF37]"
                    })}
                  </div>
                  
                  <h4 className="text-3xl font-bold text-primary-800 mb-6">
                    {commitmentItems[currentSlide].title}
                  </h4>
                  
                  <p className="text-xl text-primary-600 leading-relaxed max-w-3xl mx-auto">
                    {commitmentItems[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Subtle Navigation Dots */}
            <div className="flex justify-center space-x-4 mt-12">
              {commitmentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`group relative transition-all duration-300 ${
                    currentSlide === index ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#B08D57] shadow-lg' 
                      : 'bg-[#B08D57]/30 hover:bg-[#B08D57]/60'
                  }`} />
                  {currentSlide === index && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#B08D57] animate-ping opacity-20" />
                  )}
                </button>
              ))}
            </div>

            {/* Enhanced Progress Bar */}
            <div className="mt-8 w-full bg-gradient-to-r from-[#B08D57]/10 via-[#B08D57]/20 to-[#B08D57]/10 rounded-full h-2 overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#A17D47] shadow-lg"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentSlide + 1) / commitmentItems.length) * 100}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-6">
              <span className="text-sm text-primary-600 font-medium">
                {currentSlide + 1} of {commitmentItems.length}
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-50 text-primary-800 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5 text-primary-800">
              Take the Next Step in Your Recovery Journey
            </h2>
            <p className="text-lg text-primary-600 mb-10 leading-relaxed">
              Book your appointment today or contact me with any questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-8 bg-[#B08D57] hover:bg-[#A17D47] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book an Appointment
              </Link>
              <Link
                href="/services"
                className="py-3.5 px-8 bg-white text-primary-700 hover:bg-neutral-100 border border-neutral-300 font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 