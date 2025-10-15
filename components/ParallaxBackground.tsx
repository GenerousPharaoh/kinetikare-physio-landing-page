"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  // Different layers move at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 700]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.15, 0]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle gradient orbs that move with scroll */}
      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#B08D57]/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2, opacity: opacity1 }}
        className="absolute top-1/3 left-10 w-80 h-80 bg-gradient-to-br from-[#B08D57]/8 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y3, opacity: opacity1 }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-[#B08D57]/6 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
}
