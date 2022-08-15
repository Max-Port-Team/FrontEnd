import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import dayjs from 'dayjs';
// vue.prototype.dayjs = dayjs;
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  // beforeCreate() {
  //   Vue.prototype.$bus = this
  // },
}).$mount('#app')
