import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tour-web-assets.interparkcdn.net",
      },
    ],
  },
};

export default nextConfig;
