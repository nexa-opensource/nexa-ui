import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "http://localhost:3001",
      },
      {
        source: "/docs/:path*",
        destination: "http://localhost:3001/:path*",
      },
      {
        source: "/playground",
        destination: "http://localhost:3002",
      },
      {
        source: "/playground/:path*",
        destination: "http://localhost:3002/:path*",
      },
    ];
  },
};

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
