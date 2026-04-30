import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const isGhPagesExport = process.env.GH_PAGES === "1";

/** Turbopack lockfile discovery: parent homedir `package-lock.json` wins unless root is explicit. */
const turbopackRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
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
