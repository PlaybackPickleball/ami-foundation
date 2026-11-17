import { useState } from 'react'
import type { FormEvent } from 'react'
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
