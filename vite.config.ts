import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages has no rewrite rules — it serves 404.html for any path it has no
 * file for. Shipping the app shell as 404.html is what makes a hard refresh or
 * a shared /projects/:id link resolve instead of showing the Pages error page.
 */
function spaFallback() {
  return {
    name: 'spa-fallback-404',
    apply: 'build' as const,
    closeBundle() {
      const dist = resolve(import.meta.dirname, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), spaFallback()],
})
