import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import App from './App.vue'
import store from './services/store'

Vue.config.productionTip = false
Vue.use(VueTailwind, {})



new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
