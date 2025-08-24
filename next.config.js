/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false, // Temporarily disabled to fix Framer Motion animations in dev
  swcMinify: true,
  
  // Add Deployment ID for version skew protection
  env: {
    NEXT_DEPLOYMENT_ID: Date.now().toString(),
  },
  
  // Add ESLint configuration
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  
  // Enhanced image configuration for better SEO and performance
  images: {
    domains: ['via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: process.env.NODE_ENV === 'development', // Disable optimization in dev
  },
  
  // Enable static compression
  compress: true,
  
  // SEO-friendly trailing slashes
  trailingSlash: false,
  
  // Dynamic sitemap
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  
  // Headers for better SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' data: https://www.kinetikarephysio.com https://endorphinshealth.janeapp.com https://maps.googleapis.com https://maps.gstatic.com https://*.google.com https://*.googleusercontent.com; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://maps.googleapis.com; frame-src 'self' https://www.google.com https://maps.google.com https://www.google.com/maps/* https://*.google.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Optimize bundle size with custom webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Fix for module resolution errors
    config.resolve.alias = {
      ...config.resolve.alias,
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