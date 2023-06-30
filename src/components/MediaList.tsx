import React from 'react'

import { MEDIA, Media } from '../config'
import { convertMediaNameToSlug } from '../utils'

type IProps = {
  postsCountByOwned?: number
  postsCountByQiita?: number
  postsCountByZenn?: number
}
const MediaList: React.FC<IProps> = ({
  postsCountByOwned,
  postsCountByQiita,
  postsCountByZenn,
}) => {
  const postsCountByMedia = (media: Media): number => {
    if (media === 'mimu-memo') {
      return postsCountByOwned.totalCount
    }
    if (media === 'Qiita') {
      return postsCountByQiita.totalCount
    }
    if (media === 'Zenn') {
      return postsCountByZenn.totalCount
    }
    return 0
  }

  return (
    <>
      <h3 className="mt-6 font-black">Media</h3>
      <div className="flex flex-wrap mt-2">
        {MEDIA.map((media) => (
          <a href={`/${convertMediaNameToSlug(media)}`} key={media}>
            <span className="text-link mb-3 mr-5 underline text-sm">
              #{media}({postsCountByMedia(media)})
            </span>
          </a>
        ))}
      </div>
    </>
  )
}

export default MediaList
