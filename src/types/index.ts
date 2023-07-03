import { MEDIA } from '../config'

import type { CollectionEntry } from 'astro:content'

export type Frontmatter = {
  pubDate: string
  title: string
  link: string
  media: 'owned' | 'qiita' | 'zenn' // TODO: 汎用化する
}

export type PaginatedPost = {
  entry: CollectionEntry<'owned'>
  next: {
    url: string
    title: string
  }
  prev: {
    url: string
    title: string
  }
}

export type Media = (typeof MEDIA)[number]
export type UncaptalizedMedia = Uncapitalize<Media>
