import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/dashboard",
        destination: "/pages/dashboard",
      },
    ];
  },
};

export default nextConfig;
