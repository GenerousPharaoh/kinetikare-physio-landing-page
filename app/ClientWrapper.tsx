'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="main-content-wrapper">
        {children}
        <Footer />
      </div>
    </>
  );
} 