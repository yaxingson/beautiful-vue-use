import { readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig} from 'vitepress'
import viteConfig from './vite.config'

const Guide = [
  { text: 'Get Started', link: '/guide/' },

]

const Links = [
  { text: 'Ecosystem', link: '/ecosystem' },
  { text: 'Export Size', link: '/export-size' },
  { text: 'Recent Updated', link: '/functions.html#sort=updated' },
  { text: 'Why no translations?', link: '/why-no-translations' },
]

const Learn = [
  { text: 'Vue', link: 'https://vuejs.org' },

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

export default defineConfig({
  title: 'beautiful-vue-use',
  description: 'Collection of essential Vue Composition Utilities',
  lang: 'en-US',
  ignoreDeadLinks: true,

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
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
      appId: '',
      apiKey: '',
      indexName: 'beautiful-vue-use',
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
        text: 'Categories',
        items: [
          { text:'Animate', link:'/animate' },
          { text: 'Effect', link:'/effect' },
          { text: 'Lifecycle', link:'/lifecycle' },
          { text: 'State', link:'/state' },
          { text: 'Ui', link:'/ui' },
          { text: 'Sensors', link:'/sensors' },
          { text: 'Miscellaneous', link:'/miscellaneous'}
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
      '/functions':FunctionsSideBar,
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
})
