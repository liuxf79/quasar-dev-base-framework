import { RouteConfig } from 'vue-router';

const main: RouteConfig[] = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        meta:{
          title:'登录信息查看'
        },
        path: 'info',
        component: () => import('pages/Index.vue')
      },
      {
        meta:{
          title:'新增会员商品'
        },
        path:'yshop',
        component:()=>import('pages/main/Yshop.vue')
      }
    ]
  }
];

export default main;
