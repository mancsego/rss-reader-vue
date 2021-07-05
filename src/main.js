import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './services/store'
import './assets/styles.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('./components/feed/FeedTemplate') },
  { path: '/post/:post_id', component: () => import('./components/post/PostTemplate') }
]
const router = new VueRouter({ routes })
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
