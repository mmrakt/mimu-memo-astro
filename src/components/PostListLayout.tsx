import React from 'react'
import MediaQuery from 'react-responsive'

import { BREAK_POINT } from '../config'

import SideBar from './SideBar'

type IProps = {
  children: React.ReactNode
}
const PostListLayout: React.FC<IProps> = ({ children }) => (
  <>
    <MediaQuery maxWidth={BREAK_POINT}>
      <div className="mx-auto px-3 py-5 max-w-xl">
        {children}
        <SideBar />
      </div>
    </MediaQuery>
    <MediaQuery minWidth={BREAK_POINT + 1}>
      <div className="flex mx-auto max-w-6xl">
        <div className="w-full">{children}</div>
        <div className="ml-10">
          <SideBar />
        </div>
      </div>
    </MediaQuery>
  </>
)

export default PostListLayout
