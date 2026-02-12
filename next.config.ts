/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Referrer policy for privacy
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // XSS protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Permissions policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ],
      },
    ];
  },
  // Image optimization and security
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
    dangerouslyAllowSVG: false, // Prevent SVG XSS attacks
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 90],
  },
  // Security: disable source maps in production
  productionBrowserSourceMaps: false,
  // Compiler options for security
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in prod
  },
}

module.exports = nextConfig