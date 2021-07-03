import Vuex from 'vuex'
import Vue from 'vue'

import devNinetyEight from './modules/devNinetyEight'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    devNinetyEight
  }
})
