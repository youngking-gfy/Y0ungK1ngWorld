import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    icon: 'meteor-icons:blogger',
    text: '博客', link: '/blog/'
  },
  {
    icon: 'line-md:menu',
    text: '菜单', link: '/menu/'
  },
  {
    icon: 'streamline-color:web',
    text: 'ctfshow', link: '/ctfshow/'
  },
  {
    icon: 'oui:compute',
    text: '电子取证', link: '/Forensics/'
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
    icon: 'mdi:history',
    text: '面试冲刺', link: '/ncsec/paectakp/'
  },
  {
    icon: 'fluent-color:notebook-16',
    text: '笔记',
    items: [
      { text: 'Menu', link: '/menu/' },
      { text: 'Forensics', link: '/Forensics/' },
      { text: 'CTFShow', link: '/ctfshow/' },
      { text: 'Paper', link: '/paper/' },
      { text: '渗透专题整理', link: '/pentest/' },
      { text: '公安联考', link: '/ncsec/' },
    ],
  },

])