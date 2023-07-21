import { expect, test } from '@playwright/test'

const URL_LIST = [
  { url: '/page/1', name: 'index' },
  { url: '/page/2', name: 'index-page-2' },
  { url: '/javascript-input', name: 'post' },
  { url: '/qiita', name: 'qiita-index' },
  { url: '/owned/page/2', name: 'owned-index-page-2' },
  { url: '/unknown', name: '404' },
]
const SCREEN_TYPES = ['pc', 'sp']

test.describe('スクリーンショットテスト', async () => {
  URL_LIST.forEach(async ({ url, name }) => {
    for (const screenType of SCREEN_TYPES) {
      test(`${name}-${screenType}`, async ({ page }) => {
        if (screenType === 'sp') {
          await page.setViewportSize({ width: 480, height: 960 })
        }
        await page.goto(url)

        // TODO: screenshot()の引数のpathでディレクトリ管理したいが、pathを指定すると修正前のUIで比較してしまう。要調査
        // ex: path: `${__dirname}/index.spec.ts-snapshots/${name}/${screenType}.${IMG_EXTENSION}`,
        const screenshot = await page.screenshot()

        // ex: [name, `${screenType}.${IMG_EXTENSION}`]
        expect(screenshot).toMatchSnapshot({ maxDiffPixelRatio: 0.2 })
      })
    }
  })
})
