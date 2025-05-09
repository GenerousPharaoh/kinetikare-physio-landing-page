'use client';

import React from 'react';
import GridBackground from './GridBackground';

interface PageLayoutProps {
  children: React.ReactNode;
}

/**
 * PageLayout Component
 * 
 * Provides a consistent layout with the grid background for all pages
 */
const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Consistent grid background */}
      <GridBackground />
      
      {/* Page content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageLayout; 