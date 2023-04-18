export default [
  { path: '/', redirect: '/login' }, // 首页默认跳转到登录页
  {
    path: '/login',
    name: '登录',
    component: '@/pages/login/index',
  },
  { path: '/home', name: '首页', component: '@/pages/home/index' },
  {
    path: '/needAccess',
    name: '权限校验页',
    component: '@/pages/needAccess/index',
  },
];
