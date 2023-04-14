import { defineConfig } from 'umi';
import routes from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  request: {
    dataField: 'body',
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
