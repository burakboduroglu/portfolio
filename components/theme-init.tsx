"use client";

import { useLayoutEffect } from "react";
import { applyTheme, getInitialTheme } from "@/lib/theme";

/**
 * Syncs `<html class="dark">` from localStorage / system preference on load.
 * Replaces `next/script` + inline file so React never renders a `<script>` node (dev warning fix).
 */
export function ThemeInit() {
  useLayoutEffect(() => {
    applyTheme(getInitialTheme());
  }, []);

  return null;
}
