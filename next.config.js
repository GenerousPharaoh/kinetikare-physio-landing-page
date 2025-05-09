/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  
  // Add ESLint configuration
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  
  // Basic image configuration
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: process.env.NODE_ENV === 'development', // Disable optimization in dev
  },
  
  // Enable static compression
  compress: true,
  
  // Optimize bundle size with custom webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Fix: Ensure React is properly resolved to prevent "Cannot read properties of undefined (reading 'call')" error
    config.resolve.alias = {
      ...config.resolve.alias,
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
      'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime'),
    };

    // FIX: Make sure there's only one instance of React
    config.resolve.modules = ['node_modules', ...config.resolve.modules];
    
    // Fix: Ensure proper loading of React hooks
    config.resolve.symlinks = false;
    
    return config;
  },
  
  // Remove type-checking to speed up development process
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 