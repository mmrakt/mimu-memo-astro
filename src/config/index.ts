export const SITE_NAME = process.env.npm_package_config_siteName
export const SITE_DESCRIPTION = process.env.npm_package_config_description
export const SITE_URL = process.env.npm_package_config_siteUrl
export const LOCALE = process.env.npm_package_config_locale

export const BREAK_POINT = 980
export const QIITA_URL_PREFIX = 'https://qiita.com'
export const NOTE_URL_PREFIX = 'https://note.com'
export const ZENN_URL_PREFIX = 'https://zenn.dev'
export const MEDIA = ['mimu-memo', 'Qiita', 'Zenn'] as const
export type Media = (typeof MEDIA)[number]

export const SNS_ID = 'mmrakt'
