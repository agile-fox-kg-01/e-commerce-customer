import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Login' && !localStorage.getItem('token')) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name === 'Login' && localStorage.getItem('token')) next({ name: 'Home' })
      else next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name === 'Register' && localStorage.getItem('token')) next({ name: 'Home' })
      else next()
    }
  },
  {
    path: '/detailProduct/:id',
    name: 'DetailProduct',
    component: () => import(/* webpackChunkName: "detailProduct" */ '../views/DetailProduct.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Login' && !localStorage.getItem('token')) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Login' && !localStorage.getItem('token')) next({ name: 'Login' })
      else next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
