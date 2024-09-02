import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  ignores: [
    '.obsidian/**',
    'node_modules/**',
    '**/*.md',
    '**/*.yaml',
    '**/*.yml',
  ],
})
