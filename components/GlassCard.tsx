import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
  variant?: 'white' | 'light' | 'navy';
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  animate = true,
  delay = 0,
  variant = 'white'
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
  
  // Card variants for different background styles
  const cardVariants = {
    white: "bg-white border border-neutral-100 shadow-sm",
    light: "bg-[#F7F7F5] border border-neutral-100/50 shadow-sm",
    navy: "bg-[#1A1F36] text-white border border-[#1A1F36]/80 shadow-md"
  };

  return (
    <motion.div
      className={`rounded-lg p-6 ${cardVariants[variant]} ${className}`}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
      variants={animate ? variants : undefined}
    >
      {variant === 'navy' && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37]"></div>
      )}
      {children}
    </motion.div>
  );
};

export default GlassCard; 