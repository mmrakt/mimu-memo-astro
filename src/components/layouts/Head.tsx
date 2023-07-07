import React from 'react'

import {
  LOCALE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TWITTER_ID,
} from '../../config'

type IProps = {
  pageTitle?: string
  pagePath?: string
  pageImageWidth?: string
  pageImageHeight?: string
  pageType?: 'blog' | 'article'
}

const Head = ({
  pageTitle,
  pagePath,
  pageImageWidth = '1280',
  pageImageHeight = '640',
  pageType,
}: IProps) => {
  const title = pageTitle
    ? `${pageTitle} - ${SITE_NAME}`
    : `${SITE_NAME} - 平凡エンジニアの個人学習メモ`
  // TODO: descriptionをmarkdownから動的に抜き出す方法検討
  const siteUrl = pagePath ? `${SITE_URL}/${pagePath}` : SITE_URL
  const imageUrl = `${SITE_URL}/img/thumb.png`

  return (
    <head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="canonical" href={siteUrl} />
      <link rel="icon" href="/img/favicon.svg" type="image/svg+xml" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#fff" />
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={SITE_NAME} />
      {pageType && <meta property="og:type" content={pageType} />}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image.width" content={pageImageWidth} />
      <meta property="og:image.height" content={pageImageHeight} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content={`@${TWITTER_ID}`} />
    </head>
  )
}

export default Head
