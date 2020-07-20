import { route } from 'quasar/wrappers';
import VueRouter from 'vue-router';
import routes from './routes';
import { Cookies } from 'quasar';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default route(function({ Vue }) {
  Vue.use(VueRouter);

  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  function locationToLogin(fullpath: string) {
    Router.push({
      path: '/',
      query: {
        redirect: fullpath
      }
    }).catch(err=>{
      console.log(err)
    });
  }

  Router.beforeEach((to, from, next) => {
    // const token = Cookies.get('token');
    const token = 'abc'
    if (!token && to.path != '/') {
      next(locationToLogin(to.fullPath));
    }
    let title = '衣二三管理后台'
    if(to.meta.title){
      title = to.meta.title
    }
    // document.title = title;
    next();
  });

  return Router;
});
