"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { 
  HeartIcon,
  ShieldCheckIcon,
  StarIcon,
  CheckCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function ConditionsPage() {
  const conditionCategories = [
    {
      title: "Spinal Health",
      subtitle: "Neck, Mid-Back & Low Back",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      gradient: "from-[#B08D57] to-[#D4AF37]",
      conditions: [
        "Low Back Pain (acute and chronic, mechanical, disc-related)",
        "Neck Pain & Stiffness (including whiplash-associated disorders)",
        "Sciatica & Other Nerve Root Compressions (e.g., radiculopathy)",
        "Disc Herniations / Bulges",
        "Degenerative Disc Disease & Degenerative Joint Disease (Spondylosis)",
        "Spinal Stenosis",
        "Postural Dysfunction & Related Pain",
        "Headaches & Migraines (cervicogenic or tension-type)"
      ]
    },
    {
      title: "Shoulder Conditions",
      subtitle: "Complete shoulder care",
      icon: <StarIcon className="w-8 h-8" />,
      gradient: "from-[#A17D47] to-[#B08D57]",
      conditions: [
        "Rotator Cuff Injuries (tendinopathy, tears, post-repair)",
        "Shoulder Impingement Syndrome",
        "Frozen Shoulder (Adhesive Capsulitis)",
        "Shoulder Instability / Dislocations (conservative management & post-surgical)",
        "Bursitis / Tendinitis",
        "AC Joint Sprains"
      ]
    },
    {
      title: "Elbow, Wrist & Hand",
      subtitle: "Upper extremity specialists",
      icon: <HeartIcon className="w-8 h-8" />,
      gradient: "from-[#D4AF37] to-[#B08D57]",
      conditions: [
        "Tennis Elbow (Lateral Epicondylitis)",
        "Golfer's Elbow (Medial Epicondylitis)",
        "Carpal Tunnel Syndrome",
        "De Quervain's Tenosynovitis",
        "Wrist Sprains & Strains",
        "Repetitive Strain Injuries"
      ]
    },
    {
      title: "Hip & Pelvis",
      subtitle: "Core stability and mobility",
      icon: <SparklesIcon className="w-8 h-8" />,
      gradient: "from-[#B08D57] to-[#A17D47]",
      conditions: [
        "Hip Pain (e.g., Bursitis, Gluteal Tendinopathy, Impingement (FAI))",
        "Piriformis Syndrome",
        "Sacroiliac (SI) Joint Dysfunction",
        "Groin Strains"
      ]
    },
    {
      title: "Knee Conditions",
      subtitle: "Comprehensive knee care",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      gradient: "from-[#A17D47] to-[#D4AF37]",
      conditions: [
        "Knee Pain (e.g., Patellofemoral Pain Syndrome, Patellar Tendinopathy)",
        "Ligament Sprains/Tears (ACL, PCL, MCL, LCL – conservative & post-surgical rehab)",
        "Meniscal Injuries (conservative & post-surgical rehab)",
        "IT Band Syndrome",
        "Osteoarthritis of the Knee"
      ]
    },
    {
      title: "Foot & Ankle",
      subtitle: "Foundation of movement",
      icon: <CheckCircleIcon className="w-8 h-8" />,
      gradient: "from-[#D4AF37] to-[#A17D47]",
      conditions: [
        "Ankle Sprains",
        "Plantar Fasciitis & Heel Spurs",
        "Achilles Tendinopathy / Tendinitis",
        "Shin Splints (Medial Tibial Stress Syndrome)",
        "Peroneal Tendinopathy"
      ]
    }
  ];

  const specializedServices = [
    {
      title: "Post-Surgical Rehabilitation",
      description: "Including joint replacements (hip, knee, shoulder), ligament reconstructions (e.g., ACL), fracture fixation, rotator cuff repairs, meniscectomies, spinal surgery recovery."
    },
    {
      title: "Arthritis Management",
      description: "Osteoarthritis, Rheumatoid Arthritis (focus on pain management, mobility, and function)."
    },
    {
      title: "Sports-Related Injuries",
      description: "Muscle strains, ligament sprains, contusions, overuse injuries specific to various sports."
    },
    {
      title: "Chronic Pain Management",
      description: "Multimodal approaches to help manage and reduce long-standing pain."
    },
    {
      title: "Balance & Gait Disorders",
      description: "Especially relevant for older adults or those with neurological considerations."
    },
    {
      title: "Pre-Operative Optimization",
      description: "Preparing for surgery to improve outcomes."
    }
  ];

  return (
    <>
      <Head>
        <title>Conditions I Treat | KinetiKare Physiotherapy</title>
        <meta name="description" content="Comprehensive physiotherapy treatment for spinal health, sports injuries, chronic pain, post-surgical rehabilitation, and more. Expert care for all ages and activity levels in Burlington." />
        <meta name="keywords" content="physiotherapy conditions, back pain treatment, sports injury rehab, chronic pain management, post-surgical rehab, Burlington physiotherapy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#B08D57]/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 rounded-full border border-[#B08D57]/20 mb-8">
                  <SparklesIcon className="w-5 h-5 text-[#B08D57] mr-2" />
                  <span className="text-[#B08D57] font-semibold">Comprehensive Treatment Solutions</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-[0.9]">
                  Conditions I <span className="text-[#B08D57] relative">
                    Treat
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-4xl mx-auto mb-12">
                  My passion lies in helping people of all ages and activity levels overcome physical limitations, reduce pain, and achieve their movement goals.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl flex items-center justify-center mb-4">
                      <StarIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Athletes & Active Individuals</h3>
                    <p className="text-slate-600 text-sm">Peak performance and injury prevention</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#A17D47] to-[#B08D57] rounded-xl flex items-center justify-center mb-4">
                      <HeartIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Chronic Conditions</h3>
                    <p className="text-slate-600 text-sm">Long-term pain management and mobility</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#A17D47] rounded-xl flex items-center justify-center mb-4">
                      <ShieldCheckIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Recovery & Rehabilitation</h3>
                    <p className="text-slate-600 text-sm">Post-surgery and injury recovery</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Conditions Categories */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Comprehensive Assessment & Treatment
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                I commonly provide assessment and treatment for a comprehensive list of conditions. Here are some of the key areas I focus on:
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {conditionCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/60 hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{category.title}</h3>
                        <p className="text-slate-600 font-medium">{category.subtitle}</p>
                      </div>
                    </div>

                    {/* Conditions List */}
                    <div className="space-y-3">
                      {category.conditions.map((condition, conditionIndex) => (
                        <div key={conditionIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full mt-2.5 flex-shrink-0"></div>
                          <p className="text-slate-700 leading-relaxed">{condition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#B08D57]/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Specialized Treatment Programs
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Beyond specific conditions, I offer comprehensive care for complex cases and specialized rehabilitation needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-slate-200/60 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                      <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57] to-[#D4AF37]"></div>
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Start Your Recovery?
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
                  My goal is to provide exceptional physiotherapy services for residents of Burlington, Waterdown, and our surrounding communities, helping you find effective solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#B08D57] rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                  >
                    Book Your Assessment
                  </motion.a>
                  
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 text-lg"
                  >
                    Ask a Question
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 