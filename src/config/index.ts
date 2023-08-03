export const SITE_NAME = import.meta.env.npm_package_config_siteName
export const SITE_INTRO = import.meta.env.npm_package_config_description
export const SITE_URL =
  import.meta.env.NODE_ENV === 'production'
    ? import.meta.env.npm_package_config_siteUrl_prod
    : import.meta.env.npm_package_config_siteUrl_dev
export const LOCALE = import.meta.env.npm_package_config_locale
export const SITE_DESCRIPTION =
  '平凡エンジニアが技術について学んだことや躓いたことをメモ代わりに残していくブログです。'

export const QIITA_URL_PREFIX = 'https://qiita.com'
export const NOTE_URL_PREFIX = 'https://note.com'
export const ZENN_URL_PREFIX = 'https://zenn.dev'
export const MEDIA_TYPE_LIST = ['owned', 'qiita', 'zenn', 'note'] as const
export const MEDIA_TYPE_LIST_FOR_DISPLAY = [
  'mimu-memo',
  'Qiita',
  'Zenn',
  'note',
] as const

export const SNS_ID = 'mmrakt'
export const TWITTER_ID = 'mmrakt0716'
export const ZENN_FEED_URL = `https://zenn.dev/${SNS_ID}/feed?all=1`
export const NOTE_FEED_URL = `https://note.com/${SNS_ID}/rss`
export const QIITA_API_ENDPOINT =
  'https://qiita.com/api/v2/authenticated_user/items'

export const POST_DETAIL_CONTENT_SELECTOR = 'js-post-detail-content'
