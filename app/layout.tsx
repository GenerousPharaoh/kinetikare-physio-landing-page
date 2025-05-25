import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KinetiKare - Kareem Hassanein Physiotherapy',
  description: 'Professional physiotherapy services in Burlington, Ontario. Expert care for sports injuries, manual therapy, dry needling, and rehabilitation.',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/images/kinetikare-logo-without-text.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Global site header */}
        {/* Using a client component here is fine – Next.js will automatically create a client boundary */}
        {/* The header contains navigation links that scroll to the various sections rendered in the home page */}
        <Header />
        {/* Page content */}
        {children}
        {/* Global site footer */}
        <Footer />
      </body>
    </html>
  );
}
