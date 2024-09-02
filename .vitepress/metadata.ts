import type { Creator } from '../scripts/types/metadata'
import { getAvatarUrlByGithubName } from '../scripts/utils'

/** 文本 */
export const siteName = 'Study Notes'
export const siteShortName = 'Study Notes'
export const siteDescription = 'My personal knowledge base'

/** 文档所在目录 */
export const include = []

/** Repo */
export const githubRepoLink = 'https://github.com/Make-UpWorkClub/StudyNotes'
/** Discord */
export const discordLink = ''

/** 无协议前缀域名 */
export const plainTargetDomain = 'make-upworkclub.github.io'
/** 完整域名 */
export const targetDomain = `https://${plainTargetDomain}`

/** 创作者 */
export const creators: Creator[] = [
  {
    name: 'Ajitani Hifumi',
    avatar: '../assets/img/Hifumi.jpg',
    username: 'Perororororo',
    title: 'Club President',
    desc: 'Ahaha... Nice to meet you.',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Perororororo' },
    ],
    nameAliases: ['Hifumi', 'Hifumin', 'Faust'],
    emailAliases: ['perororo@proton.me'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
