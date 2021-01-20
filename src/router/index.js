import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  //base: '/folders/vue/',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
