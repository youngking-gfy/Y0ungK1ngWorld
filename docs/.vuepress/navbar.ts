import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    icon: 'meteor-icons:blogger',
    text: '博客', link: '/blog/'
  },
  {
    icon: 'line-md:menu',
    text: '菜单', link: '/notes/menu/README.md'
  },
  {
    icon: 'streamline-color:web',
    text: 'ctfshow', link: '/notes/ctfshow/README.md'
  },
  {
    icon: 'oui:compute',
    text: '电子取证', link: '/notes/Forensics/README.md'
  },
  {
    icon: 'twemoji:brain',
    text: '公专', link: '/ncsec/avrj0bx2/'
  },
  {
    icon: 'streamline-color:chat-bubble-square-write',
    text: '申论', link: '/ncsec/cf2nuwcv/'
  },
  {
    icon: 'fluent-color:data-area-32',
    text: '行测', link: '/ncsec/evqrjpxi/'
  },
  {
    icon: 'mdi:history',
    text: '前车之鉴', link: '/ncsec/3nqfrefd/'
  },
  {
    icon: 'fluent-color:notebook-16',
    text: '笔记',
    items: [
      { text: 'Menu', link: '/notes/menu/README.md' },
      { text: 'Forensics', link: '/notes/Forensics/README.md' },
      { text: 'Learn', link: '/notes/learn/README.md' },
      { text: 'CTFShow', link: '/notes/ctfshow/README.md' },
      { text: 'Paper', link: '/notes/paper/README.md' },
      { text: '渗透专题整理', link: '/notes/pentest/README.md' },
      { text: '公安联考', link: '/notes/ncsec/README.md' },
    ],
  },

])