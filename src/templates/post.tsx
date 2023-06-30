import React from 'react'

import Content from '../components/Content'
import Head from '../components/Head'
import PostLayout from '../components/PostLayout'
import ChevronLeft from '../components/common/ChevronLeft'
import ChevronRight from '../components/common/ChevronRight'
import useStringTrim from '../hooks/useStringTrim'

type IProps = {
  data: {
    contentfulPost: GatsbyTypes.PostQuery['contentfulPost']
  }
  // pageContext: PageContextProps
  // location: PageProps['location']
}

const PostTemplate = ({ data }: IProps) => {
  const { contentfulPost } = data
  // const { prev, next } = pageContext
  // const url = location.origin + contentfulPost.slug

  return (
    <PostLayout title={contentfulPost.title}>
      {/* <Head
        pageTitle={contentfulPost.title}
        pageDescription={contentfulPost.excerpt.excerpt}
        pageUrl={location.pathname}
        pageType="article"
      />
      <section className="box-outline pc:p-10 p-5 w-full dark:bg-dark-gray bg-white animate-slide-in">
        <p className="text-sm">
          <span className="text-lg">{contentfulPost.date}</span>
        </p>
        <h1 className="mt-5 text-3xl font-black">{contentfulPost.title}</h1>
        <div className="mt-16">
          <div className="text-left leading-loose">
            <Content
              content={contentfulPost.content.childMarkdownRemark.html}
            />
          </div>
        </div>
      </section>
      <div className="flex items-center mt-10">
        <div className="w-1/2">
          {prev && (
            <a href={`/${prev.slug}`} className="flex items-center">
              <div className="text-link flex items-center underline">
                <ChevronLeft />
                {useStringTrim(prev.title, 50)}
              </div>
            </a>
          )}
        </div>
        <div className="w-1/2">
          {next && (
            <a href={`/${next.slug}`} className="flex items-center float-right">
              <div className="text-link flex items-center underline">
                {useStringTrim(next.title, 50)}
                <ChevronRight />
              </div>
            </a>
          )}
        </div>
      </div> */}
      hoge
    </PostLayout>
  )
}

export default PostTemplate
