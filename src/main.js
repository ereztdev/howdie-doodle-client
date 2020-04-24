import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/mdbvue.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import io from 'socket.io-client';
try {
  window.Popper = require('@popperjs/core');
  window.$ = window.jQuery = require('jquery');

  require('bootstrap');
} catch (e) {
  console.log(e);
}
const socket = io('http://localhost:3000');
Vue.prototype.$socket = socket;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
