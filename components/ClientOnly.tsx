'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import client-only components with no SSR
const PerformanceOptimizer = dynamic(() => import('@/components/PerformanceOptimizer'), { 
  ssr: false,
  loading: () => null // Prevent flash during loading
});
const AccessibilityChecker = dynamic(() => import('@/components/AccessibilityChecker'), { 
  ssr: false,
  loading: () => null // Prevent flash during loading
});

type ClientOnlyProps = {
  children?: React.ReactNode;
};

const ClientOnly = ({ children }: ClientOnlyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to prevent flickering during hydration
    const timer = requestAnimationFrame(() => {
    setIsMounted(true);
    });
    
    return () => cancelAnimationFrame(timer);
  }, []);

  // Always return null on server-side to prevent hydration mismatches
  if (typeof window === 'undefined' || !isMounted) {
    return null;
  }

  // Replace the placeholder divs with actual components
  const childrenArray = Array.isArray(children) ? children : [children];
  
  return (
    <>
      {childrenArray.map((child, i) => {
        if (!child) return null;
        
        if (typeof child === 'object' && 'props' in child && child.props.id === 'performance-optimizer') {
          return <PerformanceOptimizer key={i} />;
        }
        
        if (typeof child === 'object' && 'props' in child && child.props.id === 'accessibility-checker') {
          return <AccessibilityChecker key={i} />;
        }
        
        return child;
      })}
    </>
  );
};

export default ClientOnly; 