import type { NextConfig } from "next";


const nextConfig: NextConfig = {
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
