import { Link, useParams } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { YOUTUBE_CHANNEL_URL } from '../content/constants'
import { episodeBySlug, episodes } from '../content/episodes'
import { useI18n } from '../i18n/language'
import { NotFoundPage } from './NotFoundPage'

export function StoryPage() {
  const { slug } = useParams()
  const { t, lang } = useI18n()
  const episode = episodeBySlug(slug)

  if (!episode) {
    return <NotFoundPage />
  }

  const others = episodes.filter((item) => item.slug !== episode.slug)
  const channel = YOUTUBE_CHANNEL_URL.trim()

  return (
    <PageShell kicker={episode.label[lang]} title={episode.title[lang]} lede={episode.subtitle[lang]}>
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink/85">
        {episode.paragraphs[lang].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-8 border-l-4 border-gold bg-white px-5 py-4 text-sm leading-relaxed text-ink/80">
        {t.story.noVideo}
      </p>
      {channel ? (
        <a href={channel} className="mt-6 inline-flex text-sm font-medium text-brown hover:underline">
          {t.story.subscribe}
        </a>
      ) : null}
      <p className="mt-8">
        <Link to="/stories" className="text-sm font-medium text-pine hover:underline">
          {t.story.back}
        </Link>
      </p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {others.map((item) => (
          <li key={item.slug}>
            <Link to={`/stories/${item.slug}`} className="block border border-ink/10 bg-white px-4 py-3 hover:border-pine">
              <span className="block text-xs tracking-[0.14em] text-brown uppercase">{item.label[lang]}</span>
              <span className="mt-1 block font-serif text-xl text-pine">{item.title[lang]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  )
}
