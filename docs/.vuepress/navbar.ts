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
    icon: 'streamline-color:chat-bubble-square-write',
    text: '公考', link: '/ncsec/'
  },
  {
    icon: 'fluent-color:notebook-16',
    text: '笔记',
    items: [
      { text: 'Menu', link: '/menu/' },
      { text: 'CTFShow', link: '/ctfshow/' },
      { text: 'Paper', link: '/paper/' },
      { text: '渗透专题整理', link: '/pentest/' },
    ],
  },

])