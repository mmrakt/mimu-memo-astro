import { Page, expect } from '@playwright/test'
import { test } from 'vitest'

test('サイト名が表示される', async ({ page }: { page: Page }) => {
  console.log(page)
  await page.goto('/')

  await expect(page).toHaveTitle('mimu-memo')
})
