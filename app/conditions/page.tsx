"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function ConditionsPage() {
  const conditionCategories = [
    {
      title: "Spinal Health",
      subtitle: "Neck, Mid-Back & Low Back",
      accent: "#B08D57",
      gradient: "from-[#B08D57]/20 via-[#D4AF37]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent",
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
      accent: "#A17D47",
      gradient: "from-[#A17D47]/20 via-[#B08D57]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#A17D47] to-[#B08D57] bg-clip-text text-transparent",
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
      subtitle: "Upper extremity focus",
      accent: "#D4AF37",
      gradient: "from-[#D4AF37]/20 via-[#B08D57]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent",
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
      accent: "#B08D57",
      gradient: "from-[#B08D57]/20 via-[#A17D47]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#B08D57] to-[#A17D47] bg-clip-text text-transparent",
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
      accent: "#A17D47",
      gradient: "from-[#A17D47]/20 via-[#D4AF37]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#A17D47] to-[#D4AF37] bg-clip-text text-transparent",
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
      accent: "#D4AF37",
      gradient: "from-[#D4AF37]/20 via-[#A17D47]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#D4AF37] to-[#A17D47] bg-clip-text text-transparent",
      conditions: [
        "Ankle Sprains",
        "Plantar Fasciitis & Heel Spurs",
        "Achilles Tendinopathy / Tendinitis",
        "Shin Splints (Medial Tibial Stress Syndrome)",
        "Peroneal Tendinopathy"
      ]
    }
  ];

  const additionalServices = [
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

  const clientTypes = [
    {
      title: "Athletes & Active Individuals",
      description: "Peak performance and injury prevention",
      pattern: "dots"
    },
    {
      title: "Chronic Conditions",
      description: "Long-term pain management and mobility",
      pattern: "lines"
    },
    {
      title: "Recovery & Rehabilitation",
      description: "Post-surgery and injury recovery",
      pattern: "waves"
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
      
      <main className="min-h-screen bg-white">
        {/* Hero Section - Redesigned */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
          {/* Sophisticated background patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, #B08D57 2px, transparent 2px)`,
              backgroundSize: '40px 40px'
            }}></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#B08D57]/5 to-transparent blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#D4AF37]/5 to-transparent blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-20"
              >
                {/* Premium badge */}
                <div className="inline-flex items-center mb-8">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B08D57]"></div>
                  <span className="mx-4 text-[#B08D57] font-medium tracking-wider text-sm uppercase">Comprehensive Treatment Solutions</span>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B08D57]"></div>
                </div>
                
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 tracking-tight leading-[0.85]">
                  <span className="block">Conditions</span>
                  <span className="block text-slate-600 font-light italic">I Treat</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-4xl mx-auto">
                  My passion lies in helping people of all ages and activity levels overcome physical limitations, reduce pain, and achieve their movement goals.
                </p>
              </motion.div>

              {/* Client types - New creative layout */}
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {clientTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative"
                  >
                    <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-[#B08D57]/10">
                      {/* Creative pattern backgrounds */}
                      <div className="absolute top-4 right-4 w-12 h-12 opacity-10">
                        {type.pattern === 'dots' && (
                          <div className="w-full h-full" style={{
                            backgroundImage: `radial-gradient(circle, #B08D57 1px, transparent 1px)`,
                            backgroundSize: '6px 6px'
                          }}></div>
                        )}
                        {type.pattern === 'lines' && (
                          <div className="w-full h-full" style={{
                            backgroundImage: `linear-gradient(45deg, #B08D57 1px, transparent 1px)`,
                            backgroundSize: '4px 4px'
                          }}></div>
                        )}
                        {type.pattern === 'waves' && (
                          <svg viewBox="0 0 48 48" className="w-full h-full fill-[#B08D57]">
                            <path d="M0,20 Q12,10 24,20 T48,20 V48 H0 Z" opacity="0.5"/>
                            <path d="M0,30 Q12,20 24,30 T48,30 V48 H0 Z" opacity="0.3"/>
                          </svg>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{type.description}</p>
                      
                      {/* Hover accent */}
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Categories - Completely new design */}
        <section className="py-32 relative bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Comprehensive Assessment<br />
                <span className="text-slate-600 font-light">& Treatment</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                I commonly provide assessment and treatment for a comprehensive list of conditions. Here are some of the key areas I focus on:
              </p>
            </motion.div>

            {/* Revolutionary card design */}
            <div className="space-y-16 max-w-7xl mx-auto">
              {conditionCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.0, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`group relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-12`}
                >
                  {/* Content Side */}
                  <div className="flex-1 lg:max-w-md">
                    <div className="relative">
                      <div className="relative z-10">
                        <h3 className={`text-3xl font-bold mb-3 ${category.textGradient}`}>
                          {category.title}
                        </h3>
                        <p className="text-slate-600 font-medium text-lg mb-6">{category.subtitle}</p>
                        
                        {/* Elegant line separator */}
                        <div className="w-16 h-0.5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mb-6 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Conditions List Side */}
                  <div className="flex-1">
                    <div className="relative bg-gradient-to-br from-white to-slate-50/50 rounded-3xl p-8 border border-slate-200/30 shadow-lg hover:shadow-xl transition-all duration-700 group-hover:border-[#B08D57]/20">
                      {/* Subtle background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                      
                      <div className="relative z-10 grid gap-3">
                        {category.conditions.map((condition, conditionIndex) => (
                          <motion.div
                            key={conditionIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: conditionIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="group/item"
                          >
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 hover:border-[#B08D57]/30 hover:bg-white transition-all duration-300 hover:shadow-md">
                              <div className="flex items-start space-x-3">
                                {/* Enhanced bullet */}
                                <div className="mt-1.5 relative flex-shrink-0">
                                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] transform group-hover/item:scale-125 transition-transform duration-300"></div>
                                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] blur-sm opacity-0 group-hover/item:opacity-50 transition-opacity duration-300"></div>
                                </div>
                                
                                <div className="flex-1">
                                  {/* Extract main condition name */}
                                  {(() => {
                                    const parts = condition.split('(');
                                    const mainCondition = parts[0].trim();
                                    const details = parts.length > 1 ? `(${parts.slice(1).join('(')}` : '';
                                    
                                    return (
                                      <>
                                        <h4 className="font-bold text-slate-900 text-base leading-tight group-hover/item:text-[#B08D57] transition-colors duration-300">
                                          {mainCondition}
                                        </h4>
                                        {details && (
                                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                            {details}
                                          </p>
                                        )}
                                      </>
                                    );
                                  })()}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services - Reimagined */}
        <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-[#B08D57]/3 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-[#D4AF37]/3 to-transparent blur-3xl"></div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
                Additional<br />
                <span className="bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">
                  Treatment Areas
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Beyond specific conditions, I offer comprehensive care for complex cases and additional rehabilitation needs.
              </p>
            </motion.div>

            {/* Grid layout with creative numbering */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-3xl p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-500 h-full hover:border-[#B08D57]/30 hover:-translate-y-1">
                    {/* Number badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    
                    <div className="relative z-10 pt-4">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#B08D57] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Enhanced hover accent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57] via-[#D4AF37] to-[#B08D57]"></div>
          <div className="absolute inset-0 bg-black/5"></div>
          
          {/* Sophisticated pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Ready to Start<br />
                  Your Recovery?
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
                  My goal is to provide exceptional physiotherapy services for residents of Burlington, Waterdown, and our surrounding communities, helping you find effective solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#B08D57] rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg group"
                  >
                    Book Your Assessment
                    <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
                  </motion.a>
                  
                  <motion.a
                    href="/#contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 text-lg"
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