"use client";

import { useEffect } from "react";

const TARGET = "/tr/";

/**
 * Client-side redirect for static `/` → `/tr/` (GitHub Pages export).
 * Inline `<script>` in RSC triggers React dev warnings; `useEffect` avoids that.
 */
export function RedirectToTr() {
  useEffect(() => {
    window.location.replace(TARGET);
  }, []);

  return null;
}
