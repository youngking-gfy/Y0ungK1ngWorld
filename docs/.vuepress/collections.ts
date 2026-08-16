import type { ThemeCollections } from 'vuepress-theme-plume'

/**
 * 集合配置（collections）
 * @see https://theme-plume.vuejs.press/guide/collection/
 *
 * - `post` 类型：博客文章集合，自动生成列表页/分类页/标签页/归档页
 * - `doc` 类型：结构化笔记集合，自动生成侧边栏
 */
export const collections: ThemeCollections = [
  // 博客文章集合（docs/article/）
  {
    type: 'post',
    dir: 'article',
    title: '博客',
    link: '/blog/',        // 列表页链接
    linkPrefix: '/article/', // 文章链接前缀
  },

  // 笔记集合（docs/notes/）
  {
    type: 'doc',
    dir: 'notes/demo',
    title: 'Demo',
    linkPrefix: '/demo',
    sidebar: ['', 'foo', 'bar'],
  },
  {
    type: 'doc',
    dir: 'notes/Forensics',
    title: 'Forensics',
    linkPrefix: '/Forensics',
    sidebar: 'auto',
  },
  {
    type: 'doc',
    dir: 'notes/ctfshow',
    title: 'CTFShow',
    linkPrefix: '/ctfshow',
    sidebar: 'auto',
  },
  {
    type: 'doc',
    dir: 'notes/menu',
    title: 'Menu',
    linkPrefix: '/menu',
    sidebar: 'auto',
  },
  {
    type: 'doc',
    dir: 'notes/paper',
    title: 'Paper',
    linkPrefix: '/paper',
    sidebar: 'auto',
  },
  {
    type: 'doc',
    dir: 'notes/pentest',
    title: 'Pentest',
    linkPrefix: '/pentest',
    sidebar: 'auto',
  },
  {
    type: 'doc',
    dir: 'notes/ncsec',
    title: 'NCsec',
    linkPrefix: '/ncsec',
    sidebar: 'auto',
    sidebarCollapsed: true,
  },
]