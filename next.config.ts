import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.studiodireto.com.br",
      },
      {
        protocol: "https",
        hostname: "xyz.systemprime.com.br",
      },
      {
        protocol: "https",
        hostname: "xyzcoworking.com",
      },
    ],
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_KEY: process.env.NEXT_PUBLIC_SITE_KEY,
  },
};

export default nextConfig;
