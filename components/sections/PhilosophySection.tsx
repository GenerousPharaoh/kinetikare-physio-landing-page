"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaUserMd, FaChartLine, FaHeartbeat } from 'react-icons/fa';

const PhilosophySection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const philosophyPoints = [
    {
      icon: <FaUserMd className="text-4xl text-accent-400" />,
      title: "Patient-Centered Care",
      description: "Your needs and goals are at the center of every treatment plan. I listen carefully to understand your unique situation and tailor my approach accordingly."
    },
    {
      icon: <FaLeaf className="text-4xl text-accent-400" />,
      title: "Holistic Approach",
      description: "I consider all aspects of your health, lifestyle, and environment to address not just symptoms but underlying causes for long-term recovery and wellness."
    },
    {
      icon: <FaChartLine className="text-4xl text-accent-400" />,
      title: "Evidence-Based Practice",
      description: "My treatments combine the latest research with clinical expertise, ensuring you receive the most effective and scientifically-supported interventions."
    },
    {
      icon: <FaHeartbeat className="text-4xl text-accent-400" />,
      title: "Active Rehabilitation",
      description: "I believe in empowering you with the knowledge and tools to take an active role in your recovery, focusing on sustainable health improvements."
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-primary-50/50 -skew-x-12 transform origin-top-right" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-primary-50/30 -skew-x-12 transform origin-bottom-left" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Treatment Philosophy</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            My approach combines evidence-based techniques with personalized care to help you achieve optimal physical health and wellbeing.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {philosophyPoints.map((point, index) => {
            // Clone the icon element to add aria-hidden attribute
            const IconWithHidden = React.cloneElement(point.icon, { "aria-hidden": "true" });
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-lg p-6 shadow-lg border border-primary-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{IconWithHidden}</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{point.title}</h3>
                    <p className="text-primary-700">{point.description}</p>
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-primary-900 text-white rounded-xl p-8 shadow-xl"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">My Commitment to You</h3>
            <p className="mb-6 text-primary-100">
              As your physiotherapist, I am committed to providing the highest standard of care with integrity and compassion. I continuously update my skills and knowledge to offer you the most effective treatment options available. My goal is to help you not just recover from injury, but to thrive and achieve your full physical potential.
            </p>
            <div className="flex justify-center">
              <a 
                href="/about" 
                className="inline-block bg-white text-primary-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
