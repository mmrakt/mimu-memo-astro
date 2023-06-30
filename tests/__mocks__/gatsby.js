/* eslint-disable */
import { jest } from '@jest/globals'

const React = require('react')
const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest
    .fn()
    .mockImplementation(
      ({
        activeClassName,
        activeStyle,
        getProps,
        innerRef,
        partiallyActive,
        ref,
        replace,
        to,
        ...rest
      }) =>
        React.createElement('a', {
          ...rest,
          href: to,
        })
    ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockImplementation(() => {
    return {
      site: {
        siteMetadata: {
          siteName: 'blog name',
          description: 'blog description',
          lang: 'ja',
          siteUrl: 'https://blog-test.com/',
          locale: 'ja_JP',
          type: 'blog',
        },
      },
    }
  }),
}
