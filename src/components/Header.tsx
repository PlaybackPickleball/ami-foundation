import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import type { Locale } from '../content/copy'
import { useI18n } from '../i18n/language'
import { Logo } from './Logo'

const links = [
  { to: '/', key: 'explore', end: true },
  { to: '/mission', key: 'ourMission', end: true },
  { to: '/mission#how-we-work', key: 'missionShort', end: false },
  { to: '/stories', key: 'storiesShort', end: false },
  { to: '/initiatives', key: 'projects', end: false },
  { to: '/get-involved', key: 'involved', end: false },
  { to: '/commitment', key: 'about', end: false },
] as const

export function Header() {
  const { t, lang, setLang } = useI18n()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const onHome = location.pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  const linkClass = (isActive: boolean) => {
    if (onHome) return isActive ? 'text-gold' : 'text-cream/90 hover:text-gold'
    return isActive ? 'text-pine' : 'text-ink/75 hover:text-ink'
  }

  return (
    <header
      className={
        onHome
          ? 'absolute inset-x-0 top-0 z-40 text-cream'
          : 'sticky top-0 z-40 border-b border-ink/10 bg-cream/95 text-ink backdrop-blur-md'
      }
    >
      <div className="mx-auto flex max-w-6xl flex-nowrap items-center gap-3 px-4 py-3 lg:px-6">
        <NavLink to="/" end className="shrink-0">
          <Logo variant={onHome ? 'on-dark' : 'on-light'} className="h-24 sm:h-28" />
        </NavLink>

        <nav className="ml-auto hidden shrink-0 items-center gap-3 text-sm whitespace-nowrap xl:flex" aria-label={t.nav.explore}>
          {links.map((link) => (
            <NavLink key={link.key} to={link.to} end={link.end} className={({ isActive }) => linkClass(isActive)}>
              {t.nav[link.key]}
            </NavLink>
          ))}
          <Link
            to="/get-involved"
            className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink hover:bg-cream"
          >
            {t.nav.donate}
          </Link>
        </nav>

        <LanguageSwitch lang={lang} setLang={setLang} label={t.nav.language} onHome={onHome} />

        <button
          type="button"
          className={`ml-auto inline-flex h-10 w-10 items-center justify-center border xl:hidden ${
            onHome ? 'border-cream/40' : 'border-ink/15'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? t.nav.closeMenu : t.nav.openMenu}</span>
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span className={`block h-px w-5 ${onHome ? 'bg-cream' : 'bg-ink'}`} />
            <span className={`block h-px w-5 ${onHome ? 'bg-cream' : 'bg-ink'}`} />
            <span className={`block h-px w-5 ${onHome ? 'bg-cream' : 'bg-ink'}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className={`border-t px-5 py-4 xl:hidden ${onHome ? 'border-cream/15 bg-ink/95' : 'border-ink/10 bg-cream'}`}
        >
          <nav className="flex flex-col gap-3 text-lg" aria-label={t.nav.explore}>
            {links.map((link) => (
              <NavLink key={link.key} to={link.to} end={link.end} className={({ isActive }) => linkClass(isActive)}>
                {t.nav[link.key]}
              </NavLink>
            ))}
            <Link
              to="/get-involved"
              className="mt-1 inline-flex w-fit rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink"
            >
              {t.nav.donate}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

function LanguageSwitch({
  lang,
  setLang,
  label,
  onHome,
}: {
  lang: Locale
  setLang: (next: Locale) => void
  label: string
  onHome: boolean
}) {
  const on = onHome ? 'text-gold' : 'text-pine'
  const off = onHome ? 'text-cream/50 hover:text-cream' : 'text-ink/45 hover:text-ink'
  const slash = onHome ? 'text-cream/30' : 'text-ink/30'

  return (
    <div className="ml-auto flex items-center gap-1 text-xs tracking-[0.14em] xl:ml-0" role="group" aria-label={label}>
      <button type="button" aria-pressed={lang === 'en'} className={lang === 'en' ? on : off} onClick={() => setLang('en')}>
        EN
      </button>
      <span aria-hidden="true" className={slash}>
        /
      </span>
      <button type="button" aria-pressed={lang === 'vi'} className={lang === 'vi' ? on : off} onClick={() => setLang('vi')}>
        VI
      </button>
    </div>
  )
}
