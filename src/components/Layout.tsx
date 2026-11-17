import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/language'
import { Footer } from './Footer'
import { Header } from './Header'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export function Layout() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-cream text-ink">
      <a
        href="#main"
        className="absolute top-3 left-3 z-50 -translate-y-24 bg-cream px-3 py-2 text-sm text-ink focus:translate-y-0"
      >
        {t.skip}
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
