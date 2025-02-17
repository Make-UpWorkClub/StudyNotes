import { createRecentUpdatesLoader } from '@nolebase/vitepress-plugin-index/vitepress'

export default createRecentUpdatesLoader({
  dir: 'en-US',
  rewrites: [
    {
      from: /^en-US\/notes/,
      to: 'notes',
    },
  ],
})
