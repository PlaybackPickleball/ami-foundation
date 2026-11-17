/** Public-file URL that follows Vite's base path (site root in dev and on Pages). */
export function publicPath(file: string) {
  return `${import.meta.env.BASE_URL}${file.replace(/^\//, '')}`
}
