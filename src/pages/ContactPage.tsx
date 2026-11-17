import { ContactForm } from '../components/SiteForms'
import { PageShell } from '../components/PageShell'
import { useI18n } from '../i18n/language'

export function ContactPage() {
  const { t } = useI18n()

  return (
    <PageShell kicker={t.contact.eyebrow} title={t.contact.title} lede={t.contact.lede}>
      <ContactForm />
    </PageShell>
  )
}
