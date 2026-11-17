type FilmEmbedProps = {
  videoId: string
  title: string
  caption: string
}

export function FilmEmbed({ videoId, title, caption }: FilmEmbedProps) {
  return (
    <figure className="overflow-hidden bg-ink text-ivory">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption className="px-4 py-3 text-sm leading-relaxed text-ivory/80">{caption}</figcaption>
    </figure>
  )
}
