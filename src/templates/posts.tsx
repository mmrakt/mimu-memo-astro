import React from 'react'

import Pagination from '../components/Pagination'
import PostList from '../components/PostList'
import PostListLayout from '../components/PostListLayout'

import type { Frontmatter } from '../types'
import type { Page } from 'astro'

const PostsTemplate = ({ page }: { page: Page<Frontmatter> }) => (
  <PostListLayout>
    <PostList posts={page.data} />
    <Pagination page={page} />
  </PostListLayout>
)

export default PostsTemplate
