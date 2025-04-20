"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaLeaf, FaChartLine, FaHeartbeat } from 'react-icons/fa';

const PhilosophySection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  const philosophyPoints = [
    {
      icon: <FaUserMd />,
      title: "Patient-Centered Care",
      description: "Your needs and goals are at the center of every treatment plan. I listen carefully to understand your unique situation and tailor my approach accordingly."
    },
    {
      icon: <FaLeaf />,
      title: "Holistic Approach",
      description: "I consider all aspects of your health, lifestyle, and environment to address not just symptoms but underlying causes for long-term recovery and wellness."
    },
    {
      icon: <FaChartLine />,
      title: "Evidence-Based Practice",
      description: "My treatments combine the latest research with clinical expertise, ensuring you receive the most effective and scientifically-supported interventions."
    },
    {
      icon: <FaHeartbeat />,
      title: "Active Rehabilitation",
      description: "I believe in empowering you with the knowledge and tools to take an active role in your recovery, focusing on sustainable health improvements."
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5 pattern-dots" aria-hidden="true"></div>
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/40 to-transparent" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-white/40 to-transparent" aria-hidden="true"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-primary-50/30 -skew-x-12 transform origin-bottom-right" aria-hidden="true"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-[80px]" aria-hidden="true"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-primary-100/10 blur-[100px]" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Treatment Philosophy</h2>
            <div className="w-20 h-px bg-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              My approach combines evidence-based techniques with personalized care to 
              help you achieve optimal physical health and wellbeing.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {philosophyPoints.map((point, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="themed-card p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <div className="mr-5 flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {React.cloneElement(point.icon, { 
                        className: "w-7 h-7",
                        "aria-hidden": "true"
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">{point.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-100 to-primary-200 text-primary-800 rounded-xl p-10 md:p-12 shadow-xl relative overflow-hidden"
        >
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-10 texture-noise"></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center">My Commitment to You</h3>
            <div className="w-16 h-px bg-accent/60 mx-auto mb-8"></div>
            <p className="mb-6 text-primary-700 leading-relaxed">
              As your physiotherapist, I am committed to providing the highest standard of care with integrity and compassion. I continuously update my skills and knowledge to offer you the most effective treatment options available.
            </p>
            <p className="text-primary-700 leading-relaxed">
              My goal is to help you not just recover from injury, but to thrive and achieve your full physical potential.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
