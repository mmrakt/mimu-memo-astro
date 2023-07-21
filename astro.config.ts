import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true,
    },
  },
  output: 'hybrid',
  adapter: vercel(),
})
