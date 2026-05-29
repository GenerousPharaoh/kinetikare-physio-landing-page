/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false, // Temporarily disabled to fix Framer Motion animations in dev

  // Pin the workspace root so Next 16 does not infer it from a stray parent
  // lockfile (~/package-lock.json); keeps output file tracing scoped here.
  outputFileTracingRoot: __dirname,

  // Optimize barrel-file imports for these libs so unused exports
  // don't ship to the client (helps INP + JS payload on mobile).
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      '@phosphor-icons/react',
      '@heroicons/react',
    ],
  },

  // Enhanced image configuration for better SEO and performance
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
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
  
  // Sitemap served from public/sitemap.xml (comprehensive with all condition pages)
  
  // Headers for better SEO and performance
  async headers() {
    // 'unsafe-eval' is only required by the Next.js dev server (HMR); the
    // production bundle (the only mode we ship) does not need it, so it is
    // scoped to development to keep the production CSP tighter. 'unsafe-inline'
    // is retained for the inline gtag bootstrap + JSON-LD. Host wildcards stay
    // broad so Google Analytics / Ads and the Maps embed keep working.
    const scriptSrc = `script-src 'self' 'unsafe-inline'${
      process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''
    } https:`;
    const csp = [
      "default-src 'self'",
      "img-src 'self' data: blob: https:",
      scriptSrc,
      "style-src 'self' 'unsafe-inline' https:",
      "font-src 'self' data: https:",
      "connect-src 'self' https:",
      "frame-src 'self' https://www.google.com https://maps.google.com https://*.google.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'",
      "form-action 'self' https://endorphinshealth.janeapp.com",
    ].join('; ');
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp,
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
            // SAMEORIGIN (not DENY) so internal previews still work; CSP frame-ancestors handles outbound clickjacking protection.
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
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
  
};

module.exports = nextConfig; 
