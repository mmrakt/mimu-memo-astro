import React, { ReactNode } from 'react'
import MediaQuery from 'react-responsive'

import { BREAK_POINT } from '../config'

import SideBar from './SideBar'
import SocialButtons from './SocialButtons'

type IProps = {
  title: string
  slug: string
  children: ReactNode
}

const PostLayout: React.FC<IProps> = ({ children, title, slug }) => (
  <>
    <MediaQuery maxWidth={BREAK_POINT}>
      <div className="mx-auto px-3 py-5 max-w-xl">
        {children}
        <SideBar />
      </div>
    </MediaQuery>
    <MediaQuery minWidth={BREAK_POINT + 1}>
      <div className="relative flex mx-auto max-w-6xl">
        <SocialButtons title={title} slug={slug} />
        <div className="max-w-[824px]">{children}</div>
        <div className="ml-10">
          <SideBar />
        </div>
      </div>
    </MediaQuery>
  </>
)

export default PostLayout
