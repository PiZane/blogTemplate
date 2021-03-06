// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    initData
  },
  template: '<app :initData="initData"></app>',
  components: { App }
})
