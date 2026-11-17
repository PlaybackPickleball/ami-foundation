/** Public-file URL that follows Vite's base path (root in dev, /ami-foundation/ on Pages). */
export function publicPath(file: string) {
  return `${import.meta.env.BASE_URL}${file.replace(/^\//, '')}`
}
