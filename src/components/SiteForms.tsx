import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT_EMAIL, FOUNDATION_NAME } from '../content/constants'
import { useI18n } from '../i18n/language'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function NewsletterForm() {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'invalid' | 'unconnected'>('idle')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!emailPattern.test(email.trim())) {
      setState('invalid')
      return
    }
    setState('unconnected')
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6 max-w-md">
      <label htmlFor="newsletter-email" className="text-sm font-medium text-ink">
        {t.newsletter.email}
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          placeholder={t.newsletter.placeholder}
          aria-invalid={state === 'invalid'}
          aria-describedby="newsletter-status"
          onChange={(event) => {
            setEmail(event.target.value)
            setState('idle')
          }}
          className="w-full border border-ink/20 bg-white px-4 py-3 text-ink"
        />
        <button type="submit" className="rounded-full bg-brown px-5 py-3 text-sm font-medium text-cream hover:bg-pine">
          {t.newsletter.submit}
        </button>
      </div>
      <p id="newsletter-status" className="mt-3 text-sm leading-relaxed text-ink/75" role="status">
        {state === 'invalid' ? t.newsletter.invalid : null}
        {state === 'unconnected' ? t.newsletter.unconnected : null}
        {state === 'idle' ? t.newsletter.note : null}
      </p>
    </form>
  )
}

export function ContactForm() {
  const { t } = useI18n()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [state, setState] = useState<'idle' | 'invalid' | 'unconnected'>('idle')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const valid = name.trim().length > 1 && emailPattern.test(email.trim()) && message.trim().length > 1
    setState(valid ? 'unconnected' : 'invalid')
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-xl space-y-4">
      <div>
        <label htmlFor="contact-name" className="text-sm font-medium">
          {t.contact.name}
        </label>
        <input
          id="contact-name"
          name="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-2 w-full border border-ink/20 bg-white px-4 py-3"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="text-sm font-medium">
          {t.contact.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full border border-ink/20 bg-white px-4 py-3"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="text-sm font-medium">
          {t.contact.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-2 w-full border border-ink/20 bg-white px-4 py-3"
        />
      </div>
      <button type="submit" className="rounded-full bg-brown px-5 py-3 text-sm font-medium text-cream hover:bg-pine">
        {t.contact.submit}
      </button>
      <p role="status" className="text-sm leading-relaxed text-ink/75">
        {state === 'invalid' ? t.contact.invalid : null}
        {state === 'unconnected' ? t.contact.unconnected : null}
      </p>
      <p className="text-sm leading-relaxed text-brown">{t.contact.noPay}</p>
    </form>
  )
}

function mailHref(reason: string, name: string, email: string, message: string) {
  const subject = `${FOUNDATION_NAME} — ${reason}`
  const body = [`Name: ${name}`, `Email: ${email}`, `About: ${reason}`, '', message].join('\n')
  const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return `mailto:${CONTACT_EMAIL}?${query}`
}

export function GetInTouchForm() {
  const { t } = useI18n()
  const [reason, setReason] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [state, setState] = useState<'idle' | 'invalid' | 'sent'>('idle')
  const [href, setHref] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const reasonLabel = t.involved.form.reasons.find((item) => item.id === reason)?.label
    const valid = Boolean(reasonLabel) && name.trim().length > 1 && emailPattern.test(email.trim()) && message.trim().length > 1
    if (!reasonLabel || !valid) {
      setState('invalid')
      return
    }
    const nextHref = mailHref(reasonLabel, name.trim(), email.trim(), message.trim())
    setHref(nextHref)
    setState('sent')
  }

  useEffect(() => {
    if (state !== 'sent' || !href) return
    window.location.assign(href)
  }, [state, href])

  if (state === 'sent') {
    return (
      <div id="get-in-touch" className="mt-10 max-w-xl scroll-mt-28 border border-gold bg-white px-5 py-5" role="status">
        <p className="leading-relaxed text-ink">{t.involved.form.success}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={href} className="rounded-full bg-brown px-5 py-3 text-sm font-medium text-cream hover:bg-pine">
            {t.involved.form.openEmail}
          </a>
          <button
            type="button"
            onClick={() => setState('idle')}
            className="rounded-full border border-pine px-5 py-3 text-sm font-medium text-pine hover:bg-pine hover:text-cream"
          >
            {t.involved.form.another}
          </button>
        </div>
      </div>
    )
  }

  return (
    <form id="get-in-touch" onSubmit={onSubmit} noValidate className="mt-10 max-w-xl scroll-mt-28 space-y-4">
      <fieldset>
        <legend className="text-sm font-medium">{t.involved.form.legend}</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {t.involved.form.reasons.map((item) => (
            <label key={item.id} className="flex items-center gap-3 border border-ink/20 bg-white px-4 py-3">
              <input
                type="radio"
                name="reason"
                value={item.id}
                checked={reason === item.id}
                onChange={() => {
                  setReason(item.id)
                  setState('idle')
                }}
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="involved-name" className="text-sm font-medium">
          {t.involved.form.name}
        </label>
        <input
          id="involved-name"
          name="name"
          autoComplete="name"
          required
          value={name}
          aria-invalid={state === 'invalid'}
          onChange={(event) => {
            setName(event.target.value)
            setState('idle')
          }}
          className="mt-2 w-full border border-ink/20 bg-white px-4 py-3"
        />
      </div>
      <div>
        <label htmlFor="involved-email" className="text-sm font-medium">
          {t.involved.form.email}
        </label>
        <input
          id="involved-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          aria-invalid={state === 'invalid'}
          onChange={(event) => {
            setEmail(event.target.value)
            setState('idle')
          }}
          className="mt-2 w-full border border-ink/20 bg-white px-4 py-3"
        />
      </div>
      <div>
        <label htmlFor="involved-message" className="text-sm font-medium">
          {t.involved.form.message}
        </label>
        <textarea
          id="involved-message"
          name="message"
          required
          rows={6}
          value={message}
          aria-invalid={state === 'invalid'}
          onChange={(event) => {
            setMessage(event.target.value)
            setState('idle')
          }}
          className="mt-2 w-full border border-ink/20 bg-white px-4 py-3"
        />
      </div>
      <button type="submit" className="rounded-full bg-brown px-5 py-3 text-sm font-medium text-cream hover:bg-pine">
        {t.involved.form.submit}
      </button>
      <p role="status" className="text-sm leading-relaxed text-ink/75">
        {state === 'invalid' ? t.involved.form.invalid : null}
      </p>
    </form>
  )
}
