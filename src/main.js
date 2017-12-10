/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import store from './store/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import './icon/iconfont.css'

// 将axios添加到vue的原型中
Vue.prototype.$http = axios
Vue.use(vuex)
Vue.use(MintUI)
Vue.config.productionTip = false
// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/search' || to.path === '/myset') {
    store.state.broadcastBol = false
  } else {
    store.state.broadcastBol = true
  }
  next()
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
