import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)

import posts from "./modules/posts";

export default new Vuex.Store({
    modules: {
        posts
    }
})
