'use client';

import { useEffect, useRef } from 'react';

export default function TrustindexReviews() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Prevent duplicate script loading
    if (scriptLoadedRef.current) return;

    const loadTrustindexWidget = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="trustindex.io"]');
      if (existingScript) {
        // Try to reinitialize the widget
        initializeWidget();
        return;
      }

      // Create and inject the script
      const script = document.createElement('script');
      script.src = 'https://cdn.trustindex.io/loader.js?83f7807534fc4047ba26c92e0ca';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('Trustindex script loaded');
        scriptLoadedRef.current = true;
        // Try to initialize widget after script loads
        setTimeout(initializeWidget, 100);
      };

      script.onerror = () => {
        console.error('Failed to load Trustindex script');
      };

      document.body.appendChild(script);
    };

    const initializeWidget = () => {
      // Try multiple methods to trigger the widget
      try {
        // Method 1: Check if Trustindex global exists
        if ((window as any).Trustindex) {
          console.log('Trustindex global found, attempting to load widget');
          const widget = widgetRef.current;
          if (widget && (window as any).Trustindex.loadFromElement) {
            (window as any).Trustindex.loadFromElement(widget);
          }
        }

        // Method 2: Dispatch custom event that might trigger widget
        const event = new Event('trustindex.widget.load');
        window.dispatchEvent(event);

        // Method 3: Check for any initialization function in window
        if ((window as any).TI) {
          console.log('TI global found');
          (window as any).TI.init();
        }
      } catch (error) {
        console.log('Widget initialization attempt:', error);
      }
    };

    // Load the widget with a small delay to ensure DOM is ready
    const timer = setTimeout(loadTrustindexWidget, 50);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Patient Reviews
          </h2>
        </div>
        
        {/* Trustindex widget container with multiple attributes for compatibility */}
        <div 
          ref={widgetRef}
          data-src="83f7807534fc4047ba26c92e0ca"
          className="ti-widget"
          id="trustindex-widget"
        >
          {/* Fallback content while loading */}
          <div className="text-center text-gray-500 py-8">
            Loading reviews...
          </div>
        </div>
      </div>
    </section>
  );
}