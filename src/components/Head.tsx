// import { withPrefix } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import { LOCALE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../config'

type IProps = {
  pageTitle?: string
  pageDescription?: string
  pageUrl?: string
  pageImage?: string
  pageImageWidth?: string
  pageImageHeight?: string
  pageType?: string
}

const Head: React.VFC<IProps> = ({
  pageTitle,
  pageDescription,
  pageUrl,
  pageImage,
  pageImageWidth,
  pageImageHeight,
  pageType,
}) => {
  const title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME
  const description = pageDescription || SITE_DESCRIPTION
  const siteUrl = pageUrl ? `${SITE_URL}${pageUrl}` : SITE_URL
  const imageUrl = pageImage
    ? `https:${pageImage}`
    : `${SITE_URL}/img/thumb.png`
  const imageWidth = pageImageWidth || '1280'
  const imageHeight = pageImageHeight || '640'
  const type = pageType || 'blog'

  return (
    <Helmet>
      <html lang="ja" className="bg-primary dark:bg-dark-black" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />
      {/* <link
        rel="icon"
        href={`${withPrefix('/')}img/favicon.svg`}
        type="image/svg+xml"
      /> */}
      <meta name="theme-color" content="#fff" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image.width" content={imageWidth} />
      <meta property="og:image.height" content={imageHeight} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={process.env.TWITTER_ID} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}

Head.defaultProps = {
  pageTitle: '',
  pageDescription: '',
  pageUrl: '',
  pageImage: '',
  pageImageWidth: '',
  pageImageHeight: '',
  pageType: '',
}

export default Head
