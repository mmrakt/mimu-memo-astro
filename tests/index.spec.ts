import { test, expect } from '@playwright/test'

const URL_LIST = [
  { url: '/page/1', name: 'index' },
  { url: '/page/2', name: 'index-page-2' },
  { url: '/javascript-input', name: 'post' },
  { url: '/qiita', name: 'qiita-index' },
  { url: '/owned/page/2', name: 'owned-index-page-2' },
]

test.describe('スクリーンショットテスト', async () => {
  URL_LIST.forEach(async ({ url, name }) => {
    for (const screenType of ['pc', 'sp']) {
      test(`${name}-${screenType}`, async ({ page }) => {
        if (screenType === 'sp') {
          await page.setViewportSize({ width: 480, height: 960 })
        }
        await page.goto(url)
        expect(await page.screenshot()).toMatchSnapshot([
          name,
          `${name}-${screenType}.jpg`,
        ])
      })
    }
  })
})
