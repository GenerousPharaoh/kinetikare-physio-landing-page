"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SplitTextProps = {
  children: string;
  className?: string;
  type?: 'words' | 'chars' | 'lines';
  duration?: number;
  staggerChildren?: number;
  delay?: number;
  ease?: number[];
  animation?: 'fadeUp' | 'fadeIn' | 'scale' | 'rotateIn' | 'slideIn';
  once?: boolean;
  threshold?: number;
};

/**
 * An elegant text animation component that splits text into individual 
 * characters, words, or lines and animates them with precision.
 * 
 * @example
 * <SplitText type="chars" animation="fadeUp">
 *   Animate each character
 * </SplitText>
 */
const SplitText: React.FC<SplitTextProps> = ({
  children,
  className = '',
  type = 'chars',
  duration = 0.6,
  staggerChildren = 0.03,
  delay = 0.1,
  ease = [0.19, 1, 0.22, 1], // Elegant exponential ease
  animation = 'fadeUp',
  once = true,
  threshold = 0.2,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  });
  
  // Basic animation variants collection
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    rotateIn: {
      hidden: { opacity: 0, rotateY: 90 },
      visible: { opacity: 1, rotateY: 0 },
    },
    slideIn: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
  };
  
  // Animation container variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };
  
  // Child element variants
  const childVariants: Variants = {
    hidden: animations[animation].hidden,
    visible: {
      ...animations[animation].visible,
      transition: {
        duration,
        ease,
      },
    },
  };
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);
  
  const renderContent = () => {
    const text = children.toString();
    
    if (type === 'words') {
      return text.split(' ').map((word, i) => (
        <motion.span
          key={`word-${i}`}
          className="inline-block overflow-hidden"
          variants={containerVariants}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          <motion.span 
            className="inline-block"
            variants={childVariants}
          >
            {word}
          </motion.span>
          {i !== text.split(' ').length - 1 && ' '}
        </motion.span>
      ));
    }
    
    if (type === 'chars') {
      return text.split('').map((char, i) => (
        <motion.span
          key={`char-${i}`}
          className="inline-block"
          variants={childVariants}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    }
    
    if (type === 'lines') {
      return text.split('\n').map((line, i) => (
        <React.Fragment key={`line-${i}`}>
          <div className="overflow-hidden">
            <motion.div 
              className="inline-block"
              variants={childVariants}
            >
              {line}
            </motion.div>
          </div>
          {i !== text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ));
    }
    
    return text;
  };
  
  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      aria-label={children.toString()}
    >
      {renderContent()}
    </motion.span>
  );
};

export default SplitText; 