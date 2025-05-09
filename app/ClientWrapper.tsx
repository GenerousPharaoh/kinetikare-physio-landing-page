"use client";

// Import React 19 compatibility patch first
import '../components/react19-compat';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/CookieBanner';
import { AnimatePresence } from 'framer-motion';
import MobileNav from '@/components/layout/MobileNav';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <div key={pathname}>
          {children}
        </div>
      </AnimatePresence>
      <Footer />
      <MobileNav />
      <CookieBanner />
    </>
  );
};

export default ClientWrapper; 