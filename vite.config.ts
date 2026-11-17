import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/** GitHub Pages has no rewrite rules. A copy of index.html at 404.html keeps client routes working. */
function githubPagesSpaFallback(): Plugin {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    writeBundle(options) {
      const dir = options.dir
      if (!dir) return
      copyFileSync(resolve(dir, 'index.html'), resolve(dir, '404.html'))
    },
  }
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/ami-foundation/' : '/',
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
}))
