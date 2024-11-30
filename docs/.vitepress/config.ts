import { readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import viteConfig from './vite.config'

const Guide = [
  { text: 'Get Started', link: '/guide/' },
  { text: 'Contributing', link: '/contributing' },
  { text: 'Guidelines', link: '/guidelines' },
]

const Links = [
  { text: 'Ecosystem', link: '/ecosystem' },
  { text: 'Export Size', link: '/export-size' },
  { text: 'Recent Updated', link: '/functions.html#sort=updated' },
  { text: 'Why no translations?', link: '/why-no-translations' },
]

const Learn = [
  { text: 'Premium Video Course', link: 'https://vueschool.io/courses/vueuse-for-everyone?friend=vueuse' },
  { text: 'Official Vue Certification', link: 'https://certification.vuejs.org/?utm_source=vueuse&utm_medium=website&utm_campaign=affiliate&utm_content=guide&banner_type=text&friend=VUEUSE' },
]

const FunctionsSideBar = readdirSync(resolve(__dirname, '../../lib')).map(path=>{
  const functions = readdirSync(resolve(__dirname, `../../lib/${path}`)).filter(subPath=>{
    return subPath !== 'dist' && statSync(resolve(__dirname, `../../lib/${path}/${subPath}`)).isDirectory()
  })

  return {
    text:path,
    collapsed: true,
    items: functions.map(name=>{
      return { text:name, link:`/${path}/${name}` }
    })
  }
})

const DefaultSideBar = [
  { text: 'Guide', items: Guide },
  { text:'Functions', items:FunctionsSideBar },
  { text: 'Learn', items: Learn },
  { text: 'Links', items: Links },
]

export default {
  title: 'beautiful-vue-use',
  description: 'Collection of essential Vue Composition Utilities',
  lang: 'en-US',
  ignoreDeadLinks: true,

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    codeTransformers: [

    ],
  },

  themeConfig: {
    logo: '/favicon.svg',
    editLink: {
      pattern: 'https://github.com/vueuse/vueuse/tree/main/packages/:path',
      text: 'Suggest changes to this page',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-PRESENT Yaxing Son and Beautiful-vue-use contributors',
    },
    algolia: {
      appId: 'NBQWY48OOR',
      apiKey: 'c5fd82eb1100c2110c1690e0756d8ba5',
      indexName: 'vueuse',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vueuse/vueuse' },
      { icon: 'discord', link: 'https://chat.antfu.me' },
      { icon: 'twitter', link: 'https://twitter.com/vueuse' },
    ],

    nav: [
      {
        text: 'Guide',
        items: [
          { text: 'Guide', items: Guide },
          { text: 'Learn', items: Learn },
          { text: 'Links', items: Links },
        ],
      },
      {
        text: 'Functions',
        items: [
          { text:'Animate', link:'/' },
          { text: 'Effect', link:'/' },
          { text: 'Lifecycle', link:'/' },
          { text: 'State', link:'/' },
          { text: 'Ui', link:'/' },
          { text: 'Sensors', link:'/' },
        ],
      },
      {
        text: 'Playground',
        link: 'https://play.vueuse.org',
      },
      {
        text: '1.0.0',
        items: [
          {
            items: [
              { text: 'Release Notes', link: 'https://github.com/vueuse/vueuse/releases' },
            ],
          },
          {
            text: 'Versions',
            items: []
          },
        ],

      },
    ],

    sidebar: {
      '/guide/': DefaultSideBar,
      '/contributing': DefaultSideBar,
      '/ecosystem': DefaultSideBar,
      '/guidelines': DefaultSideBar,
      '/export-size': DefaultSideBar,
      '/animate':FunctionsSideBar,
      '/effect':FunctionsSideBar,
      '/lifecycle':FunctionsSideBar,
      '/sensors':FunctionsSideBar,
      '/state':FunctionsSideBar,
      '/ui':FunctionsSideBar,
      '/miscellaneous':FunctionsSideBar

    },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'icon', href: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Yaxing Son' }],
    ['meta', { property: 'og:title', content: 'VueUse' }],
    ['meta', { property: 'og:description', content: 'Collection of essential Vue Composition Utilities' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@antfu7' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap' }],
  ],

  vite: viteConfig
}
