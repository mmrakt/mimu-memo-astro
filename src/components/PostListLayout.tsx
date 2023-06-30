import React from 'react'

import SideBar from './SideBar'

type IProps = {
  children: React.ReactNode
}

// TODO react-responsive削除してtailwindで再実装
const PostListLayout: React.FC<IProps> = ({ children }) => (
  <div className="flex flex-col pc:flex-row mx-auto max-w-6xl">
    <div className="w-full">{children}</div>
    <div className="pc:ml-10">
      <SideBar />
    </div>
  </div>
)

export default PostListLayout
