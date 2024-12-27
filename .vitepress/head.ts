import type { HeadConfig } from 'vitepress'
import { creatorNames, creatorUsernames, siteDescription, siteName, targetDomain } from './metadata'

export default [
  ['meta', {
    name: 'theme-color',
    content: '#ffe89a',
  }],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      href: '/StudyNotes/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      href: '/StudyNotes/logo.svg',
      type: 'image/svg+xml',
    },
  ],
  [
    'link',
    {
      rel: 'alternate icon',
      href: '/StudyNotes/favicon.ico',
      type: 'image/png',
      sizes: '16x16',
    },
  ],
  ['meta', {
    name: 'author',
    content: creatorNames.join(', '),
  }],
  [
    'meta',
    {
      name: 'keywords',
      content:
          ['markdown', 'knowledge-base', 'vitepress', 'obsidian', 'notebook', 'notes', ...creatorUsernames].join(', '),
    },
  ],

  ['meta', {
    property: 'og:title',
    content: siteName,
  }],
  [
    'meta',
    {
      property: 'og:image',
      content: `${targetDomain}/og.png`,
    },
  ],
  ['meta', {
    property: 'og:description',
    content: siteDescription,
  }],
  ['meta', {
    property: 'og:site_name',
    content: siteName,
  }],

  ['meta', {
    name: 'twitter:card',
    content: 'summary_large_image',
  }],
  ['meta', {
    name: 'twitter:creator',
    content: creatorUsernames.join(', '),
  }],
  [
    'meta',
    {
      name: 'twitter:image',
      content: `${targetDomain}/og.png`,
    },
  ],

  [
    'link',
    {
      rel: 'mask-icon',
      href: '/StudyNotes/safari-pinned-tab.svg',
      color: '#ffe89a',
    },
  ],
  ['link', {
    rel: 'manifest',
    href: '/StudyNotes/site.webmanifest',
  }],
  ['meta', {
    name: 'msapplication-TileColor',
    content: '#ffe89a',
  }],
] satisfies HeadConfig[]
