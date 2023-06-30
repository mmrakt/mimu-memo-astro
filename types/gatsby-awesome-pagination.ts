export type PageContextProps = {
  humanPageNumber: number
  limit: number
  next?: {
    title: string
    slug: string
  }
  pageNumber: number
  numberOfPages: number
  skip: number
  prev?: {
    title: string
    slug: string
  }
}
