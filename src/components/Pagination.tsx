import React from 'react'

import ChevronLeft from './common/ChevronLeft'
import ChevronRight from './common/ChevronRight'

import type { Page } from 'astro'

type IProps = {
  page: Pick<
    Page,
    'start' | 'end' | 'size' | 'total' | 'currentPage' | 'lastPage' | 'url'
  >
}

export const Pagination: React.FC<IProps> = ({ page }) => {
  const { start, end, size, total, currentPage, lastPage, url } = page

  return (
    <div className="flex py-3">
      {currentPage !== 1 && (
        <a
          href={url.prev}
          rel="prev"
          className="box-outline text-link flex items-center pr-2 py-2 dark:text-white underline text-sm font-medium dark:bg-dark-gray bg-white"
        >
          <ChevronLeft />
          <span className="">Prev</span>
        </a>
      )}
      {currentPage !== lastPage && (
        <a
          href={url.next}
          rel="next"
          className="box-outline text-link flex items-center ml-auto pl-2 py-2 dark:text-white underline text-sm font-medium dark:bg-dark-gray bg-white"
        >
          <span>Next</span>
          <ChevronRight />
        </a>
      )}
    </div>
  )
}

export default Pagination
