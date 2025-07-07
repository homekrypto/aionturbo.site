import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable some experimental features that might cause issues
    optimizePackageImports: [],
  },
  // Disable webpack cache temporarily
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  // Add some performance optimizations
  compress: true,
  async rewrites() {
    return [
      // Handle translated slugs
      {
        source: '/es/servicios',
        destination: '/es/services',
      },
      {
        source: '/fr/services-fr',
        destination: '/fr/services',
      },
      {
        source: '/de/dienstleistungen',
        destination: '/de/services',
      },
    ];
  },
};

export default nextConfig;
