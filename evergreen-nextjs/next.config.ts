import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable file watching for WSL2
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
