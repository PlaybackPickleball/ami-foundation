import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { useI18n } from '../i18n/language'

export function InvolvedPage() {
  const { t } = useI18n()

  return (
    <PageShell kicker={t.involved.eyebrow} title={t.involved.title} lede={t.involved.lede}>
      <p className="max-w-2xl border border-brown/30 bg-white px-5 py-4 text-brown">{t.involved.closed}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {t.involved.items.map((item) => (
          <li key={item.title} className="border-l-4 border-gold bg-white px-5 py-4">
            <h2 className="font-serif text-2xl text-pine">{item.title}</h2>
            <p className="mt-2 leading-relaxed text-ink/80">{item.text}</p>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="mt-10 inline-flex rounded-full bg-brown px-5 py-3 text-sm font-medium text-cream">
        {t.involved.contact}
      </Link>
    </PageShell>
  )
}
