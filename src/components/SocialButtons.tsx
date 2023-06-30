import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

type IProps = {
  title: string
  url: string
}

const SocialButtons = ({ title, url }: IProps) => {
  const iconSize = '42'

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
