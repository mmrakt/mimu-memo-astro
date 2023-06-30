import React, { VFC } from 'react'
import MediaQuery from 'react-responsive'

import Footer from '../components/Footer'
import Header from '../components/Header'

const NotFoundPage: VFC = () => (
  <>
    <Header />
    <main className="px-3 py-10 bg-gray-100">
      <h1 className="text-center text-3xl">
        お探しのページが見つかりませんでした
      </h1>
      <div className="mt-10 text-center text-lg">
        <MediaQuery maxWidth={980}>
          <p>
            アクセスしたページは削除またはURLが変更されていたため表示することができませんでした。
          </p>
        </MediaQuery>
        <MediaQuery minWidth={981}>
          <p>アクセスしたページは削除またはURLが変更されていたため</p>
          <p>表示することができませんでした。</p>
        </MediaQuery>
      </div>
    </main>
    <Footer />
  </>
)

export default NotFoundPage
