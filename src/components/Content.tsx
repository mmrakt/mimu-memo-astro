import DOMPurify from 'dompurify'
import React, { useEffect, useState } from 'react'
import { remark } from 'remark'
import html from 'remark-html'

const Content = ({ content }: { content: string }) => {
  // const markdownToHtml = (
  //   async (markdown: string) => {
  //     const processedContent = await remark().use(html).process(markdown)
  //     return processedContent.toString()
  //   }
  // )
  const [string, setString] = useState('')

  useEffect(() => {
    const markdownToHtml = async () => {
      const processedContent = await remark().use(html).process(content)
      setString(processedContent.toString())
      console.log('here')
    }
    markdownToHtml()
  }, [])

  console.log(string)

  return (
    // <div className="post-content" dangerouslySetInnerHTML={{ __html: hoge }} />
    <div>{content}</div>
  )
}

export default Content
