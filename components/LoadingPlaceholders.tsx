// This component provides loading placeholder skeletons for all sections
// These are used with Suspense for progressive loading

const LoadingPlaceholders = {
  Hero: () => (
    <div className="relative py-24 md:py-32 lg:py-40 xl:py-48 min-h-screen flex items-center bg-primary-900">
      <div className="container mx-auto px-4 animate-pulse">
        <div className="h-8 w-1/3 bg-white/20 rounded mb-6"></div>
        <div className="h-12 w-2/3 bg-white/20 rounded mb-6"></div>
        <div className="h-6 w-1/2 bg-white/20 rounded mb-8"></div>
        <div className="h-12 w-40 bg-accent/30 rounded-xl"></div>
      </div>
    </div>
  ),
  
  Services: () => (
    <div className="min-h-[40vh] px-4 py-16 flex items-center justify-center bg-neutral-50">
      <div className="w-full max-w-6xl animate-pulse">
        <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="h-64 bg-white shadow rounded-lg p-6">
              <div className="h-10 w-10 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  
  About: () => (
    <div className="min-h-[40vh] px-4 py-16 flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl animate-pulse">
        <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64 bg-gray-200 rounded-lg"></div>
          <div>
            <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  ),
  
  Philosophy: () => (
    <div className="min-h-[40vh] py-16 bg-neutral-50">
      <div className="container mx-auto px-4 animate-pulse">
        <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  
  Conditions: () => (
    <div className="min-h-[40vh] py-16 bg-white">
      <div className="container mx-auto px-4 animate-pulse">
        <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="bg-neutral-50 p-4 rounded-lg">
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  
  ServiceAreas: () => (
    <div className="min-h-[40vh] py-16 bg-neutral-50">
      <div className="container mx-auto px-4 animate-pulse">
        <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="h-[300px] bg-gray-200 rounded-lg w-full"></div>
      </div>
    </div>
  ),
  
  Testimonials: () => (
    <div className="min-h-[40vh] py-16 bg-white">
      <div className="container mx-auto px-4 animate-pulse">
        <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="bg-neutral-50 p-6 rounded-lg shadow-md w-full md:w-1/3">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div className="ml-3">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
                  <div className="h-3 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  
  Booking: () => (
    <div className="min-h-[30vh] py-16 bg-neutral-50">
      <div className="container mx-auto px-4 animate-pulse">
        <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="flex justify-center">
          <div className="h-12 w-48 bg-accent/30 rounded-xl"></div>
        </div>
      </div>
    </div>
  ),
  
  Contact: () => (
    <div className="min-h-[40vh] py-16 bg-white">
      <div className="container mx-auto px-4 animate-pulse">
        <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="h-12 w-full bg-gray-200 rounded mb-4"></div>
            <div className="h-12 w-full bg-gray-200 rounded mb-4"></div>
            <div className="h-24 w-full bg-gray-200 rounded mb-4"></div>
            <div className="h-12 w-40 bg-gray-200 rounded"></div>
          </div>
          <div className="h-64 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  ),
};

export default LoadingPlaceholders; 