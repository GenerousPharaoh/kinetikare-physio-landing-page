import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  animate = true,
  delay = 0
}) => {
  const variants = {
    hidden: { 
      opacity: 0,
      y: 10
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay
      }
    }
  };

  return (
    <motion.div
      className={`bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-200/50 shadow-md p-6 ${className}`}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
      variants={animate ? variants : undefined}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard; 