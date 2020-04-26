try {
  window.Popper = require('@popperjs/core');
  // window.$ = window.jQuery = require('jquery');
  global.jQuery = require('jquery');
  var $ = global.jQuery;
  window.$ = $;
  require('bootstrap');
  Vue.use({
    install: function(Vue, options){
      Vue.prototype.$ = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
    }
  });
} catch (e) {
  console.log(e);
}
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/mdbvue.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import io from 'socket.io-client';
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import store from './store'

const socket = io('http://localhost:3000');
Vue.prototype.$socket = socket;
Vue.config.productionTip = false

Vue.component('vue-draggable-resizable', VueDraggableResizable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
