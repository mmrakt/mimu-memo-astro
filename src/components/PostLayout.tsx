import React, { ReactElement } from 'react'
import MediaQuery from 'react-responsive'

import { BREAK_POINT } from '../config'

import Layout from './BaseLayout.astro'
import SideBar from './SideBar'
import SocialButtons from './SocialButtons'

type IProps = {
  title: string
  url: string
  children: ReactElement[]
}

const PostLayout: React.FC<IProps> = ({ children, title, url }) => (
  <Layout>
    <MediaQuery maxWidth={BREAK_POINT}>
      <div className="mx-auto px-3 py-5 max-w-xl">
        {children}
        <SideBar />
      </div>
    </MediaQuery>
    <MediaQuery minWidth={BREAK_POINT + 1}>
      <div className="relative flex mx-auto max-w-6xl">
        <SocialButtons title={title} url={url} />
        <div className="max-w-[824px]">{children}</div>
        <div className="ml-10">
          <SideBar />
        </div>
      </div>
    </MediaQuery>
  </Layout>
)

export default PostLayout
