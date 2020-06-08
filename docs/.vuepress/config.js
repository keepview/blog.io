module.exports = {
  title: 'KeepView',
  description: 'STAY HUNGRY,STAY FOOLISH',
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
    // 博客模式
    type: 'blog',
     // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    mode: 'light',
     // 默认 true，false 不显示模式调节按钮，true 则显示
    modePicker: true,
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
    // 首页右侧信息栏头像
    authorAvatar: '/images/avatar.png',
    // 博客设置
    blogConfig: {
      category: {
        location: 4, // 在导航栏菜单中所占的位置，默认2
        text: 'Category', // 默认 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认3
        text: 'Tags', // 默认 “标签”
      },
    },
    // 导航栏左侧 logo
    logo: '/images/head.png',
    // 作者
    author: 'keepview',
    // 项目开始时间，只填写年份
    startYear: '2020',
    // 备案号
    // record: "****",
    // 顶部导航设置
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { 
        text: 'Portal',  
        icon: 'reco-category',
        link: '/note/前端知识体系汇总.md',
      },
      { text: 'Stack', link: '/timeLine/', icon: 'reco-date' },
      { text: 'Resume', link: '/resume/个人简历.md', icon: 'reco-document' },
      { text: 'GitHub', link: 'https://github.com/keepview', icon: 'reco-github' },
    ],
    // valine评论配置
    valineConfig: {
      appId: 'wkqPUIoAl0ECaGU5rBm6yrdX-gzGzoHsz', // your appId
      appKey: 'TSwfqGqUD7jLhPEKaM8m6paT',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      notify: true,
      recordIP: true,
    },

    // 密钥 (if your blog is private)
    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    // https://github.com/keepview/blog
    // https://github.com/${owner}/${repo}
    // vssueConfig: {
    //   platform: 'github',
    //   owner: 'keepview',
    //   repo: 'blog',
    //   clientId: '',
    //   clientSecret: ''
    // },
  },
}
