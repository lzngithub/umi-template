import { defineConfig } from 'umi';
import routes from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  request: {
    dataField: 'body', // 调整接口默认返回的数据的字段为body字段
  },
  define: {
    'process.env.API_URL': 'http://192.168.1.34:31600',
  },
  layout: {
    // headerRender: false, // 默认布局需要顶部导航栏，某个页面需要可以在路由配置里单独开启
    layout: 'top',
    className: 'globalLayout', // 全局类名
  },
  dynamicImport: {}, // 默认为false，打包只生成一个 js 和一个 css，即 umi.js 和 umi.css
  routes,
  fastRefresh: {},
  proxy: {
    '/api/': {
      target: 'http://192.168.1.34:31600', // 开发环境
      changeOrigin: true,
      pathRewrite: {
        '/apis/': '/',
      },
    },
  },
});
