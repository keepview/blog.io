module.exports = {
  title: 'keepview',
  description: '没事儿也要找事儿~',
  evergreen: true,
  dest: 'dist',
  locales: { '/': { lang: 'zh-CN' } },
  head: [
    ['link', { rel: 'icon', href: '/icons/logo.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  // 配置永久链接
  permalink: '/:regular',
  markdown: {
    // 代码显示行号
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3] },
    // markdown 插件
    extendMarkdown: md => {
      md.set({ html: true });
      md.use(require("@iktakahiro/markdown-it-katex"));
      md.use(require("markdown-it-mark"));
      md.use(require("markdown-it-task-lists"));
      md.use(require("markdown-it-vuepress-code-snippet-enhanced"));
    }
  },
  plugins: [
    '@vuepress-reco/extract-code',
    ['@vuepress/medium-zoom', true],
    // 开启 PWA
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    // ribbon彩带背景
    // [
    //   "ribbon",
    //   {
    //     size: 90,
    //     opacity: 0.8,
    //     zIndex: -1
    //   }
    // ],
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    // 自动隐藏导航
    autoHideNavbar: true,
    // 主题颜色选择
    themePicker: true,
    // 搜索设置
    search: true,
    // 搜索显示条目数量
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 侧边导航层级
    sidebarDepth: 2,
    // 最后更新时间
    lastUpdated: '上次更新',
    // 博客设置
    blogConfig: {
      category: {
        location: 4, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认 “标签”
      },
    },
    logo: '/images/logo.png',
    // 作者
    author: 'keepview',
    // 项目开始时间，只填写年份
    startYear: '2020',
    // 备案号
    record: "****",
    // 顶部导航设置
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { 
        text: '知识体系',  
        icon: 'reco-category',
        link: '/note/前端知识体系汇总.md',
      },
      { text: '流年', link: '/timeLine/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/yefz', icon: 'reco-github' },
    ],
    // 密钥 (if your blog is private)
    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    valineConfig: {
      appId: 'CgHo1Nf19RJc4dUzWTGACjwR-gzGzoHsz', // your appId
      appKey: 'of84Nx1usWBJBR3mXAcNzBV5',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      notify: true,
      recordIP: true,
    },
    // https://github.com/yefz/blog
    // https://github.com/${owner}/${repo}
    // vssueConfig: {
    //   platform: 'github',
    //   owner: 'yefz',
    //   repo: 'blog',
    //   clientId: '9aaec055b30d64139e6a',
    //   clientSecret: 'f0194b3a26d3a12ce64e4e3d465a8c6911e5f143'
    // },
  },
}
