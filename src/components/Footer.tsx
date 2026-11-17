import { Link } from 'react-router-dom'
import { SOCIAL_LINKS } from '../content/constants'
import { useI18n } from '../i18n/language'
import { Logo } from './Logo'

const explore = [
  { to: '/', key: 'home' },
  { to: '/mission', key: 'mission' },
  { to: '/stories', key: 'stories' },
  { to: '/initiatives', key: 'initiatives' },
  { to: '/get-involved', key: 'involved' },
  { to: '/contact', key: 'contact' },
] as const

const legal = [
  { to: '/privacy', key: 'privacy' },
  { to: '/terms', key: 'terms' },
  { to: '/contact', key: 'contact' },
] as const

export function Footer() {
  const { t } = useI18n()
  const socials = SOCIAL_LINKS.filter((item) => item.url.trim().length > 0)

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo variant="on-dark" className="h-24" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/80">{t.tagline}</p>
          <p className="mt-3 text-sm text-gold">{t.footer.note}</p>
          {socials.length > 0 ? (
            <ul className="mt-4 flex flex-col gap-1 text-sm">
              {socials.map((item) => (
                <li key={item.id}>
                  <a className="text-cream underline-offset-4 hover:underline" href={item.url}>
                    {item.id}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <nav aria-label={t.footer.explore}>
          <p className="text-xs tracking-[0.18em] text-gold uppercase">{t.footer.explore}</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-cream/85">
            {explore.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold">
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={t.footer.legal}>
          <p className="text-xs tracking-[0.18em] text-gold uppercase">{t.footer.legal}</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-cream/85">
            {legal.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold">
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-4 text-xs text-cream/60">{t.footer.rights}</p>
      </div>
    </footer>
  )
}
