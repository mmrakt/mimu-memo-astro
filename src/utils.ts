import dayjs from 'dayjs'
import Parser from 'rss-parser'

import { Media, SNS_ID } from './config/index'

import type { Frontmatter } from './types/index'
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
  const feed = await new Parser().parseURL(`https://qiita.com/${SNS_ID}/feed`)
  return feed.items.map((item) => ({
    title: item.title ?? '',
    pubDate: item.pubDate ? dayjs(item.pubDate).format('YYYY-MM-DD') : '',
    link: item.link ?? '',
    media: 'qiita',
  }))
}

export const fetchZennFeed = async (): Promise<Frontmatter[]> => {
  const feed = await new Parser().parseURL(
    `https://zenn.dev/${SNS_ID}/feed?all=1`
  )
  return feed.items.map((item) => ({
    title: item.title ?? '',
    pubDate: item.pubDate ? dayjs(item.pubDate).format('YYYY-MM-DD') : '',
    link: item.link ?? '',
    media: 'zenn',
  }))
}
