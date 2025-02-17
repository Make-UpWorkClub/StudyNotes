import { join } from 'node:path'
import { presetVite } from '@nolebase/integrations/vitepress/vite'
import UnoCSS from 'unocss/vite'

import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// import Inspect from 'vite-plugin-inspect'

import { creators, githubRepoLink } from './.vitepress/metadata'

export default defineConfig(async () => {
  const nolebase = presetVite({
    gitChangelog: {
      options: {
        gitChangelog: {
          repoURL: () => githubRepoLink,
          mapAuthors: creators,
        },
        markdownSection: {
          excludes: [
            join('templates', '01 Notion.md'),
            join('templates', '99 Extracted Notion.md'),
            join('en-US', 'toc.md'),
            join('en-US', 'index.md'),
          ],
        },
      },
    },
    pageProperties: {
      options: {
        markdownSection: {
          excludes: [
            join('templates', '01 Notion.md'),
            join('templates', '99 Extracted Notion.md'),
            join('en-US', 'toc.md'),
            join('en-US', 'index.md'),
          ],
        },
      },
    },
  })

  return {
    assetsInclude: [
      '**/*.mov',
    ],
    optimizeDeps: {
      // vitepress is aliased with replacement `join(DIST_CLIENT_PATH, '/index')`
      // This needs to be excluded from optimization
      exclude: [
        'vitepress',
        '@nolebase/vitepress-plugin-breadcrumbs/client',
      ],
    },
    plugins: [
      // Inspect(),
      Components({
        include: [/\.vue$/, /\.md$/],
        dirs: '.vitepress/theme/components',
        dts: '.vitepress/components.d.ts',
      }),
      UnoCSS(),
      nolebase,
      ...nolebase.plugins(),
    ],
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-breadcrumbs',
        '@unlazy/vue',
      ],
    },
  }
})
