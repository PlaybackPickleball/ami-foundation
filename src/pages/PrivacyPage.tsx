import { PageShell } from '../components/PageShell'
import { useI18n } from '../i18n/language'

export function PrivacyPage() {
  const { t } = useI18n()

  return (
    <PageShell kicker={t.privacy.eyebrow} title={t.privacy.title}>
      <div className="max-w-3xl space-y-4 leading-relaxed text-ink/85">
        {t.privacy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </PageShell>
  )
}
