'use client';

import React, { Suspense, memo } from 'react';
import dynamic from 'next/dynamic';

// Critical UI component loaded eagerly
import Header from '@/components/Header';
import ClientBackgroundWrapper from '@/components/ClientBackgroundWrapper';

// Other components loaded with improved chunking strategy
const Footer = dynamic(() => import('@/components/Footer'), { 
  loading: () => <footer className="pt-8 pb-6 bg-primary-900 text-white"></footer>
});

// Less critical UI components loaded lazily with explicit chunk names
const FloatingButtons = dynamic(() => import('@/components/FloatingButtons'), { 
  loading: () => null
});

const FloatingCTA = dynamic(() => import('@/components/FloatingCTA'), { 
  loading: () => null
});

const MobileBottomNav = dynamic(() => import('@/components/MobileBottomNav'), { 
  loading: () => null
});

// Lowest priority components
const ClientOnly = dynamic(() => import('@/components/ClientOnly'), { 
  loading: () => null
});

type ClientComponentsWrapperProps = {
  children: React.ReactNode;
};

// Using memo to prevent unnecessary re-renders of the wrapper
const ClientComponentsWrapper = memo(function ClientComponentsWrapper({ children }: ClientComponentsWrapperProps) {
  return (
    <>
      <ClientBackgroundWrapper />
      <Header />
      
      <div className="main-content-wrapper bg-transparent">
        <main id="main-content" className="min-h-screen flex flex-col overflow-x-hidden pt-16 xs:pt-20 bg-transparent">
          {children}
        </main>
        
        <Suspense fallback={<div className="py-16"></div>}>
          <Footer />
        </Suspense>
      </div>
      
      <Suspense fallback={null}>
        <FloatingCTA />
      </Suspense>
      
      <Suspense fallback={null}>
        <FloatingButtons />
      </Suspense>
      
      <Suspense fallback={null}>
        <MobileBottomNav />
      </Suspense>
      
      <Suspense fallback={null}>
        <ClientOnly>
          {process.env.NODE_ENV === 'production' && <div id="performance-optimizer"></div>}
          {process.env.NODE_ENV === 'development' && <div id="accessibility-checker"></div>}
        </ClientOnly>
      </Suspense>
    </>
  );
});

export default ClientComponentsWrapper; 