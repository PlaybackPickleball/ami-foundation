import { PageShell } from '../components/PageShell'
import { useI18n } from '../i18n/language'

export function InitiativesPage() {
  const { t } = useI18n()

  return (
    <PageShell kicker={t.initiatives.eyebrow} title={t.initiatives.title} lede={t.initiatives.lede}>
      <ul className="grid gap-4">
        {t.initiatives.items.map((item) => (
          <li key={item.title} className="border border-ink/10 bg-white p-6">
            <p className="text-xs font-medium tracking-[0.16em] text-brown uppercase">{item.status}</p>
            <h2 className="mt-2 font-serif text-3xl text-pine">{item.title}</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">{item.text}</p>
          </li>
        ))}
      </ul>
      <section className="mt-14">
        <h2 className="font-serif text-3xl text-pine">{t.what.title}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {t.what.items.map((item) => (
            <li key={item.title} className="bg-white p-5">
              <h3 className="font-serif text-2xl text-pine">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}
