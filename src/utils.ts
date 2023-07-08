import dayjs from 'dayjs'
import { remark } from 'remark'
import Parser from 'rss-parser'
import strip from 'strip-markdown'

import { QIITA_FEED_URL, ZENN_FEED_URL } from './config/index'

import type { Frontmatter, Media, MediaDisplay } from './types/index'
import type { MarkdownInstance } from 'astro'

export const trimString = (str: string, limit: number) =>
  str.length > limit ? `${str.substring(0, limit)}...` : str

export const convertMediaNameToSlug = (mediaName: MediaDisplay): Media | '' => {
  if (mediaName === 'mimu-memo') {
    return 'owned'
  }
  if (mediaName === 'Qiita') {
    return 'qiita'
  }
  if (mediaName === 'Zenn') {
    return 'zenn'
  }
  return ''
}

export const extractSlugFromMd = (md: MarkdownInstance<Frontmatter>) =>
  md.file.split('/').reverse()[0].replace('.md', '')

export const sortPostsByPubDate = (posts: Frontmatter[]): Frontmatter[] =>
  posts.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  )

export const makeQiitaPost = async (): Promise<Frontmatter[]> => {
  const feed = await fetchFeed(QIITA_FEED_URL)
  return mappingFeed(feed.items, 'qiita')
}

export const makeZennPost = async (): Promise<Frontmatter[]> => {
  const feed = await fetchFeed(ZENN_FEED_URL)
  return mappingFeed(feed.items, 'zenn')
}

export const fetchFeed = async (url: string) => {
  const feed = await new Parser().parseURL(url)
  return feed
}

const mappingFeed = (
  items: Parser.Item[],
  media: Exclude<Media, 'mimu-memo'>
) =>
  items.map((item) => ({
    title: item.title ?? '',
    pubDate: item.pubDate ? dayjs(item.pubDate).format('YYYY-MM-DD') : '',
    link: item.link ?? '',
    media,
  }))

export const extractExcerptFromBody = async (body: string) => {
  let excerpt = ''
  const processing = await remark().use(strip).process(body)
  excerpt = processing.toString().replace(/\r|\n|\rn/g, '')

  if (excerpt.length > 70) {
    return `${excerpt.slice(0, 70)}...`
  }
  return excerpt
}
