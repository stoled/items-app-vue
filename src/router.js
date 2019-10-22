import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Shop from '@/views/Shop/Shop'
import Item from '@/views/Shop/Item'
import NewItem from '@/views/Shop/NewItem'
import Orders from '@/views/Shop/Orders'
import Login from '@/views/Auth/Login'
import Registration from '@/views/Auth/Registration'


Vue.use(Router)
export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // component: () => import('./views/About.vue')
      component: About
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/shop/item',
      name: 'item',
      component: Item
    },
    {
      path: '/shop/new-item',
      name: 'new-item',
      component: NewItem
    },
    {
      path: '/shop/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    },
    {
      path: '/auth/registration',
      name: 'registration',
      component: Registration
    },
  ]
})