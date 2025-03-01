import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for better debugging during development
  reactStrictMode: true,

  // SWC Minification for faster builds and smaller bundle sizes
  swcMinify: true,

  // Environment variable settings (optional, to verify values at runtime)
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_EMAIL: process.env.SMTP_EMAIL,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Example: Fixing dependencies that require node modules in client builds
      config.resolve.fallback = { fs: false, path: false };
    }
    return config;
  },

  output: "standalone",
};

export default nextConfig;
