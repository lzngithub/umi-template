export default [
  { path: '/', redirect: '/login' }, // 首页默认跳转到登录页
  {
    path: '/login',
    name: '登录',
    component: '@/pages/login',
    headerRender: false, //  不展示导航栏
    hideInMenu: true, // 隐藏自己和子菜单
  },
  {
    path: '/home',
    name: '首页',
    component: '@/pages/home',
  },
  {
    path: '/knowledge',
    name: '知识应用',
    component: '@/layouts/sideLayout',
    routes: [
      {
        path: '/knowledge/typeSelect',
        name: '型号选择',
        component: '@/pages/knowledge/typeSelect',
        access: 'needAccess',
      },
      {
        path: '/knowledge/account',
        name: '台账管理',
        hideChildrenInMenu: true, // 隐藏子菜单
        // redirect: '/knowledge/account/purchase',
        routes: [
          {
            path: '/knowledge/account/purchase',
            name: '采购表',
            component: '@/pages/knowledge/account/purchase',
          },
          {
            path: '/knowledge/account/sales',
            name: '销售表',
            component: '@/pages/knowledge/account/sales',
            footerRender: false,
          },
        ],
      },
    ],
  },
];
