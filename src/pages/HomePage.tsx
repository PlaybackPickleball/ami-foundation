import { Link } from 'react-router-dom'
import { NewsletterForm } from '../components/SiteForms'
import { featuredEpisode } from '../content/episodes'
import { useDocumentTitle } from '../i18n/title'
import { useI18n } from '../i18n/language'
import { publicPath } from '../publicPath'

const btn =
  'inline-flex items-center justify-center rounded-full bg-brown px-5 py-3 text-sm font-medium text-cream hover:bg-pine'
const gold =
  'inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-medium text-ink hover:bg-cream'
const ghost =
  'inline-flex items-center justify-center rounded-full border border-cream/80 px-5 py-3 text-sm font-medium text-cream hover:bg-cream hover:text-ink'
const ghostInk =
  'inline-flex items-center justify-center rounded-full border border-pine px-5 py-3 text-sm font-medium text-pine hover:bg-pine hover:text-cream'

export function HomePage() {
  const { t, lang } = useI18n()
  const feature = featuredEpisode()
  useDocumentTitle('')

  return (
    <>
      <section className="relative min-h-[100svh] text-cream">
        <img
          src={publicPath('media/drink-vendor.jpg')}
          alt={t.hero.photoAlt}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-6 pt-32 pb-10">
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] sm:text-7xl">{t.hero.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/90">{t.hero.line}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/stories" className={gold}>
              {t.hero.watchSeries}
            </Link>
            <Link to="/get-involved" className={ghost}>
              {t.hero.support}
            </Link>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.hero.cards.map((card) => (
              <li key={card.title}>
                <Link to={card.href} className="flex h-full flex-col bg-cream/95 p-4 text-ink hover:bg-cream">
                  <span className="font-serif text-xl text-pine">{card.title}</span>
                  <span className="mt-2 text-sm leading-relaxed text-ink/75">{card.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-cream/70">
            <a
              className="underline-offset-2 hover:underline"
              href="https://commons.wikimedia.org/wiki/File:Hanoi_Vietnam_Street-vendors-in-Hanoi-02.jpg"
            >
              {t.hero.photoCredit}
            </a>
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium tracking-[0.22em] text-pine uppercase">{t.storiesHome.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-pine sm:text-6xl">{t.storiesHome.title}</h2>
          <p className="mt-3 font-serif text-2xl text-ink">{t.storiesHome.subhead}</p>
          <article className="mt-10 overflow-hidden bg-white">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-80">
                <img src={publicPath('media/drink-vendor-card.jpg')} alt={t.hero.photoAlt} className="absolute inset-0 h-full w-full object-cover" />
                <Link
                  to={`/stories/${feature.slug}`}
                  aria-label={feature.label[lang]}
                  className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-ink shadow-lg"
                >
                  <span aria-hidden="true" className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-ink" />
                </Link>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-xs font-medium tracking-[0.18em] text-brown uppercase">{t.storiesHome.episodeOne}</p>
                <h3 className="mt-3 font-serif text-4xl text-pine">{feature.title[lang]}</h3>
                <p className="mt-3 text-lg text-ink">{t.storiesHome.ageLine}</p>
                <p className="mt-4 text-sm leading-relaxed text-brown">{feature.label[lang]}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{t.hero.sampleStill}</p>
              </div>
            </div>
          </article>
          <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-ink/85">
            {t.storiesHome.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 font-serif text-2xl text-pine">{t.storiesHome.close}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={`/stories/${feature.slug}`} className={btn}>
              {t.storiesHome.watch}
            </Link>
            <Link to="/stories" className={ghostInk}>
              {t.storiesHome.all}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium tracking-[0.22em] text-pine uppercase">{t.mission.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl text-pine sm:text-5xl">{t.mission.title}</h2>
          <span className="mt-5 block h-1 w-16 bg-gold" />
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-ink/85">
            {t.mission.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link to="/mission" className={`${btn} mt-8`}>
            {t.mission.more}
          </Link>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium tracking-[0.22em] text-pine uppercase">{t.what.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl text-pine sm:text-5xl">{t.what.title}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink/80">{t.what.lede}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.what.items.map((item) => (
              <li key={item.title} className="border border-ink/10 bg-white p-5">
                <h3 className="font-serif text-2xl text-pine">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.text}</p>
              </li>
            ))}
          </ul>
          <Link to="/initiatives" className={`${btn} mt-8`}>
            {t.what.cta}
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium tracking-[0.22em] text-pine uppercase">{t.initiatives.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl text-pine sm:text-5xl">{t.initiatives.title}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink/80">{t.initiatives.lede}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {t.initiatives.items.map((item) => (
              <li key={item.title} className="border border-ink/10 p-5">
                <p className="text-xs font-medium tracking-[0.14em] text-brown uppercase">{item.status}</p>
                <h3 className="mt-2 font-serif text-2xl text-pine">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.text}</p>
              </li>
            ))}
          </ul>
          <Link to="/initiatives" className={`${btn} mt-8`}>
            {t.initiatives.cta}
          </Link>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium tracking-[0.22em] text-pine uppercase">{t.approach.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-pine sm:text-5xl">{t.approach.title}</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.approach.steps.map((step, index) => (
              <li key={step.title} className="bg-white p-5">
                <p className="font-serif text-3xl text-gold">{index + 1}</p>
                <h3 className="mt-2 font-serif text-2xl text-pine">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl font-serif text-2xl text-ink">{t.approach.line}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium tracking-[0.22em] text-pine uppercase">{t.involved.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-pine sm:text-5xl">{t.involved.title}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink/80">{t.involved.lede}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.involved.items.map((item) => (
              <li key={item.title} className="border-l-4 border-gold bg-cream px-5 py-4">
                <h3 className="font-serif text-2xl text-pine">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-brown">{t.involved.closed}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/get-involved" className={btn}>
              {t.involved.cta}
            </Link>
            <Link to="/contact" className={ghostInk}>
              {t.involved.contact}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-pine text-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs font-medium tracking-[0.22em] text-gold uppercase">{t.trust.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">{t.trust.title}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-cream/85">{t.trust.lede}</p>
          <Link to="/commitment" className={`${btn} mt-8`}>
            {t.trust.cta}
          </Link>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium tracking-[0.22em] text-pine uppercase">{t.newsletter.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl text-pine sm:text-5xl">{t.newsletter.title}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink/80">{t.newsletter.lede}</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
