// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button, Row, Col, Search, Swipe, SwipeItem, Lazyload, NavBar, Icon} from 'vant'
import 'videojs-contrib-hls'
// import 'videojs-flash'
import axios from './util/http'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(Row).use(Col).use(Button).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(NavBar).use(Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
