import process from 'node:process'
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import { UnlazyImages } from '@nolebase/markdown-it-unlazy-img'
import { generateBreadcrumbsData } from '@nolebase/vitepress-plugin-breadcrumbs/vitepress'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

import { transformHeadMeta } from '@nolebase/vitepress-plugin-meta'
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'
// import { buildEndGenerateOpenGraphImages } from '@nolebase/vitepress-plugin-og-image/vitepress'
import MarkdownItFootnote from 'markdown-it-footnote'
import MarkdownItMathjax3 from 'markdown-it-mathjax3'
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

import head from './head'
import { githubRepoLink, siteDescription, siteName } from './metadata'

const config = defineConfig({
  vue: {
    template: {
      transformAssetUrls: {
        video: ['src', 'poster'],
        source: ['src'],
        img: ['src'],
        image: ['xlink:href', 'href'],
        use: ['xlink:href', 'href'],
        NolebaseUnlazyImg: ['src'],
      },
    },
  },
  title: siteName,
  description: siteDescription,
  base: '/StudyNotes/',
  cleanUrls: true,
  srcExclude: ['**/README.md', 'templates/*.md'],
  ignoreDeadLinks: true,
  head,
  locales: {
    root: {
      lang: 'en-US',
      label: 'English',
      dir: '/en-US',
      link: '/en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Notes', link: '/notes/' },
          { text: 'Changelog', link: '/toc' },
        ],
        socialLinks: [
          { icon: 'github', link: githubRepoLink },
        ],
        darkModeSwitchLabel: 'Switch theme',
        outline: { label: 'Outline', level: 'deep' },
        editLink: {
          pattern: `${githubRepoLink}/tree/main/:path`,
          text: 'Edit this page',
        },
        sidebar: calculateSidebar([
          { folderName: 'en-US', separate: true },
        ], 'en-US'),
        footer: {
          message: 'Written with <span style="color: #e25555;">&#9829;</span>',
          copyright:
        '<a class="footer-cc-link" target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> © 2024 Ajitani Hifumi',
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              root: {
                translations: {
                  button: {
                    buttonText: 'Search',
                    buttonAriaLabel: 'Search',
                  },
                  modal: {
                    noResultsText: 'No results found (>_<)',
                    resetButtonTitle: 'Reset search query',
                    footer: {
                      selectText: 'Select',
                      navigateText: 'Switch',
                    },
                  },
                },
              },
            },

            // Add title ang tags field in frontmatter to search
            // You can exclude a page from search by adding search: false to the page's frontmatter.
            _render(src, env, md) {
              // without `md.render(src, env)`, the some information will be missing from the env.
              let html = md.render(src, env)
              let tagsPart = ''
              let headingPart = ''
              let contentPart = ''
              let fullContent = ''
              const sortContent = () => [headingPart, tagsPart, contentPart] as const
              let { frontmatter, content } = env

              if (!frontmatter)
                return html

              if (frontmatter.search === false)
                return ''

              contentPart = content ||= src

              const headingMatch = content.match(/^# .*/m)
              const hasHeading = !!(headingMatch && headingMatch[0] && headingMatch.index !== undefined)

              if (hasHeading) {
                const headingEnd = headingMatch.index! + headingMatch[0].length
                headingPart = content.slice(0, headingEnd)
                contentPart = content.slice(headingEnd)
              }
              else if (frontmatter.title) {
                headingPart = `# ${frontmatter.title}`
              }

              const tags = frontmatter.tags
              if (tags && Array.isArray(tags) && tags.length)
                tagsPart = `Tags: #${tags.join(', #')}`

              fullContent = sortContent().filter(Boolean).join('\n\n')

              html = md.render(fullContent, env)

              return html
            },
          },
        },
      },
    },
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
    breaks: true,
    math: true,
    config: (md) => {
      md.use(MarkdownItFootnote)
      md.use(MarkdownItMathjax3)
      md.use(BiDirectionalLinks({
        dir: process.cwd(),
      }))
      md.use(UnlazyImages(), {
        imgElementTag: 'NolebaseUnlazyImg',
      })
      md.use(InlineLinkPreviewElementTransform)
    },
  },
  async transformHead(context) {
    let head = [...context.head]

    const returnedHead = await transformHeadMeta()(head, context)
    if (typeof returnedHead !== 'undefined')
      head = returnedHead

    return head
  },
  async transformPageData(pageData, context) {
    generateBreadcrumbsData(pageData, context)
  },
  // async buildEnd(siteConfig) {
  //   await buildEndGenerateOpenGraphImages({
  //     baseUrl: targetDomain,
  //     category: {
  //       byLevel: 2,
  //     },
  //   })(siteConfig)
  // },
})

export default withMermaid(config)
