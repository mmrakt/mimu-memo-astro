export type Frontmatter = {
  pubDate: string
  title: string
  link: string
  media: 'owned' | 'qiita' | 'zenn' // TODO: 汎用化する
}
