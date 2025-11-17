"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'line' | 'gradient' | 'dots';
}

export default function SectionDivider({ variant = 'gradient' }: SectionDividerProps) {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (variant === 'line') {
    return (
      <div className="relative h-px w-full max-w-3xl mx-auto my-16">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-[#B08D57]/20 to-transparent"
          style={{ width }}
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="relative flex justify-center items-center gap-2 my-16">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#B08D57]/40"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-[#B08D57]/60"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        />
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#B08D57]/40"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        />
      </div>
    );
  }

  // Default: gradient
  return (
    <div className="relative h-24 overflow-visible flex items-center my-8">
      <div className="absolute left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#B08D57]/15 to-transparent" />
    </div>
  );
}
