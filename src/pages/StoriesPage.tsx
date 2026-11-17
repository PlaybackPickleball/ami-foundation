import { Link } from 'react-router-dom'
import { EpisodeCard } from '../components/EpisodeCard'
import { PageShell } from '../components/PageShell'
import { episodes, featuredEpisode } from '../content/episodes'
import { useI18n } from '../i18n/language'

export function StoriesPage() {
  const { t } = useI18n()
  const feature = featuredEpisode()

  return (
    <PageShell kicker={t.storiesHome.eyebrow} title={t.storiesHome.title} lede={t.storiesHome.subhead}>
      <div className="max-w-3xl space-y-4 leading-relaxed text-ink/85">
        {t.storiesHome.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 font-serif text-2xl text-pine">{t.storiesHome.close}</p>
      <Link
        to={`/stories/${feature.slug}`}
        className="mt-6 inline-flex rounded-full bg-brown px-5 py-3 text-sm font-medium text-cream"
      >
        {t.storiesHome.watch}
      </Link>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.slug} episode={episode} featured={episode.featured} />
        ))}
      </div>
    </PageShell>
  )
}
