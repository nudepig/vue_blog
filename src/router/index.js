import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Vmain from '@/components/Vmain'
import Vnote from '@/components/Vnote'
import Vlogin from '@/components/Vlogin'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vmain',
      component: Vmain
    },
    {
      path: '/note',
      name: 'Vnote',
      component: Vnote
    },
    {
      path: '/login',
      name: 'Vlogin',
      component: Vlogin
    }
  ]
})
