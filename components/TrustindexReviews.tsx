'use client';

import Script from 'next/script';

export default function TrustindexReviews() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Patient Reviews
          </h2>
        </div>
        
        {/* Trustindex Widget - Place the script right before the container */}
        <Script 
          src="https://cdn.trustindex.io/loader.js?83f7807534fc4047ba26c92e0ca"
          strategy="afterInteractive"
        />
        
        {/* Try just an empty div - let Trustindex create everything */}
        <div></div>
      </div>
    </section>
  );
}