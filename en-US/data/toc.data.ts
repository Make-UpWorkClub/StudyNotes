import { createRecentUpdatesLoader } from '@nolebase/vitepress-plugin-index/vitepress'

export default createRecentUpdatesLoader({
  dir: 'en-US',
  rewrites: [
    // wired, it wasn't designed to work like this.
    {
      from: /^en-US\/notes/,
      to: 'StudyNotes/en-US/notes',
    },
  ],
})
