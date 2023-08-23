import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yue Apps",
  description: "Yue Apps Site",
  head: [ 
    ['link', { rel: 'icon', href: '/favicon.ico' }],
      // https://codybontecou.com/tailwindcss-with-vitepress.html
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/AppsYue1181' }
    ],

    footer: {
      message: 'All rights reserved.',
      copyright: 'Copyright © 2023-present Yue Apps.'
    }
  },
  appearance: false
})
