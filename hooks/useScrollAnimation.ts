"use client";

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  yOffset?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0,
    triggerOnce = true,
    delay = 0,
    duration = 0.6,
    yOffset = 20,
    rootMargin = '1000px 0px 1000px 0px' // Super aggressive - trigger way before elements are near viewport
  } = options;

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  const animationProps = {
    initial: { opacity: 0, y: yOffset },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset },
    transition: { duration, delay, ease: "easeOut" }
  };

  return { ref, animationProps, isInView: inView };
};

// Staggered animation for child elements
export const useStaggeredAnimation = (options: ScrollAnimationOptions = {}) => {
  const { ref, isInView } = useScrollAnimation(options);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: options.delay || 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: options.duration || 0.5,
        ease: "easeOut"
      }
    }
  };

  return { ref, containerVariants, itemVariants, isInView };
};

// Helper hook specifically for sections
export function useSectionAnimation(options?: ScrollAnimationOptions) {
  return useScrollAnimation({
    rootMargin: '2000px 0px 2000px 0px', // Extremely aggressive for sections
    threshold: 0,
    duration: 0.6,
    yOffset: 10, // Reduced offset for subtler animation
    ...options,
  });
}

// Animation variants for common patterns
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20 // Reduced from 30 to 20 for subtler movement
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3, // Reduced from 0.6 to 0.3
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -20 // Reduced from -30 to -20
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 20 // Reduced from 30 to 20
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 // Reduced from 0.9 to 0.95 for subtler scaling
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Container variants for staggered children
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // Reduced from 0.1 to 0.05
      delayChildren: 0.05 // Reduced from 0.1 to 0.05
    }
  }
}; 