import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/balancelab",
        destination: "/",
        permanent: true,
      },
      {
        source: "/notice",
        destination: "/",
        permanent: true,
      },
      {
        source: "/notice/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/shop_view",
        destination: "/",
        permanent: true,
      },
      {
        source: "/shop_view/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/product",
        destination: "/",
        permanent: true,
      },
      {
        source: "/product/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/board",
        destination: "/",
        permanent: true,
      },
      {
        source: "/board/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/petsafe",
        destination: "/",
        permanent: true,
      },
      {
        source: "/petsafe/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
