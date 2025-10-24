import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'YUI动漫社',
  description: 'YUI动漫社官方网站',
  base: '/',
  // 移除publicDir配置（VitePress默认使用docs/public）
  themeConfig: {
    logo: '/logo.png', // 对应docs/public/logo.png
    nav: [], // 自定义导航
    sidebar: undefined, // 关闭默认侧边栏
    socialLinks: [
      { icon: 'YUI动漫社', link: 'https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761233540764-nr0cx4dz-img_mh3kz15p_6904we.png' }
    ]
  }
})