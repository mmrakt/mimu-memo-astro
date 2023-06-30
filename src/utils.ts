import { Media } from './config'

export const convertMediaNameToSlug = (mediaName: Media) => {
  if (mediaName === 'mimu-memo') {
    return 'mimu-memo'
  }
  if (mediaName === 'Qiita') {
    return 'qiita'
  }
  if (mediaName === 'Zenn') {
    return 'zenn'
  }
  return ''
}

export const dummy = null
