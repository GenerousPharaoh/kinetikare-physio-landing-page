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
  // IMPORTANT: Ensure your site is fully configured for HTTPS before enabling HSTS.
  {
    key: 'Strict-Transport-Security',
    // Use a smaller max-age initially (e.g., 1 day = 86400) for testing, then increase.
    // The value 63072000 is 2 years. includeSubDomains applies this to subdomains.
    // 'preload' allows submission to browser HSTS preload lists (permanent).
    value: 'max-age=86400; includeSubDomains' // Start with 1 day max-age for safety
  },
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
    ignoreDuringBuilds: false, // Enforce ESLint checks during production builds
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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24, // Cache optimized images for 24 hours
    dangerouslyAllowSVG: true, // Enable SVG support
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true, // Optimize CSS
    scrollRestoration: true, // Improve scroll restoration
    serverComponentsExternalPackages: ['sharp'], // Optimize image processing
    webVitalsAttribution: ['CLS', 'LCP', 'FID', 'INP'], // Track Web Vitals
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
          animations: {
            test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
            name: 'animations',
            chunks: 'all',
            priority: 30,
          },
        },
      };
      
      // Add bundle analyzer in analyze mode
      if (process.env.ANALYZE === 'true') {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true,
          })
        );
      }
    }
    
    return config;
  },

  // Optimize font loading
  optimizeFonts: true,

  // Limit number of simultaneous image optimizations in development
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },

  // Enable production source maps for better debugging
  productionBrowserSourceMaps: false, // Set to true for debugging production issues
  
  // Configure the build output
  output: 'standalone',

  // Disable image optimization during development for faster startup
  ...(process.env.NODE_ENV === 'development' ? {
    typescript: {
      // Faster typescript checking in development
      ignoreBuildErrors: true,
    },
  } : {}),
};

module.exports = nextConfig; 