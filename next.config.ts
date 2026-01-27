import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.studiodireto.com.br",
      },
    ],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/google/:path*",
        destination: "/:path*",
      },
    ];
  },
  env: {
    NEXT_PUBLIC_SITE_KEY: process.env.NEXT_PUBLIC_SITE_KEY,
  },
};

export default nextConfig;
