import { useEffect } from 'react'
import { useI18n } from './language'

export function useDocumentTitle(title: string) {
  const { t } = useI18n()

  useEffect(() => {
    document.title = title ? `${title} · ${t.brand}` : t.brand
  }, [title, t.brand])
}
