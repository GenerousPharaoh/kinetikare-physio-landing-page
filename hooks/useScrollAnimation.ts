"use client";

import { useInView } from 'react-intersection-observer';
import { useAdaptiveAnimations } from './useDevicePerformance';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  yOffset?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const adaptiveSettings = useAdaptiveAnimations();

  const {
    threshold = 0,
    triggerOnce = true,
    delay = adaptiveSettings.animationDelay,
    duration = adaptiveSettings.animationDuration,
    yOffset = adaptiveSettings.animationDistance,
    rootMargin = '200px 0px 200px 0px' // Reasonable margin — not absurdly large
  } = options;

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  // Start fully visible to prevent flash-of-invisible-content on hydration.
  // The animation gently reveals once the element scrolls into view.
  const animationProps = adaptiveSettings.shouldReduceAnimations
    ? {
        // No animation at all for reduced-motion
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        transition: { duration: 0 }
      }
    : {
        initial: { opacity: 1, y: 0 },
        animate: inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: yOffset },
        transition: { duration, delay, ease: [0.22, 1, 0.36, 1] }
      };

  return { ref, animationProps, isInView: inView };
};

// Staggered animation for child elements
export const useStaggeredAnimation = (options: ScrollAnimationOptions = {}) => {
  const { ref, isInView } = useScrollAnimation(options);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: options.delay || 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: options.duration || 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return { ref, containerVariants, itemVariants, isInView };
};

// Helper hook specifically for sections
export function useSectionAnimation(options?: ScrollAnimationOptions) {
  return useScrollAnimation({
    rootMargin: '300px 0px 300px 0px',
    threshold: 0,
    duration: 0.5,
    yOffset: 10,
    ...options,
  });
}

// Animation variants for common patterns
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -16
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 16
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.97
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Container variants for staggered children
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05
    }
  }
};
