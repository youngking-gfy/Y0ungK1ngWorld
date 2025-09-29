import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const ForensicsNote = defineNoteConfig({
  dir: 'Forensics',
  link: '/Forensics',
  sidebar: 'auto',
})

// 新增 Linux 笔记目录
const LinuxNote = defineNoteConfig({
  dir: 'learn', // 你的 Linux 笔记目录（如 ./docs/notes/Linux/）
  link: '/learn', // 访问路径
  sidebar: 'auto', // 自动生成侧边栏
})

const ctfshow = defineNoteConfig({
  dir: 'ctfshow', // 你的 CTFShow 笔记目录（如 ./docs/notes/ctfshow/）
  link: '/ctfshow', // 访问路径
  sidebar: 'auto', // 自动生成侧边栏
})

const Menu = defineNoteConfig({
  dir: 'menu', // 你的 CTFShow 笔记目录（如 ./docs/notes/menu/）
  link: '/menu', // 访问路径
  sidebar: 'auto', // 自动生成侧边栏
})

const Paper = defineNoteConfig({
  dir: 'paper', // 你的 Paper 笔记目录（如 ./docs/notes/paper/）
  link: '/paper', // 访问路径
  sidebar: 'auto', // 自动生成侧边栏
})

const pentest = defineNoteConfig({
  dir: 'pentest', 
  link: '/pentest', // 访问路径
  sidebar: 'auto', // 自动生成侧边栏
})

const ncsec= defineNoteConfig({
  dir: 'ncsec', 
  link: '/ncsec', // 访问路径
  sidebar: 'auto', // 自动生成侧边栏
  collapsed: true,
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [Menu, ForensicsNote, LinuxNote, ctfshow, Paper, pentest, ncsec], // 加入新笔记
})

