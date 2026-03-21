import type { ReactNode } from "react";

/**
 * Root layout: no <html>/<body> here — provided by `app/[locale]/layout.tsx`
 * per next-intl App Router pattern.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
