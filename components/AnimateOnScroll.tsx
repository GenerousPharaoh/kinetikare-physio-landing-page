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
  threshold = 0.1,
  className = '',
  rootMargin = '0px 0px -5% 0px',
  duration = 800,
  once = true,
  disabled = false
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldDisableAnimation, setShouldDisableAnimation] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference or if explicitly disabled
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowPoweredDevice = typeof window !== 'undefined' && 
      ((window.innerWidth < 768) || 
      (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4));
    
    // Disable animations for users who prefer reduced motion or on low-powered devices
    setShouldDisableAnimation(disabled || prefersReducedMotion || isLowPoweredDevice);
    
    const element = elementRef.current;
    if (!element || shouldDisableAnimation) {
      if (element) {
        // If animations are disabled, ensure content is visible
        element.style.opacity = '1';
        element.style.transform = 'none';
      }
      return;
    }
    
    // Smoother starting state for animations
    element.style.opacity = '0.5';
    element.style.transition = `opacity ${duration}ms cubic-bezier(0.33, 1, 0.68, 1), transform ${duration}ms cubic-bezier(0.33, 1, 0.68, 1)`;
    element.style.transitionDelay = `${delay}ms`;
    
    // Use even gentler initial transforms for smoother animations
    switch (animation) {
      case 'fade-in':
        // Just fade, no movement
        break;
      case 'fade-in-up':
        element.style.transform = 'translateY(3px)';
        break;
      case 'fade-in-right':
        element.style.transform = 'translateX(-3px)';
        break;
      case 'fade-in-left':
        element.style.transform = 'translateX(3px)';
        break;
      case 'scale-in':
        element.style.transform = 'scale(0.995)';
        break;
      default:
        break;
    }
    
    // Create and configure IntersectionObserver with a higher threshold for smoother entry
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for better performance
            requestAnimationFrame(() => {
              // Add a tiny delay before animation to ensure smooth rendering
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'none';
                setIsVisible(true);
              }, 10);
            });
            
            if (once) {
              observer.disconnect();
            }
          } else if (!once && isVisible) {
            // Don't reset animations while scrolling to avoid jittery behavior
            const isScrolling = document.body.classList.contains('is-scrolling');
            if (!isScrolling) {
              element.style.opacity = '0.5';
              
              switch (animation) {
                case 'fade-in':
                  break;
                case 'fade-in-up':
                  element.style.transform = 'translateY(3px)';
                  break;
                case 'fade-in-right':
                  element.style.transform = 'translateX(-3px)';
                  break;
                case 'fade-in-left':
                  element.style.transform = 'translateX(3px)';
                  break;
                case 'scale-in':
                  element.style.transform = 'scale(0.995)';
                  break;
                default:
                  break;
              }
              
              setIsVisible(false);
            }
          }
        });
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [animation, delay, threshold, rootMargin, duration, once, isVisible, disabled, shouldDisableAnimation]);
  
  // Optimize for GPU acceleration without causing memory issues
  const accelerationStyles = isVisible || shouldDisableAnimation
    ? {}
    : {
        willChange: 'opacity, transform',
        backfaceVisibility: 'hidden' as const,
        transform: 'translateZ(0)',
      };
  
  // If animations are disabled, render without animation styles
  if (shouldDisableAnimation) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <div 
      ref={elementRef} 
      className={className} 
      style={accelerationStyles}
      data-animate-on-scroll
      data-animation-type={animation}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll; 