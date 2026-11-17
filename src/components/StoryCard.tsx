import { Link } from 'react-router-dom'
import type { Story } from '../content/stories'
import type { Locale } from '../content/copy'
import { SampleMark } from './SampleMark'

type StoryCardProps = {
  story: Story
  lang: Locale
  sampleLabel: string
}

export function StoryCard({ story, lang, sampleLabel }: StoryCardProps) {
  return (
    <article className="flex flex-col bg-white shadow-[0_1px_0_rgba(20,17,14,0.08)]">
      <Link
        to={`/stories/${story.slug}`}
        className="group flex h-full flex-col focus-visible:outline-offset-4"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-paper">
          <img
            src={story.image}
            alt={story.imageAlt[lang]}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <span className="absolute top-3 left-3">
            <SampleMark label={sampleLabel} />
          </span>
          <span
            className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-full bg-ivory text-coral shadow-md"
            aria-hidden="true"
          >
            <PlayBadge />
          </span>
          <span className="absolute right-3 bottom-3 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-medium tracking-wide text-ivory">
            <span className="sr-only">{sampleLabel}. </span>
            {story.duration}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-serif text-3xl leading-none text-ink">{story.name[lang]}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">{story.caption[lang]}</p>
        </div>
      </Link>
    </article>
  )
}

function PlayBadge() {
  return (
    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M8 5.5v13l11-6.5-11-6.5z" />
    </svg>
  )
}
