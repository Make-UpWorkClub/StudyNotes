import type { Theme } from 'vitepress'
import { NolebaseBreadcrumbs } from '@nolebase/vitepress-plugin-breadcrumbs/client'
import {
  InjectionKey as NolebaseEnhancedReadabilitiesInjectionKey,
  LayoutMode as NolebaseEnhancedReadabilitiesLayoutMode,
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import {
  NolebaseGitChangelogPlugin,
} from '@nolebase/vitepress-plugin-git-changelog/client'
import {
  NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'

import {
  NolebaseIndexPlugin,
} from '@nolebase/vitepress-plugin-index/client'

import {
  NolebaseInlineLinkPreviewPlugin,
} from '@nolebase/vitepress-plugin-inline-link-preview/client'

import {
  NolebasePagePropertiesPlugin,
} from '@nolebase/vitepress-plugin-page-properties/client'

import {
  NolebaseUnlazyImg,
} from '@nolebase/vitepress-plugin-thumbnail-hash/client'

import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'

import AppContainer from './components/AppContainer.vue'
import DocFooter from './components/DocFooter.vue'
import Giscus from './components/Giscus'
import HomePage from './components/HomePage.vue'
import Share from './components/Share.vue'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import '@nolebase/vitepress-plugin-index/client/style.css'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
import '@nolebase/vitepress-plugin-thumbnail-hash/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

import 'virtual:uno.css'

import '../styles/main.css'
import '../styles/vars.css'

import('@nolebase/vitepress-plugin-inline-link-preview/client')

const ExtendedTheme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => [
        h(NolebaseBreadcrumbs),
      ],
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-top': () => [
        h(NolebaseHighlightTargetedHeading),
        h(Giscus),
      ],
      'doc-footer-before': () => [
        h(DocFooter),
      ],
      'nav-bar-content-after': () => [
        h(NolebaseEnhancedReadabilitiesMenu),
        h(Share),
      ],
      'nav-screen-content-after': () => [
        h(NolebaseEnhancedReadabilitiesScreenMenu),
      ],
    })
  },
  enhanceApp({ app }) {
    /**
     * Have to manually import and register the essential components that needed during build globally.
     *
     * Learn more at: Warn `Hydration completed but contains mismatches.` and Custom components are not rendered · Issue #1918 · vuejs/vitepress
     * https://github.com/vuejs/vitepress/issues/1918
     */

    app.component('HomePage', HomePage)
    app.component('DocFooter', DocFooter)
    app.component('Share', Share)
    app.component('AppContainer', AppContainer)
    app.component('NolebaseUnlazyImg', NolebaseUnlazyImg)

    app.provide(NolebaseEnhancedReadabilitiesInjectionKey, {
      layoutSwitch: {
        defaultMode: NolebaseEnhancedReadabilitiesLayoutMode.SidebarWidthAdjustableOnly,
      },
      spotlight: {
        defaultToggle: true,
        hoverBlockColor: 'rgb(240 197 52 / 7%)',
      },
    })

    app.use(NolebaseInlineLinkPreviewPlugin)
    app.use(NolebaseGitChangelogPlugin)
    app.use(NolebasePagePropertiesPlugin<{
      tags: string[]
      progress: number
    }>(), {
      properties: {
        'en-US': [
          {
            key: 'tags',
            type: 'tags',
            title: 'Tags',
          },
          {
            key: 'progress',
            type: 'progress',
            title: 'Progress',
          },
          {
            key: 'wordCount',
            type: 'dynamic',
            title: 'Word count',
            options: {
              type: 'wordsCount',
            },
          },
          {
            key: 'readingTime',
            type: 'dynamic',
            title: 'Reading time',
            options: {
              type: 'readingTime',
              dateFnsLocaleName: 'enUS',
            },
          },
        ],
      },
    })

    app.use(NolebaseIndexPlugin)
  },
}

export default ExtendedTheme
