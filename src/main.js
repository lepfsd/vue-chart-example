import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './Router/router.js'

Vue.prototype.$http = axios;


window.EventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')







