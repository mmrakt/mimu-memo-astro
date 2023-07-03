import dayjs from 'dayjs'
import React from 'react'

import Content from '../components/Content'
import PostLayout from '../components/PostLayout'
import ChevronLeft from '../components/common/ChevronLeft'
import ChevronRight from '../components/common/ChevronRight'
import useStringTrim from '../hooks/useStringTrim'

import type { PaginatedPost } from '../types'
import type { AstroComponentFactory } from 'astro/dist/runtime/server'
import type { CollectionEntry } from 'astro:content'

type IProps = {
  post: PaginatedPost
  content: AstroComponentFactory
}

const PostTemplate: React.FC<IProps> = ({ post, content }) => (
  // <PostLayout title={entry.data.title} slug={entry.slug}>
  <>
    <section className="box-outline pc:p-10 p-5 w-full dark:bg-dark-gray bg-white animate-slide-in">
      <p className="text-sm">
        <span className="text-lg">
          {dayjs(post.entry.data.pubDate).format('YYYY-MM-DD')}
        </span>
      </p>
      <h1 className="mt-5 text-3xl font-black">{post.entry.data.title}</h1>
      <div className="mt-16">
        <div className="text-left leading-loose">
          <Content content={post.entry.body} />
        </div>
      </div>
    </section>
    <div className="flex items-center mt-10">
      <div className="w-1/2">
        {post.prev.url && (
          <a href={`/${post.prev.url}`} className="flex items-center">
            <div className="text-link flex items-center underline">
              <ChevronLeft />
              {useStringTrim(post.prev.title, 50)}
            </div>
          </a>
        )}
      </div>
      <div className="w-1/2">
        {post.next.url && (
          <a
            href={`/${post.next.url}`}
            className="flex items-center float-right"
          >
            <div className="text-link flex items-center underline">
              {useStringTrim(post.next.title, 50)}
              <ChevronRight />
            </div>
          </a>
        )}
      </div>
    </div>
  </>
  // </PostLayout>
)

export default PostTemplate
