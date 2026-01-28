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
      // Suporta /google no início: /google, /google/servicos
      {
        source: "/google",
        destination: "/",
      },
      {
        source: "/google/:path*",
        destination: "/:path*",
      },
      // Suporta /google no final: /servicos/google, /servicos/sessao-fotografica/google
      {
        source: "/:path*/google",
        destination: "/:path*",
      },
    ];
  },
  env: {
    NEXT_PUBLIC_SITE_KEY: process.env.NEXT_PUBLIC_SITE_KEY,
  },
};

export default nextConfig;
