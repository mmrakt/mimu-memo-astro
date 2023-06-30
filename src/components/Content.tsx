// import DOMPurify from 'dompurify'
import React from 'react'

type IContent = {
  content: string
}

const Content: React.VFC<IContent> = ({ content }) => (
  // <div
  //   className="post-content"
  //   dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
  // />
  <></>
)

export default Content
