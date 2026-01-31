"use client";

import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p>
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
            <a href="/privacy" className="underline ml-2">Learn more</a>
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={acceptCookies} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Accept
          </button>
          <button 
            onClick={() => setIsVisible(false)} 
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 