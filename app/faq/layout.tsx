import React from 'react';

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
} 