import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ShopMall from '@/components/pages/ShopMail'
import voddetail from '@/components/pages/voddetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShopMall',
      component: ShopMall
    }, {
      path: '/voddetail', name: 'voddetail', component: voddetail
    }
  ]
})
