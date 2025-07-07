import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable some experimental features that might cause issues
    serverComponentsExternalPackages: [],
    // Enable more stable build process
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
  swcMinify: true,
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
