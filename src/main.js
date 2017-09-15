// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*移动端适配方案*/
import './assets/js/rem2px.js'  

/*引入mintUI*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
