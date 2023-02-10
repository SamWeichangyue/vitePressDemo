import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';
export default {
  title: 'demo', //站点标题
  description: 'front-arsenal', //mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: '组件', link: '/guide/test' },
      { text: 'changelog', link: 'https://gitee.com/geeksdidi' },
    ],
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api'],
      },
    },
  },
  appearance: true,
  lang: 'zh-CN',
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
};
