import { RouteConfig } from 'vue-router';
import main from './main'
import product from './product'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('pages/Login.vue')
  },
  ...main,
  ...product,
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });

}

export default routes;
