'use client';

import { useEffect } from 'react';

export default function TrustindexReviews() {
  useEffect(() => {
    // Trigger Trustindex widget reload if needed
    if (typeof window !== 'undefined' && (window as any).Trustindex) {
      (window as any).Trustindex.init();
    }
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Patient Reviews
          </h2>
        </div>
        
        {/* Trustindex Widget Container */}
        <div id="trustindex-widget" className="trustindex-widget">
          {/* The Trustindex script will automatically populate this div */}
        </div>
      </div>
    </section>
  );
}