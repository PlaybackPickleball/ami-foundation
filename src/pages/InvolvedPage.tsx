import { GetInTouchForm } from '../components/SiteForms'
import { PageShell } from '../components/PageShell'
import { useI18n } from '../i18n/language'

export function InvolvedPage() {
  const { t } = useI18n()

  return (
    <PageShell kicker={t.involved.eyebrow} title={t.involved.title} lede={t.involved.lede}>
      <p className="max-w-2xl text-lg leading-relaxed text-ink/80">{t.involved.belief}</p>
      <ul className="mt-8 grid items-stretch gap-4 sm:grid-cols-2">
        {t.involved.items.map((item) => (
          <li key={item.title} className="flex h-full flex-col border-l-4 border-gold bg-white px-5 py-4">
            <h2 className="font-serif text-2xl text-pine">{item.title}</h2>
            <p className="mt-2 leading-relaxed text-ink/80">{item.text}</p>
          </li>
        ))}
      </ul>
      <h2 className="mt-10 font-serif text-3xl text-pine sm:text-4xl">{t.involved.closeTitle}</h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">{t.involved.close}</p>
      <a href="#get-in-touch" className="mt-8 inline-flex rounded-full bg-brown px-5 py-3 text-sm font-medium text-cream hover:bg-pine">
        {t.involved.contact}
      </a>
      <GetInTouchForm />
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/70">{t.involved.closed}</p>
    </PageShell>
  )
}
