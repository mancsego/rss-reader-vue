import Vuex from 'vuex'
import Vue from 'vue'

import feed from './modules/feed'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    feed
  }
})
