'use client';

export default function TrustindexReviews() {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            <div className="hidden md:block h-px bg-gray-300 w-24"></div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide uppercase">
              What Patients Say
            </h2>
            <div className="hidden md:block h-px bg-gray-300 w-24"></div>
          </div>
        </div>
        
        {/* Trustindex widget container - Using src attribute as per documentation */}
        <div src='https://cdn.trustindex.io/loader.js?83f7807534fc4047ba26c92e0ca'></div>
      </div>
    </section>
  );
}