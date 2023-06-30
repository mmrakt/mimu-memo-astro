import dayjs from 'dayjs'
import React from 'react'

import { QIITA_URL_PREFIX, NOTE_URL_PREFIX, ZENN_URL_PREFIX } from '../config'

import LoadingSpinner from './LoadingSpinner'

import type { Frontmatter } from '../types'

const PostList = ({ posts }: { posts: Frontmatter[] }) => {
  if (!posts) {
    return (
      <div className="flex justify-center items-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="animate-slide-in">
      {posts.map((post) => (
        <div key={post.link}>
          {post.media !== 'owned' ? (
            <a href={post.link} target="_blank" rel="noreferrer">
              <Post post={post} />
            </a>
          ) : (
            <a href={`/${post.link}`} key={post.link}>
              <Post post={post} />
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

const Post = ({ post }: { post: Frontmatter }) => {
  let externalLinkText = ''
  if (post?.link) {
    if (post.link.indexOf(QIITA_URL_PREFIX) === 0) {
      externalLinkText = '（Qiita記事）'
    } else if (post?.link.indexOf(NOTE_URL_PREFIX) === 0) {
      externalLinkText = '（note記事）'
    } else if (post?.link.indexOf(ZENN_URL_PREFIX) === 0) {
      externalLinkText = '（Zenn記事）'
    }
  }

  return (
    <div
      key={post.link}
      className="h-full dark:bg-dark-gray bg-white transition ease-in-out duration-200 hover:scale-105 mb-4 box-outline"
    >
      <div className="p-5 text-sm">
        <p className="flex">
          <span className="text-base mb-3 mr-3">
            {dayjs(post.pubDate).format('YYYY.MM.DD')}
          </span>
          {externalLinkText && <span>{externalLinkText}</span>}
        </p>
        <div className="mb-3 text-lg font-bold">
          <span className="text-link">{post.title}</span>
        </div>
      </div>
    </div>
  )
}

export default PostList
