function unsplash(id: string, width: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`
}

export const media = {
  hero: unsplash('1528127269322-539801943592', 2000),
  portrait: unsplash('1507003211169-0a1dd7228f2d', 1200),
  river: unsplash('1573270689103-d7a4e42b609a', 1600),
  about: unsplash('1555921015-5532091f6026', 1800),
  impact: unsplash('1557750255-c76072a7aad1', 1800),
  support: unsplash('1449844908441-8829872d2607', 1600),
}

export const episodeStills = {
  drink: unsplash('1754728199470-442fc69eda00', 1400),
  alley: unsplash('1555921015-5532091f6026', 1400),
  streets: unsplash('1583417319070-4a69db38a482', 1400),
} as const

export type EpisodeStillKey = keyof typeof episodeStills

export function storyImage(id: string) {
  return unsplash(id, 1400)
}

export const sampleFilms = [
  { id: 'WhWc3b3KhnY' },
  { id: 'aqz-KE-bpKQ' },
] as const

/**
 * Homepage trailer. Replace this string with the YouTube id when the film is ready.
 * Left blank on purpose so no stand-in id is invented.
 */
export const trailerVideoId = ''
