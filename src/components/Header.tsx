import React from 'react'

import { SITE_DESCRIPTION } from '../config'

const Header: React.VFC = () => (
  <div className="dark:bg-dark-black bg-primary">
    <div className="items-center shadow-md">
      <div className="p-4 text-center text-white">
        <a href="/page/1" className="navbar-item" title="Logo">
          <img
            className="block m-auto w-max h-auto"
            width="190"
            height="30"
            src="/img/logo.png"
            alt="logo"
          />
        </a>
        <p className="mt-2 text-white text-sm">{SITE_DESCRIPTION}</p>
      </div>
    </div>
  </div>
)

export default Header
