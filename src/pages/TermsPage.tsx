import { PageShell } from '../components/PageShell'
import { useI18n } from '../i18n/language'

export function TermsPage() {
  const { t } = useI18n()

  return (
    <PageShell kicker={t.terms.eyebrow} title={t.terms.title}>
      <div className="max-w-3xl space-y-4 leading-relaxed text-ink/85">
        {t.terms.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </PageShell>
  )
}
