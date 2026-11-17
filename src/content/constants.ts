/** The written name of the organization, including the circumflex and apostrophe. */
export const FOUNDATION_NAME = '\u00C2\u2019Mi Foundations'

/**
 * YouTube channel URL. Leave empty until a real channel exists.
 * Do not invent an address. Subscribe links render only when this is set.
 */
export const YOUTUBE_CHANNEL_URL = ''

/**
 * Social profiles. A link is shown only when its url is a non-empty string.
 * None are set, so the footer does not invent profiles.
 */
export const SOCIAL_LINKS = [
  { id: 'youtube', url: YOUTUBE_CHANNEL_URL },
  { id: 'facebook', url: '' },
  { id: 'instagram', url: '' },
] as const
