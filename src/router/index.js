import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shipping',
    component: () => import('../views/Shipping.vue')
  },
  {
    path: '/billing',
    name: 'billing',
    component: () => import('../views/Billing.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/Payment.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/Success.vue')
  }      
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
