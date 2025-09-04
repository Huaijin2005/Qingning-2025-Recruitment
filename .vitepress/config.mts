import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "qingning",

  title: "青年之心 凝聚于此",
  lang: 'zh-CN',
  // locales: {
  //   root: {
  //     label: '中文',
  //     lang: 'zh'
  //   },
  // },
  description: "青柠工作室招新官网",
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/src/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '工作室介绍', link: '/introduction' },
      {
        text: '学习路线',
        items: [
          { text: '示例', link: '/resources' },
        ]
      },
      {
        text: '招新题目',
        link: '/recruitment',
        // items: [
        //   { text: '示例', link: '/recruitment' },
        // ]
      },
    ],

    sidebar: [
      {
        text: '青年之心 凝聚于此',
        link: '/introduction',
      },
      {
        text: '学习路线',
        link: '/resources',
        items: [
          { text: '学习路线', link: '/resources' },
        ]
      },
      {
        text: '招新题目',
        link: '/recruitment',
        items: [
          { text: '招新题目', link: '/recruitment' },
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
      // options: {
      //   locales: {
      //     zh: {
      //       translations: {
      //         button: {
      //           buttonText: '搜索文档',
      //           buttonAriaLabel: '搜索文档'
      //         },
      //         modal: {
      //           noResultsText: '无法找到相关结果',
      //           resetButtonTitle: '清除查询条件',
      //           footer: {
      //             selectText: '选择',
      //             navigateText: '切换'
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
    }
  }
})
