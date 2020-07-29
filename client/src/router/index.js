import Vue from 'vue'
import VueRouter from 'vue-router'
import Swal from 'sweetalert2'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import SingleProduct from '../views/SingleProduct'
import Cart from '../views/Cart.vue'
import Transaction from '../views/Transaction.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next({ path: '/' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next({ path: '/' })
      } else {
        next()
      }
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: SingleProduct
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next({ path: '/login' })
        Swal.fire({
          icon: 'error',
          title: 'Oops...login first to access cart',
          showConfirmButton: false,
          timer: 1000
        })
      }
    }
  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: Transaction,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next({ path: '/login' })
        Swal.fire({
          icon: 'error',
          title: 'Oops...login first to access transaction',
          showConfirmButton: false,
          timer: 1000
        })
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
