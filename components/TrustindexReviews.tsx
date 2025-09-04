'use client';

import { useEffect, useRef, useState } from 'react';

export default function TrustindexReviews() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Prevent duplicate script loading
    if (scriptLoadedRef.current) return;

    let retryCount = 0;
    const maxRetries = 10;

    const loadTrustindexWidget = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="trustindex.io"]');
      if (existingScript) {
        // Script exists, try to initialize
        attemptWidgetInitialization();
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
        // Start attempting to initialize widget
        attemptWidgetInitialization();
      };

      script.onerror = () => {
        console.error('Failed to load Trustindex script');
        setIsLoading(false);
      };

      document.body.appendChild(script);
    };

    const attemptWidgetInitialization = () => {
      const tryInit = () => {
        try {
          // Check if widget has already been rendered
          const widgetContainer = document.getElementById('trustindex-widget');
          if (widgetContainer && widgetContainer.children.length > 1) {
            // Widget has been rendered (more than just our loading div)
            console.log('Widget successfully rendered');
            setIsLoading(false);
            return true;
          }

          // Try to initialize the widget
          if ((window as any).Trustindex) {
            console.log('Attempting Trustindex initialization');
            
            // Method 1: Direct initialization with the container
            if (widgetRef.current) {
              if ((window as any).Trustindex.loadFromElement) {
                (window as any).Trustindex.loadFromElement(widgetRef.current);
              }
              
              // Method 2: Try to trigger auto-discovery
              if ((window as any).Trustindex.init) {
                (window as any).Trustindex.init();
              }
            }

            // Check again after a short delay
            setTimeout(() => {
              const container = document.getElementById('trustindex-widget');
              if (container && container.children.length > 1) {
                setIsLoading(false);
              }
            }, 500);
          }

          // Method 3: Check for TI global
          if ((window as any).TI && (window as any).TI.init) {
            console.log('TI global found, initializing');
            (window as any).TI.init();
          }

          return false;
        } catch (error) {
          console.log('Widget initialization error:', error);
          return false;
        }
      };

      // Try initialization with retries
      const attemptWithRetry = () => {
        if (!tryInit() && retryCount < maxRetries) {
          retryCount++;
          console.log(`Retry attempt ${retryCount} of ${maxRetries}`);
          setTimeout(attemptWithRetry, 1000);
        } else if (retryCount >= maxRetries) {
          console.error('Failed to initialize widget after maximum retries');
          setIsLoading(false);
        }
      };

      attemptWithRetry();
    };

    // Start the loading process
    const timer = setTimeout(loadTrustindexWidget, 100);

    // Also listen for any Trustindex ready events
    const handleTrustindexReady = () => {
      console.log('Trustindex ready event detected');
      attemptWidgetInitialization();
    };

    window.addEventListener('trustindex:ready', handleTrustindexReady);
    window.addEventListener('ti:ready', handleTrustindexReady);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('trustindex:ready', handleTrustindexReady);
      window.removeEventListener('ti:ready', handleTrustindexReady);
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
        
        {/* Trustindex widget container */}
        <div 
          ref={widgetRef}
          data-src="83f7807534fc4047ba26c92e0ca"
          className="ti-widget"
          id="trustindex-widget"
          style={{ minHeight: isLoading ? '200px' : 'auto' }}
        >
          {/* Loading indicator */}
          {isLoading && (
            <div className="text-center text-gray-500 py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mb-4"></div>
              <p>Loading reviews...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}