import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
        
        {/* Mobile Floating Book Now Button */}
        <div className={`fixed bottom-6 right-4 z-50 md:hidden transition-all duration-300 ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <a 
            href="https://khphysiotherapy.janeapp.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-primary text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
          >
            Book Now
          </a>
        </div>
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
} 