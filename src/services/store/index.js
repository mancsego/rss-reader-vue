import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)

import devNinetyEight from "./modules/devNinetyEight";

export default new Vuex.Store({
    modules: {
        devNinetyEight
    }
})
