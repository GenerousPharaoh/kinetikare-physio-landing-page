import { Metadata } from 'next';
import AIPhysioClient from '@/components/AIPhysioClient';

export const metadata: Metadata = {
  title: 'AI Physiotherapy Advisor | Free Physio Consultation | KinetiKare',
  description: 'Get instant, AI-powered physiotherapy advice for your pain and movement concerns. Free consultation with our advanced physio AI assistant. Professional guidance for back pain, joint issues, sports injuries, and more.',
  keywords: [
    'AI physiotherapy', 'physio chatbot', 'free physio advice', 'online physiotherapy consultation',
    'back pain AI diagnosis', 'sports injury advice', 'physio AI assistant', 'movement assessment online',
    'pain relief chatbot', 'rehabilitation advice', 'physio symptoms checker', 'injury recovery AI'
  ],
  openGraph: {
    title: 'AI Physiotherapy Advisor - Get Instant Professional Guidance',
    description: 'Experience the future of physiotherapy consultation. Our AI advisor provides personalized guidance for your pain and movement concerns.',
    url: 'https://www.kinetikarephysio.com/ai-physio',
    type: 'website',
    images: [
      {
        url: '/og-ai-physio.png',
        width: 1200,
        height: 630,
        alt: 'KinetiKare AI Physiotherapy Advisor',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Physiotherapy Advisor | KinetiKare',
    description: 'Get instant AI-powered physiotherapy advice for your pain and movement concerns.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function AIPhysioPage() {
  return <AIPhysioClient />;
} 