import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

import { SITE_URL } from '../config'

type IProps = {
  title: string
  slug: string
}

const SocialButtons = ({ title, slug }: IProps) => {
  const iconSize = '42'
  const url = `${SITE_URL}/${slug}`

  return (
    <div className="left-[-80px] absolute h-full">
      <div className="sticky top-40 inline-block">
        <div>
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
        </div>
        <div className="mt-3">
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
        </div>
      </div>
    </div>
  )
}

export default SocialButtons
