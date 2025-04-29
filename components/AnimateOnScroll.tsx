"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: 
    'fade-in' | 
    'fade-in-up' | 
    'fade-in-right' | 
    'fade-in-left' | 
    'scale-in';
  delay?: number;
  threshold?: number;
  className?: string;
  rootMargin?: string;
  duration?: number;
  once?: boolean;
  disabled?: boolean;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.05,
  className = '',
  rootMargin = '0px 0px -2% 0px',
  duration = 400,
  once = true,
  disabled = false
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldDisableAnimation, setShouldDisableAnimation] = useState(false);
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowPoweredDevice = typeof window !== 'undefined' && (
      window.matchMedia('(max-width: 1024px)').matches || 
      (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 6) ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
    
    setShouldDisableAnimation(disabled || prefersReducedMotion || isLowPoweredDevice);
    
    const element = elementRef.current;
    if (!element || shouldDisableAnimation) {
      if (element) {
        element.style.opacity = '1';
        element.style.transform = 'none';
      }
      return;
    }
    
    element.style.opacity = '1';
    element.style.transition = `transform ${duration}ms ease-out`;
    element.style.transitionDelay = `${delay}ms`;
    
    switch (animation) {
      case 'fade-in':
        break;
      case 'fade-in-up':
        element.style.transform = 'translateY(5px)';
        break;
      case 'fade-in-right':
        element.style.transform = 'translateX(-5px)';
        break;
      case 'fade-in-left':
        element.style.transform = 'translateX(5px)';
        break;
      case 'scale-in':
        element.style.transform = 'scale(0.98)';
        break;
      default:
        break;
    }
    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
              element.style.transform = 'none';
              setIsVisible(true);
            
              if (once) {
                observer.unobserve(entry.target);
              }
          }
        });
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [animation, delay, threshold, rootMargin, duration, once, disabled, shouldDisableAnimation]);
  
  if (shouldDisableAnimation) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <div 
      ref={elementRef} 
      className={className} 
      aria-hidden={typeof children === 'string' ? 'false' : undefined}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll; 