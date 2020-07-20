import { RouteConfig } from 'vue-router';

const product: RouteConfig[] = [
  {
    path: '/product',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        meta: {
          title: '客服商品列表'
        },
        path: 'custom',
        component: () => import('pages/product/CustomerService.vue')
      },
      {
        meta: {
          title: '买手商品列表'
        },
        path: 'buyer',
        component: () => import('pages/product/BuyerProducts.vue')
      }
    ]
  }
];

export default product;
