/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevent XSS attacks
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // Prevent clickjacking
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN' // Or 'DENY'
  },
  // Control referrer information
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // // Enable HSTS (uncomment and configure ONLY if your site fully supports HTTPS)
  // {
  //   key: 'Strict-Transport-Security',
  //   value: 'max-age=63072000; includeSubDomains; preload'
  // },
  // // Basic Content Security Policy (CSP) - **NEEDS CAREFUL CONFIGURATION** - COMMENTED OUT FOR NOW
  // {
  //   key: 'Content-Security-Policy',
  //   value: `
  //     default-src 'self';
  //     script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com;
  //     style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  //     img-src 'self' data: https:;
  //     font-src 'self' fonts.gstatic.com;
  //     object-src 'none';
  //     base-uri 'self';
  //     form-action 'self';
  //     frame-ancestors 'none';
  //     upgrade-insecure-requests;
  //   `.replace(/\s{2,}/g, ' ').trim()
  // }
];

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true, // Removed - no longer supported in Next.js 15.3.0
  
  // Add ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
  // Add security headers function
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    minimumCacheTTL: 60, // Cache optimized images for 60 seconds
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true, // Optimize CSS
    scrollRestoration: true, // Improve scroll restoration
  },
  
  // Enable static compression
  compress: true,
  
  // Optimize bundle size with custom webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Only enable in production builds
    if (!dev) {
      // Split chunks more aggressively
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          defaultVendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
            priority: 20,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            name(module) {
              const moduleContext = module.context || '';
              const match = moduleContext.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              const packageName = match && match[1] ? match[1] : 'unknown';
              return `npm.${packageName.replace('@', '')}`;
            },
            priority: 10,
            minChunks: 1,
            reuseExistingChunk: true,
          },
        },
      };
    }
    
    return config;
  },
};

module.exports = nextConfig; 