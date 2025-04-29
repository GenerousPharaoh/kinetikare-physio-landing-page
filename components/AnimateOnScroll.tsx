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
  stagger?: boolean;
  staggerChildren?: string;
  staggerDelay?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.01,
  className = '',
  rootMargin = '0px 0px -10% 0px',
  duration = 400,
  once = true,
  disabled = false,
  stagger = false,
  staggerChildren = '[data-stagger]',
  staggerDelay = 50
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldDisableAnimation, setShouldDisableAnimation] = useState(false);
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowPoweredDevice = typeof window !== 'undefined' && (
      window.matchMedia('(max-width: 1024px)').matches || 
      (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4) ||
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
    
    void element.offsetHeight;
    
    element.style.willChange = 'opacity, transform';
    
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms cubic-bezier(0.2, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.2, 0, 0.2, 1)`;
    element.style.transitionDelay = `${delay}ms`;
    
    switch (animation) {
      case 'fade-in':
        element.style.transform = 'none';
        break;
      case 'fade-in-up':
        element.style.transform = 'translateY(10px)';
        break;
      case 'fade-in-right':
        element.style.transform = 'translateX(-10px)';
        break;
      case 'fade-in-left':
        element.style.transform = 'translateX(10px)';
        break;
      case 'scale-in':
        element.style.transform = 'scale(0.98)';
        break;
      default:
        element.style.transform = 'translateY(10px)';
        break;
    }
    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              element.style.opacity = '1';
              element.style.transform = 'none';
              setIsVisible(true);
              
              if (stagger && staggerChildren) {
                const childElements = element.querySelectorAll(staggerChildren);
                childElements.forEach((child, index) => {
                  if (child instanceof HTMLElement) {
                    child.style.willChange = 'opacity, transform';
                    
                    child.style.opacity = '0';
                    child.style.transition = `opacity ${duration * 0.8}ms cubic-bezier(0.2, 0, 0.2, 1), transform ${duration * 0.8}ms cubic-bezier(0.2, 0, 0.2, 1)`;
                    
                    switch (animation) {
                      case 'fade-in':
                        break;
                      case 'fade-in-up':
                        child.style.transform = 'translateY(8px)';
                        break;
                      case 'fade-in-right':
                        child.style.transform = 'translateX(-8px)';
                        break;
                      case 'fade-in-left':
                        child.style.transform = 'translateX(8px)';
                        break;
                      case 'scale-in':
                        child.style.transform = 'scale(0.98)';
                        break;
                      default:
                        child.style.transform = 'translateY(8px)';
                        break;
                    }
                    
                    child.style.transitionDelay = `${delay + (index * staggerDelay)}ms`;
                    requestAnimationFrame(() => {
                      child.style.opacity = '1';
                      child.style.transform = 'none';
                    });
                  }
                });
              }
              
              if (once) {
                observer.unobserve(entry.target);
                setTimeout(() => {
                  if (element) {
                    element.style.willChange = 'auto';
                  }
                }, duration + delay + 100);
              }
            });
          }
        });
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [animation, delay, threshold, rootMargin, duration, once, disabled, shouldDisableAnimation, stagger, staggerChildren, staggerDelay]);
  
  if (shouldDisableAnimation) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <div 
      ref={elementRef} 
      className={className} 
      aria-hidden={typeof children === 'string' ? 'false' : undefined}
      style={{ perspective: '1000px' }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll; 