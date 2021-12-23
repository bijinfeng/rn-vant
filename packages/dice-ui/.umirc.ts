import { defineConfig, IConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production' && process.env.PREVIEW_PR !== 'true';

export default defineConfig({
  exportStatic: isProd ? {} : false,
  title: 'Dice UI',
  mode: 'site',
  algolia: {
    appId: 'TM4VZTMTDL',
    apiKey: '2b50f181fd5c1746eff1301b8a271318',
    indexName: 'docsearch',
  },
  favicon: 'https://img01.yzcdn.cn/vant/logo.png',
  logo: 'https://img01.yzcdn.cn/vant/logo.png',
  themeConfig: {
    xx: {
      logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
      path: 'https://github.com/bijinfeng/dice',
    },
    demoUrl: isDev ? 'http://localhost:19006' : 'https://bijinfeng.github.io/dice/example',
  },
  navs: [
    null,
    {
      logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
      path: 'https://github.com/bijinfeng/dice',
    },
  ],
  resolve: {
    passivePreview: true,
  },
  hash: isProd,
  base: isProd ? '/dice/' : '/',
  publicPath: isProd ? 'https://cdn.jsdelivr.net/gh/bijinfeng/dice@gh-pages/' : '/',
  sitemap: {
    hostname: 'https://bijinfeng.github.io/dice/',
  }
  // more config: https://d.umijs.org/config
} as IConfig);
