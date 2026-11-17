import { Link } from 'react-router-dom'
import type { Episode } from '../content/episodes'
import { useI18n } from '../i18n/language'

export function EpisodeCard({ episode, featured = false }: { episode: Episode; featured?: boolean }) {
  const { lang } = useI18n()

  return (
    <article className={`flex h-full flex-col border border-ink/10 bg-white ${featured ? 'p-6 sm:p-8' : 'p-5'}`}>
      <p className="text-xs font-medium tracking-[0.16em] text-brown uppercase">{episode.label[lang]}</p>
      <h3 className={`mt-3 font-serif text-pine ${featured ? 'text-4xl' : 'text-2xl'}`}>{episode.title[lang]}</h3>
      <p className="mt-2 text-sm font-medium text-ink">{episode.subtitle[lang]}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">{episode.summary[lang]}</p>
      <Link
        to={`/stories/${episode.slug}`}
        className="mt-5 inline-flex text-sm font-medium text-brown underline-offset-4 hover:underline"
      >
        {episode.title[lang]}
      </Link>
    </article>
  )
}
