/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import React from 'react'
import Helmet from 'react-helmet'

import Head from '../Head'

describe('Head Component', () => {
  it('renders for posts page', () => {
    render(
      <Head
        pageTitle=""
        pageDescription=""
        pageUrl=""
        pageImage=""
        pageImageWidth=""
        pageImageHeight=""
        pageType=""
      />
    )
    const helmet = Helmet.peek()
    expect(helmet.title).toEqual('blog name')
    expect(helmet.metaTags).toEqual(
      expect.arrayContaining([
        { name: 'description', content: 'blog description' },
        { name: 'theme-color', content: '#fff' },
        { property: 'og:title', content: 'blog name' },
        { property: 'og:site_name', content: 'blog name' },
        { property: 'og:type', content: 'blog' },
        { property: 'og:description', content: 'blog description' },
        { property: 'og:url', content: 'https://blog-test.com/' },
        { property: 'og:locale', content: 'ja_JP' },
        {
          property: 'og:image',
          content: 'https://blog-test.com//img/thumb.png',
        },
        { property: 'og:image.width', content: '1280' },
        { property: 'og:image.height', content: '640' },
      ])
    )
  })

  it('renders for post page', () => {
    render(
      <Head
        pageTitle="post title"
        pageDescription="post description"
        pageUrl="/hoge"
        pageImage=""
        pageImageWidth=""
        pageImageHeight=""
        pageType="article"
      />
    )
    const helmet = Helmet.peek()
    expect(helmet.title).toEqual('post title | blog name')
    expect(helmet.metaTags).toEqual(
      expect.arrayContaining([
        { name: 'description', content: 'post description' },
        { name: 'theme-color', content: '#fff' },
        { property: 'og:title', content: 'post title | blog name' },
        { property: 'og:site_name', content: 'blog name' },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: 'post description' },
        { property: 'og:url', content: 'https://blog-test.com//hoge' },
        { property: 'og:locale', content: 'ja_JP' },
        {
          property: 'og:image',
          content: 'https://blog-test.com//img/thumb.png',
        },
        { property: 'og:image.width', content: '1280' },
        { property: 'og:image.height', content: '640' },
      ])
    )
  })
})
