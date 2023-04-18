export default [
  { path: '/', redirect: '/login' }, // 首页默认跳转到登录页
  {
    path: '/login',
    component: '@/pages/login/index',
  },
  { path: '/home', component: '@/pages/home/index' },
  {
    path: '/needAccess',
    component: '@/pages/needAccess/index',
  },
];
