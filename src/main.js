import Vue from 'vue'
import App from './App.vue'


import router from './Router/router.js'


window.EventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')







