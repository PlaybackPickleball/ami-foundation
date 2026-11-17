import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { useI18n } from '../i18n/language'

export function MissionPage() {
  const { t } = useI18n()

  return (
    <PageShell kicker={t.mission.eyebrow} title={t.mission.title}>
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink/85">
        {t.mission.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section id="how-we-work" className="mt-14 scroll-mt-28">
        <h2 className="font-serif text-3xl text-pine">{t.approach.title}</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {t.approach.steps.map((step, index) => (
            <li key={step.title} className="bg-white p-5">
              <p className="font-serif text-2xl text-gold">{index + 1}</p>
              <h3 className="mt-1 font-serif text-2xl text-pine">{step.title}</h3>
              <p className="mt-2 text-ink/80">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl font-serif text-2xl text-ink">{t.approach.line}</p>
      </section>
      <Link to="/commitment" className="mt-10 inline-flex rounded-full bg-brown px-5 py-3 text-sm font-medium text-cream">
        {t.trust.cta}
      </Link>
    </PageShell>
  )
}
