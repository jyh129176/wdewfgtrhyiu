// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入axios
import axios from 'axios'
Vue.prototype.axios=axios
//引入element-ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
//引入swiper
import "swiper/dist/css/swiper.css"
import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  beforeCreate(){
    Vue.prototype.bus = this;
  },

  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
