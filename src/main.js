import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import './plugins/iview.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
