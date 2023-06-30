import dayjs from 'dayjs'
import React from 'react'

import { QIITA_URL_PREFIX, NOTE_URL_PREFIX, ZENN_URL_PREFIX } from '../config'

import LoadingSpinner from './LoadingSpinner'

const PostList = ({ nodes }: any) => {
  if (!nodes) {
    return (
      <div className="flex justify-center items-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="animate-slide-in">
      {nodes.map(({ node }) => (
        <div key={node}>
          {node?.link ? (
            <a href={node.link}>
              <Post node={node} />
            </a>
          ) : (
            <a href={`/${node.slug}`} key={node.slug}>
              <Post node={node} />
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

const Post = ({ node }: any) => {
  let externalLinkText = ''
  if (node?.link) {
    if (node.link.indexOf(QIITA_URL_PREFIX) === 0) {
      externalLinkText = '（Qiita記事）'
    } else if (node?.link.indexOf(NOTE_URL_PREFIX) === 0) {
      externalLinkText = '（note記事）'
    } else if (node?.link.indexOf(ZENN_URL_PREFIX) === 0) {
      externalLinkText = '（Zenn記事）'
    }
  }

  return (
    <div
      key={node.slug}
      className="h-full dark:bg-dark-gray bg-white transition ease-in-out duration-200 hover:scale-105 mb-4 box-outline"
    >
      <div className="p-5 text-sm">
        <p className="flex">
          <span className="text-base mb-3 mr-3">
            {dayjs.unix(node.date).format('YYYY.MM.DD')}
          </span>
          {externalLinkText && <span>{externalLinkText}</span>}
        </p>
        <div className="mb-3 text-lg font-bold">
          <span className="text-link">{node.title}</span>
        </div>
      </div>
    </div>
  )
}

export default PostList
