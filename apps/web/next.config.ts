import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "http://localhost:3001/docs",
      },
      {
        source: "/docs/:path*",
        destination: "http://localhost:3001/docs/:path*",
      },
      {
        source: "/playground",
        destination: "http://localhost:3002/playground",
      },
      {
        source: "/playground/:path*",
        destination: "http://localhost:3002/playground/:path*",
      },
    ];
  },
};

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
