import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Physiotherapy Services',
  description: 'Professional physiotherapy services for better health and mobility.',
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
