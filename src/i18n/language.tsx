import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { copy } from '../content/copy'
import type { Copy, Locale } from '../content/copy'

const STORAGE_KEY = 'ami-lang'

type LanguageContextValue = {
  lang: Locale
  setLang: (lang: Locale) => void
  t: Copy
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readLang(): Locale {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'vi' ? 'vi' : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Locale>(readLang)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* Storage can be blocked. The choice still holds for this visit. */
    }
    document.documentElement.lang = lang
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', copy[lang].metaDescription)
    }
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: copy[lang] }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const value = useContext(LanguageContext)
  if (!value) {
    throw new Error('useI18n must be used inside LanguageProvider')
  }
  return value
}
