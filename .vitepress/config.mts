import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "qingning",

  title: "青年之心 凝聚于此",
  head: [["link", { rel: "icon", href: "/src/logo-l.png" }]],
  lang: 'zh-CN',
  description: "青柠工作室招新官网",
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/src/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '工作室介绍', link: '/introduction/index' },
      { text: '学习路线', link: '/map/index', },
      { text: '招新流程', link: '/recruitment/index', },
    ],

    sidebar: [
      { text: '工作室介绍', link: '/introduction/index', },
      {
        text: '学习路线',
        items: [
          { text: '写在前面', link: '/map/index' },
          { text: '机器学习&深度学习', link: '/map/ml' },
          { text: '前端', link: '/map/frontend' },
          { text: '后端', link: '/map/backend' },
        ]
      },
      {
        text: '招新',
        items: [
          { text: '注意事项', link: '/recruitment/index', },
          { text: '算法部分', link: '/recruitment/algorithm' },
          { text: '项目部分', link: '/recruitment/project' },
          { text: '附加题：论文阅读', link: '/recruitment/additional' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/QingNingStudio' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 青柠工作室'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local',
    }
  }
})
