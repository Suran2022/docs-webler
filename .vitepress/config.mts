import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "logo.png" }]],
  title: "橘猫技术团队",
  description: "橘猫技术团队-JMT",
  // base: "/docs-webler/",
  themeConfig: {
    outlineTitle: '文章目录',
    outline: [2,6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '礼仪', link: '/' },
      { text: '技术文档', link: '/markdown-examples' },
      {
        text: '教学与课程', items: [
          {text: '技术学习规划', link: '/Java学习路径'},
          {text: 'Java', link: '/Java学习路径'},
          {text: 'Spring Boot', link: '/Java学习路径'},
          {text: 'MySQL', link: '/Java学习路径'},
          {text: 'Redis', link: '/Java学习路径'},
          {text: 'MongoDB', link: '/Java学习路径'}
        ]
      }
    ],

    sidebar: [
      {
        text: '技术问题汇总',
        items: [
          { text: 'Spring Boot连接MySQL失败', link: '/markdown-examples' },
          { text: 'Cent OS服务器部署无法访问', link: '/api-examples' },
          {
            text: 'Java工程师学习路径', link: '/Java学习路径'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Suran2022' }
    ],

    footer: {
      copyright: "Open Byte - 2024 - JMT @ 橘猫技术团队"
    },

       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索您感兴趣的技术文章吧！",
              buttonAriaLabel: "搜索您感兴趣的技术文章吧！",
            },
            modal: {
              noResultsText: "未找到相关技术文章",
              resetButtonTitle: "清空查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
  },
});
