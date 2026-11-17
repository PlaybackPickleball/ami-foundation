import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { useI18n } from '../i18n/language'

export function NotFoundPage() {
  const { t } = useI18n()

  return (
    <PageShell kicker={t.notFound.eyebrow} title={t.notFound.title} lede={t.notFound.lede}>
      <Link to="/" className="inline-flex rounded-full bg-brown px-5 py-3 text-sm font-medium text-cream">
        {t.notFound.home}
      </Link>
    </PageShell>
  )
}
