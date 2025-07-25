import { defineConfig } from 'vitepress'
import { set_sidebar } from './utils/auto_sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/pic1.jpg" }]],
  title: "左上角title",
  description: "整个项目的描述",
  themeConfig: {
    logo: '/pic6.png',
    outline: [2, 6],
    outlineTitle: '本页目录',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '右上角1home主页',
        items: [
          { text: 'home主页', link: '/' },
          { text: 'markdowns示例', link: '/markdown-examples' }
        ]
      },
      { text: '右上角Examples示例', link: '/markdown-examples' },
      { text: '自动生成侧边栏1前', link: '/front-end/react' },
      { text: '自动生成侧边栏2后', link: '/back-end/rabbit' },
      { text: '两边栏演示', link: '/两边栏演示' },
    ],

    // sidebar: [
    //   {
    //     text: 'one左侧导航',
    //     items: [
    //       { text: 'one左侧导航item1(md-example)', link: '/markdown-examples' },
    //       { text: 'one左侧导航item2(api-example)', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'two左侧导航',
    //     items: [
    //       { text: 'two左侧导航item1(md-example)', link: '/markdown-examples' },
    //       { text: 'two左侧导航item2(api-example)', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // sidebar:
    // {
    //   '/front-end/react': set_sidebar('/front-end/react'),
    //   '/back-end/rabbit': set_sidebar('/back-end/rabbit'),
    // },
    sidebar: false,
    aside: "left",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '自定义message',
      copyright: 'Copyright © 2023-PRESENT 蒋艺榕'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
