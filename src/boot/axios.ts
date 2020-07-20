import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';
import { Cookies } from 'quasar';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

//拦截器
axios.interceptors.request.use(
  function(config) {
    console.log(config.url, 'this is intercepters');
    // const token = Cookies.get('token') || '';
    const token="abc"
    config.params = config.params || {};
    config.params.token = token;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default boot(({ Vue }) => {
  Vue.prototype.$axios = axios;
});
