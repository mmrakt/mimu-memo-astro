import { render } from '@testing-library/react'
import * as React from 'react'

import Pagination from '../Pagination'

// TODO: [Consider using the "jsdom" test environment.] のエラーの対応
it.skip('renders correctly', () => {
  const pageContext = {
    previousPagePath: '/',
    nextPagePath: '/page/3',
  }
  const { container } = render(<Pagination pageContext={pageContext} />)
  expect(container).toMatchSnapshot()
})
