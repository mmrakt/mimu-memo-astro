import React from 'react'

import Head from '../components/Head'
import Pagination from '../components/Pagination'
import PostList from '../components/PostList'
import PostListLayout from '../components/PostListLayout'

type IProps = {
  posts: GatsbyTypes.ContentfulPostConnection
}

export const PostsByMediaTemplate = ({ pageContext, location }: any) => {
  const {
    group,
    additionalContext: { media },
  } = pageContext
  if (!group) return null

  return (
    <PostListLayout>
      <Head pageUrl={location.pathname} />
      <p className="mb-7 text-center">
        <b className="mr-2 text-lg">#{media}</b>
        の記事
      </p>
      <PostList nodes={group} />
      <Pagination pageContext={pageContext} />
    </PostListLayout>
  )
}

export default PostsByMediaTemplate
