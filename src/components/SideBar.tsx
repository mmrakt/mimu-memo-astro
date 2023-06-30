import React from 'react'

import MediaList from './MediaList'
import Profile from './Profile'

const SideBar: React.VFC = () => (
  <aside className="box-outline pc:mt-0 mt-10 p-4 pc:w-72 dark:bg-dark-gray bg-white">
    <Profile />
    {/* <MediaList /> */}
  </aside>
)

export default SideBar
