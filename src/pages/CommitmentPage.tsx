import { PageShell } from '../components/PageShell'
import { useI18n } from '../i18n/language'

export function CommitmentPage() {
  const { t } = useI18n()

  return (
    <PageShell kicker={t.commitment.eyebrow} title={t.commitment.title}>
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink/85">
        {t.commitment.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-8 max-w-2xl font-serif text-2xl text-pine">{t.approach.line}</p>
    </PageShell>
  )
}
