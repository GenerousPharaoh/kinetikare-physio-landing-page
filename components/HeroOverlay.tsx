'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function HeroOverlay() {
  const trustPoints = [
    { icon: ShieldCheckIcon, text: "Direct Billing Available" },
    { icon: ClockIcon, text: "Evening & Weekend Hours" },
    { icon: CheckCircleIcon, text: "MSc PT, CAMPT Certified" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="absolute top-4 left-0 right-0 z-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 + index * 0.1 }}
              className="flex items-center gap-2 text-white/90"
            >
              <point.icon className="h-5 w-5 text-[#D4AF37]" />
              <span className="text-sm font-medium">{point.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}