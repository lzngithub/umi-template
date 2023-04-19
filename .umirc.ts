import { defineConfig } from 'umi';
import routes from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  request: {
    dataField: 'body',
  },
  layout: {
    // headerRender: false, // 默认布局需要顶部导航栏，某个页面需要可以在路由配置里单独开启
    // menuRender: false,
    layout: 'top',
    className: 'globalLayout',
  },
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
