"use client";

import React from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

interface LegalPageLayoutProps {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, effectiveDate, children }: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Modern Header with KinetiKare branding */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-12 md:py-16">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back to home link */}
            <Link 
              href="/"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors duration-200 mb-8 group"
            >
              <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {title}
            </h1>
            <div className="space-y-2 text-white/80">
              <p className="text-lg">
                <span className="text-white/60">Effective Date:</span> {effectiveDate}
              </p>
              <div className="pt-4 border-t border-white/20">
                <p className="text-xl font-semibold text-white mb-1">Kareem Hassanein, Registered Physiotherapist</p>
                <p className="text-white/70">Endorphins Health and Wellness Centre</p>
                <p className="text-white/70">4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent"></div>
      </section>

      {/* Content Area with improved styling */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Custom prose styling */}
              <style jsx global>{`
                .legal-content h2 {
                  font-size: 1.75rem;
                  font-weight: 700;
                  color: #0f172a;
                  margin-bottom: 1rem;
                  margin-top: 2rem;
                  padding-bottom: 0.5rem;
                  border-bottom: 2px solid #e2e8f0;
                  position: relative;
                }
                
                .legal-content h2:first-child {
                  margin-top: 0;
                }
                
                .legal-content h2:after {
                  content: '';
                  position: absolute;
                  bottom: -2px;
                  left: 0;
                  width: 60px;
                  height: 2px;
                  background: linear-gradient(to right, #B08D57, #D4AF37);
                }
                
                .legal-content h3 {
                  font-size: 1.25rem;
                  font-weight: 600;
                  color: #1e293b;
                  margin-bottom: 0.75rem;
                  margin-top: 1.25rem;
                }
                
                .legal-content p {
                  color: #334155;
                  line-height: 1.7;
                  margin-bottom: 0.75rem;
                }
                
                .legal-content ul {
                  margin-left: 1.5rem;
                  margin-bottom: 1rem;
                  margin-top: 0.5rem;
                }
                
                .legal-content li {
                  color: #334155;
                  margin-bottom: 0.375rem;
                  position: relative;
                  padding-left: 0.5rem;
                }
                
                .legal-content li::marker {
                  color: #B08D57;
                }
                
                .legal-content .contact-box {
                  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                  border: 1px solid #e2e8f0;
                  border-radius: 12px;
                  padding: 1.25rem;
                  margin: 1rem 0;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                }
                
                .legal-content .contact-box p {
                  margin-bottom: 0.25rem;
                }
                
                .legal-content .contact-box .contact-name {
                  font-weight: 600;
                  color: #0f172a;
                  font-size: 1.125rem;
                  margin-bottom: 0.375rem;
                }
                
                .legal-content section {
                  margin-bottom: 2rem;
                }
                
                .legal-content strong {
                  color: #1e293b;
                  font-weight: 600;
                }
              `}</style>
              
              <div className="legal-content">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer navigation for legal pages */}
      <section className="border-t border-gray-200 bg-slate-50 py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <Link href="/privacy" className="text-slate-600 hover:text-[#B08D57] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-600 hover:text-[#B08D57] transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-slate-600 hover:text-[#B08D57] transition-colors duration-200">
                Accessibility
              </Link>
              <Link href="/" className="text-slate-600 hover:text-[#B08D57] transition-colors duration-200 font-semibold">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}