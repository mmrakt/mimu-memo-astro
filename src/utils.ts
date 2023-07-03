import dayjs from 'dayjs'
import Parser from 'rss-parser'

import { QIITA_FEED_URL, ZENN_FEED_URL } from './config/index'

import type { Frontmatter, Media } from './types/index'
import type { MarkdownInstance } from 'astro'

export const convertMediaNameToSlug = (mediaName: Media) => {
  if (mediaName === 'mimu-memo') {
    return 'mimu-memo'
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

export const fetchQiitaFeed = async (): Promise<Frontmatter[]> => {
  const feed = await fetchFeed(QIITA_FEED_URL)
  return mappingFeed(feed.items, 'qiita')
}

export const fetchZennFeed = async (): Promise<Frontmatter[]> => {
  const feed = await fetchFeed(ZENN_FEED_URL)
  return mappingFeed(feed.items, 'zenn')
}

export const fetchFeed = async (url: string) => {
  const feed = await new Parser().parseURL(url)
  return feed
}

const mappingFeed = (items: Parser.Item[], media: 'qiita' | 'zenn') =>
  items.map((item) => ({
    title: item.title ?? '',
    pubDate: item.pubDate ? dayjs(item.pubDate).format('YYYY-MM-DD') : '',
    link: item.link ?? '',
    media,
  }))
