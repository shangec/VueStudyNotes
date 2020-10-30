import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App)
  render: function(h) {
     return h(App)
  }
})

// render -> vdom -> UI
// 那么.vue文件中的template是由谁处理的？
// 是由vue-template-compiler