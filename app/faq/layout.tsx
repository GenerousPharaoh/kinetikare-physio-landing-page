import React from 'react';

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-24">
        {children}
      </main>
    </div>
  );
} 