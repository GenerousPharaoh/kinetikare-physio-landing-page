"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRunning, FaHeartbeat, FaBone, FaSpa } from 'react-icons/fa';
import { BsShieldPlus } from 'react-icons/bs';
import Image from 'next/image';

// Define conditions with titles, descriptions, and images
const conditions = {
  common: [
    {
      title: "Back Pain",
      description: "Expert treatment for chronic and acute back pain through targeted manual therapy and exercise prescription.",
    },
    {
      title: "Sports Injuries",
      description: "Comprehensive rehabilitation for athletes of all levels, focusing on rapid recovery and performance optimization.",
    },
    {
      title: "Joint Pain",
      description: "Effective management of joint pain and stiffness using evidence-based physiotherapy approaches.",
    },
    {
      title: "Muscle Strains",
      description: "Targeted treatment to repair muscle damage and restore optimal function through progressive rehabilitation.",
    }
  ],
  additional: [
    {
      title: "Post-Surgical Rehabilitation",
      description: "Customized recovery programs designed to optimize healing and restore function following surgical procedures.",
    },
    {
      title: "Neurological Conditions",
      description: "Comprehensive physiotherapy for stroke recovery, Parkinson's, and other neurological disorders.",
    },
    {
      title: "Chronic Pain Management",
      description: "Comprehensive approach to managing persistent pain through education, manual therapy, and focused exercise.",
    },
    {
      title: "Balance & Vestibular Issues",
      description: "Treatment for vertigo, dizziness, and balance disorders to improve stability and prevent falls.",
    }
  ],
  preventive: [
    {
      title: "Posture Correction",
      description: "Assessment and correction of postural dysfunctions to prevent pain and improve biomechanical efficiency.",
    },
    {
      title: "Workplace Ergonomics",
      description: "Optimization of work environments to prevent repetitive strain injuries and promote healthy movement patterns.",
    },
    {
      title: "Fall Prevention",
      description: "Comprehensive programs for older adults to improve balance, strength, and confidence to reduce fall risk.",
    },
    {
      title: "Athletic Performance",
      description: "Movement analysis and advanced training to enhance athletic performance and prevent injuries.",
    }
  ]
};

const ConditionsSection = () => {
  const [activeTab, setActiveTab] = useState('common');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="conditions" className="relative overflow-hidden py-20 bg-neutral-50 text-primary-700">
      {/* Decorative elements - replaced with subtle geometric shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-100/30 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary-100/20 blur-xl"></div>
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-accent-500/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">Treatment Areas</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            My treatment approach is backed by years of clinical experience and evidence-based practices to address a wide range of conditions.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-primary-200">
          <button 
            onClick={() => setActiveTab('common')}
            className={`px-6 py-3 text-lg font-medium transition flex items-center 
              ${activeTab === 'common' 
                ? 'text-primary-700 border-b-2 border-primary-500' 
                : 'text-primary-500 hover:text-primary-700'}`}
          >
            <FaRunning className="mr-2" /> Common Conditions
          </button>
          <button 
            onClick={() => setActiveTab('additional')}
            className={`px-6 py-3 text-lg font-medium transition flex items-center 
              ${activeTab === 'additional' 
                ? 'text-primary-700 border-b-2 border-primary-500' 
                : 'text-primary-500 hover:text-primary-700'}`}
          >
            <FaSpa className="mr-2" /> Additional Services
          </button>
          <button 
            onClick={() => setActiveTab('preventive')}
            className={`px-6 py-3 text-lg font-medium transition flex items-center 
              ${activeTab === 'preventive' 
                ? 'text-primary-700 border-b-2 border-primary-500' 
                : 'text-primary-500 hover:text-primary-700'}`}
          >
            <BsShieldPlus className="mr-2" /> Preventive Care
          </button>
        </div>

        {/* Conditions Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {conditions[activeTab as keyof typeof conditions].map((condition, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-primary-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group p-5"
            >
              <div className="">
                <h3 className="text-xl font-bold text-primary-700 mb-2">{condition.title}</h3>
                <p className="text-primary-600">{condition.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-accent-dark transition-all duration-300 transform hover:-translate-y-1"
          >
            Book a Consultation
          </a>
          <p className="text-primary-500 mt-4">
            Not sure if I can help with your condition? Contact me for a free 15-minute consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConditionsSection; 