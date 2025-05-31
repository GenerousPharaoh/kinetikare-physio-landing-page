"use client";

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationOptions {
  yOffset?: number;
  delay?: number;
  duration?: number;
  ease?: string;
  rootMargin?: string;
  threshold?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    yOffset = 50,
    delay = 0,
    duration = 0.6,
    ease = "easeOut",
    rootMargin = '0px 0px 200px 0px', // Trigger 200px before element enters viewport
    threshold = 0.01 // Only need 1% of element visible to trigger
  } = options;

  const { ref, inView: isInView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: rootMargin, // Trigger animations well before elements are visible
  });

  const animationProps = {
    initial: { opacity: 0, y: yOffset },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset },
    transition: { duration, delay, ease }
  };

  return { ref, animationProps, isInView };
};

interface StaggeredAnimationOptions {
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  threshold?: number;
  rootMargin?: string;
}

export const useStaggeredAnimation = (options: StaggeredAnimationOptions = {}) => {
  const {
    delay = 0,
    duration = 0.6,
    staggerDelay = 0.1,
    threshold = 0.01, // Very low threshold for early triggering
    rootMargin = '0px 0px 150px 0px' // Trigger 150px before visible
  } = options;

  const { ref, inView: isInView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: "easeOut" },
    },
  };

  return { ref, containerVariants, itemVariants, isInView };
};

// Helper hook specifically for sections - even more aggressive early triggering
export function useSectionAnimation(options?: Omit<ScrollAnimationOptions, 'rootMargin'>) {
  return useScrollAnimation({
    rootMargin: '0px 0px 300px 0px', // Trigger 300px before section is visible
    threshold: 0.01, // Very low threshold
    duration: 0.6,
    yOffset: 30,
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