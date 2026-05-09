import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/balancelab",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
