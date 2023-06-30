import React from 'react'

import GithubLogo from './common/GithubLogo'
import TwitterLogo from './common/TwitterLogo'

const Profile: React.VFC = () => (
  <>
    <h3 className="font-black">Profile</h3>
    <div className="flex items-center mt-3">
      <img src="/img/avatar.png" alt="mmrakt" width={80} />
      <div className="ml-3">
        <p>@mmrakt</p>
        <h4 className="font-black">mimu</h4>
      </div>
    </div>
    <div className="description mt-3">大阪出身の文系エンジニアです。</div>
    <div className="description">ストリートダンスと飲酒が趣味です。</div>
    <div className="mt-3 flex items-center">
      <a
        href="https://github.com/mmrakt"
        target="_blank"
        rel="noreferrer"
        className=""
      >
        <GithubLogo />
      </a>
      <a
        href="https://twitter.com/mmrakt0716"
        className="ml-3"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterLogo />
      </a>
    </div>
  </>
)

export default Profile
