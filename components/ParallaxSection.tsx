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

  // Create very subtle parallax effect based on speed
  const y = useTransform(scrollYProgress, [0, 1], [20 * (1 - speed), -20 * (1 - speed)]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ y }}
        transition={{ type: "tween", ease: "linear" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
