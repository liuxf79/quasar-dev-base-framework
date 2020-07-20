import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import g from './g';

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store({
    modules: {
      g
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  });
  return Store;
});
