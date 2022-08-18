import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';//引入element
// import 'element-ui/lib/theme-chalk/index.css';//引入element
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)
Vue.config.productionTip = false
// Vue.use(ElementUI);  //引入element
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
