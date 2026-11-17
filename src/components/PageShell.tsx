import type { ReactNode } from 'react'
import { useDocumentTitle } from '../i18n/title'

type PageShellProps = {
  kicker: string
  title: string
  lede?: string
  children: ReactNode
}

export function PageShell({ kicker, title, lede, children }: PageShellProps) {
  useDocumentTitle(title)

  return (
    <article className="bg-cream text-ink">
      <header className="mx-auto max-w-6xl px-6 pt-12 pb-4">
        <p className="text-xs font-medium tracking-[0.22em] text-pine uppercase">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-[1.05] text-pine sm:text-6xl">{title}</h1>
        <span className="mt-5 block h-1 w-16 bg-gold" />
        {lede ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">{lede}</p> : null}
      </header>
      <div className="mx-auto max-w-6xl px-6 pt-8 pb-20">{children}</div>
    </article>
  )
}
