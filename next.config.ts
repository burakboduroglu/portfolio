import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const isGhPagesExport = process.env.GH_PAGES === "1";

const nextConfig: NextConfig = {
  ...(isGhPagesExport
    ? {
        output: "export" as const,
        distDir: "dist",
        trailingSlash: true,
      }
    : {}),
  images: {
    ...(isGhPagesExport ? { unoptimized: true } : {}),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
