import type { Locale } from './copy'

export type Episode = {
  slug: string
  featured: boolean
  title: Record<Locale, string>
  subtitle: Record<Locale, string>
  summary: Record<Locale, string>
  paragraphs: Record<Locale, string[]>
  label: Record<Locale, string>
}

export const episodes: Episode[] = [
  {
    slug: 'the-woman-behind-the-drink-stand',
    featured: true,
    title: { en: 'The Woman Behind the Drink Stand', vi: 'Người phụ nữ phía sau quầy nước' },
    subtitle: { en: 'A Life of Quiet Strength', vi: 'Một đời sức mạnh thầm lặng' },
    summary: {
      en: 'The first episode is planned around a 62-year-old woman who sells drinks for a living. It would stay close to her day: the early start, the people who stop, and the quiet strength of keeping going. The film has not been made.',
      vi: 'Tập đầu được dự định xoay quanh một người phụ nữ 62 tuổi bán nước để kiếm sống. Phim muốn ở gần một ngày của bà: buổi sớm, những người ghé lại, và sức mạnh thầm lặng của việc vẫn tiếp tục. Phim chưa được làm.',
    },
    paragraphs: {
      en: [
        'The first episode is planned around a 62-year-old woman who sells drinks for a living. It would stay close to her day: the early start, the people who stop, and the quiet strength of keeping going.',
        'The film has not been made. This page is not an interview, not a finished portrait, and not a claim about a person who has already been filmed.',
        'When the episode exists, it will be offered here. Until then, there is no video to play.',
      ],
      vi: [
        'Tập đầu được dự định xoay quanh một người phụ nữ 62 tuổi bán nước để kiếm sống. Phim muốn ở gần một ngày của bà: buổi sớm, những người ghé lại, và sức mạnh thầm lặng của việc vẫn tiếp tục.',
        'Phim chưa được làm. Trang này không phải một cuộc trò chuyện đã ghi, không phải một chân dung đã xong, và không phải lời khẳng định về một người đã được quay.',
        'Khi tập phim có thật, nó sẽ được đặt ở đây. Trước lúc đó, không có video để xem.',
      ],
    },
    label: {
      en: 'Coming soon — our first documentary episode',
      vi: 'Sắp có — tập tài liệu đầu tiên của chúng tôi',
    },
  },
  {
    slug: 'episode-slot-2',
    featured: false,
    title: { en: 'Open episode slot', vi: 'Chỗ cho một tập' },
    subtitle: { en: 'Nothing filmed yet', vi: 'Chưa quay gì' },
    summary: {
      en: 'This slot is waiting. No episode has been filmed for it, and no person is named here.',
      vi: 'Chỗ này đang chờ. Chưa có tập nào được quay, và không nêu tên một ai.',
    },
    paragraphs: {
      en: [
        'This slot is held for a later story. Nothing has been filmed, and no person is described here as if the episode already existed.',
      ],
      vi: [
        'Chỗ này giữ cho một câu chuyện sau. Chưa có gì được quay, và không mô tả một người nào như thể tập phim đã có.',
      ],
    },
    label: { en: 'Coming soon', vi: 'Sắp có' },
  },
  {
    slug: 'episode-slot-3',
    featured: false,
    title: { en: 'Another open slot', vi: 'Một chỗ trống nữa' },
    subtitle: { en: 'Nothing filmed yet', vi: 'Chưa quay gì' },
    summary: {
      en: 'A second waiting place. There is no previous episode to replay, because none has been finished.',
      vi: 'Một chỗ chờ thứ hai. Không có tập trước để xem lại, vì chưa tập nào được làm xong.',
    },
    paragraphs: {
      en: [
        'A second waiting place. There is no previous episode to replay, because none has been finished.',
      ],
      vi: [
        'Một chỗ chờ thứ hai. Không có tập trước để xem lại, vì chưa tập nào được làm xong.',
      ],
    },
    label: { en: 'Coming soon', vi: 'Sắp có' },
  },
]

export function episodeBySlug(slug: string | undefined) {
  if (!slug) return undefined
  return episodes.find((episode) => episode.slug === slug)
}

export function featuredEpisode() {
  return episodes.find((episode) => episode.featured) ?? episodes[0]
}
