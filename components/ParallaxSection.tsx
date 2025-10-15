"use client";

import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // Multiplier for parallax effect (0.5 = slower, 1.5 = faster)
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 1,
  className = ''
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create parallax effect based on speed
  const y = useTransform(scrollYProgress, [0, 1], [100 * (1 - speed), -100 * (1 - speed)]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ y, opacity }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
