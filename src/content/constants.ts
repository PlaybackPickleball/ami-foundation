/** The written name of the organization, including the circumflex and apostrophe. */
export const FOUNDATION_NAME = '\u00C2\u2019Mi Foundations'

/**
 * YouTube channel URL. Leave empty until a real channel exists.
 * Do not invent an address. Subscribe links render only when this is set.
 */
export const YOUTUBE_CHANNEL_URL = ''

/**
 * Inbox for Get in Touch. Leave empty until a real mailbox exists.
 * Do not invent an address. The form still opens the visitor's email app.
 */
export const CONTACT_EMAIL = ''

/**
 * Social profiles. A link is shown only when its url is a non-empty string.
 * None are set, so the footer does not invent profiles.
 */
export const SOCIAL_LINKS = [
  { id: 'youtube', url: YOUTUBE_CHANNEL_URL },
  { id: 'facebook', url: '' },
  { id: 'instagram', url: '' },
] as const
