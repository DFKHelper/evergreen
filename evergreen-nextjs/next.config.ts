import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Aggressive file watching configuration for WSL2 on Windows filesystem
  turbopack: {},

  // Force webpack dev server polling for file changes in WSL2
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }
    return config;
  },
};

export default nextConfig;
