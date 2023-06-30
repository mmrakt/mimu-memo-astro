import React from 'react'

import Pagination from '../components/Pagination'
import PostList from '../components/PostList'
import PostListLayout from '../components/PostListLayout'

import type { Page } from 'astro'

const PostsTemplate = ({ page }: { page: Page }) => {
  console.log('here')

  return (
    <PostListLayout>
      <PostList nodes={page.data} />
      <Pagination page={page} />
    </PostListLayout>
  )
}

export default PostsTemplate
