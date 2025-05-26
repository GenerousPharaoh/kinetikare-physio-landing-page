"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ConditionsSection() {
  const conditionCategories = [
    {
      title: "Spinal Health",
      subtitle: "Neck, Mid-Back & Low Back",
      icon: <ShieldCheckIcon className="w-6 h-6" />,
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
      subtitle: "Comprehensive shoulder care",
      icon: <AcademicCapIcon className="w-6 h-6" />,
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
      icon: <HeartIcon className="w-6 h-6" />,
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
      icon: <UserGroupIcon className="w-6 h-6" />,
      conditions: [
        "Hip Pain (e.g., Bursitis, Gluteal Tendinopathy, Impingement (FAI))",
        "Piriformis Syndrome",
        "Sacroiliac (SI) Joint Dysfunction",
        "Groin Strains"
      ]
    },
    {
      title: "Knee Conditions",
      subtitle: "From sports injuries to arthritis",
      icon: <ShieldCheckIcon className="w-6 h-6" />,
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
      icon: <HeartIcon className="w-6 h-6" />,
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
    <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden" id="conditions">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#B08D57]/3 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/3 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Conditions <span className="text-[#B08D57] relative">
                I Treat
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-slate-600 leading-relaxed font-light mb-6">
                My passion lies in helping people of all ages and activity levels overcome physical limitations, reduce pain, and achieve their movement goals.
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/60">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Whether you're an <span className="font-semibold text-[#B08D57]">athlete striving for peak condition</span>; someone <span className="font-semibold text-slate-800">managing a chronic condition or persistent pain</span>; <span className="font-semibold text-slate-800">recovering from an injury or surgery</span>; an <span className="font-semibold text-slate-800">office worker experiencing discomfort</span>; a <span className="font-semibold text-slate-800">senior aiming to enhance functional independence</span> and maintain safety in your daily life; or simply <span className="font-semibold text-[#B08D57]">aiming to enhance your overall physical well-being</span> and functional independence, my practice is here to support you.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              I commonly provide assessment and treatment for a comprehensive list of conditions. Here are some of the key areas I focus on:
            </p>
          </motion.div>

          {/* Conditions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {conditionCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/60 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#A17D47] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{category.title}</h3>
                    <p className="text-sm text-slate-500 font-medium">{category.subtitle}</p>
                  </div>
                </div>

                {/* Conditions List */}
                <ul className="space-y-3">
                  {category.conditions.map((condition, conditionIndex) => (
                    <motion.li
                      key={conditionIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: (index * 0.1) + (conditionIndex * 0.05)
                      }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 text-slate-700"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{condition}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Specialized Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-[2rem] p-12 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
            
            {/* Floating Elements */}
            <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-6 left-6 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  General Orthopedic & Systemic Conditions
                </h3>
                <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
                  Comprehensive care for complex conditions requiring specialized expertise
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specializedServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold mb-3 text-white">{service.title}</h4>
                    <p className="text-white/85 text-sm leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-12 shadow-2xl border border-slate-200/60 max-w-4xl mx-auto">
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                My goal is to provide <span className="font-bold text-[#B08D57]">exceptional physiotherapy services</span> for residents of{" "}
                <span className="font-semibold text-slate-800">Burlington, Waterdown, and our surrounding communities</span>, helping you find effective solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 