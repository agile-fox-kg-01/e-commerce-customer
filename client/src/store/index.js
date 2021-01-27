import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../api/axios'
import router from '../router/index'
import Swal from 'sweetalert2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    category: [],
    carts: []
  },
  mutations: {
    FETCH_CATEGORIES (state, payload) {
      state.categories = payload
    },
    FETCH_DATA_CATEGORY (state, payload) {
      state.category = payload
    },
    FETCH_CARTS (state, payload) {
      state.carts = payload
    },
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  actions: {
    register ({ commit }, payload) {
      axios({
        url: '/customers/register',
        method: 'post',
        data: {
          fullname: payload.fullname,
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          Swal.fire({
            position: 'top-middle',
            icon: 'success',
            title: 'Successfully register, login to continue !',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/login')
        })
        .catch(err => {
          // console.log(err.response.data)
          Swal.fire({
            icon: 'error',
            text: `${err.response.data.error}`
          })
        })
    },
    login ({ commit }, payload) {
      axios({
        url: '/customers/login',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          console.log('login success')
          localStorage.setItem('access_token', response.data.token)
          router.push('/')
          Swal.fire({
            position: 'top-middle',
            icon: 'success',
            title: 'Successfully login !',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          // console.log('login failed', err.response.data)
          Swal.fire({
            icon: 'error',
            text: `${err.response.data.error}`
          })
        })
    },
    async fetchCategories ({ commit }) {
      await axios({
        url: '/products/categories',
        method: 'get'
      })
        .then(response => {
          console.log('fecth categories success')
          commit('FETCH_CATEGORIES', response.data)
        })
        .catch(err => {
          console.log('login failed', err.response)
        })
    },
    async fetchDataCategory ({ commit }, payload) {
      // console.log('masuk sini', payload)
      await axios({
        url: '/customers/carts/category',
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          categoryName: payload
        }
      })
        .then(response => {
          // console.log('success fetch data by category')
          commit('FETCH_DATA_CATEGORY', response.data)
          router.push('/category')
        })
        .catch(err => {
          console.log('failed fetch data by category', err.response)
          Swal.fire({
            icon: 'error',
            text: 'Please login to continue!'
          })
        })
    },
    addToCarts ({ commit }, payload) {
      axios({
        url: '/customers/carts/add',
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          productId: payload.id,
          quantity: 1,
          price: payload.price
        }
      })
        .then(response => {
          console.log('success add to carts')
          Swal.fire({
            position: 'top-middle',
            icon: 'success',
            title: 'Item added to your cart!',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log('failed add to carts', err.data)
        })
    },
    fetchDataCarts ({ commit }) {
      axios({
        url: '/customers/carts',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log('success fetching data carts')
          commit('FETCH_CARTS', response.data)
        })
        .catch(err => {
          console.log('failed fetching data carts', err.data)
        })
    },
    checkingOut ({ commit, dispatch }) {
      axios({
        url: '/customers/carts/checkout',
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log('success checking out')
          dispatch('fetchDataCarts')
        })
        .catch(err => {
          console.log('checking out failed', err.response.data.error)
          Swal.fire({
            icon: 'error',
            text: err.response.data.error
          })
        })
    },
    editQuantity ({ commit, dispatch }, payload) {
      axios({
        url: `/customers/carts/edit/${payload.id}`,
        method: 'patch',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          product: payload
        }
      })
        .then(response => {
          console.log('success edit quantity', response.data)
          dispatch('fetchDataCarts')
        })
        .catch(err => {
          console.log('failed edit quantity', err.response.data)
        })
    },
    deleteCart ({ commit, dispatch }, payload) {
      axios({
        url: `/customers/carts/delete/${payload.id}`,
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log('success delete cart')
          Swal.fire({
            position: 'top-middle',
            icon: 'success',
            title: 'Item deleted from your cart!',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch('fetchDataCarts')
        })
        .catch(err => {
          console.log('failed delete cart', err.response)
          Swal.fire({
            icon: 'error',
            text: err.response.data
          })
        })
    },
    async fetchAllProducts ({ commit }) {
      await axios({
        url: '/products/customers',
        method: 'get'
      })
        .then(response => {
          console.log('success fetch all products', response.data)
          commit('FETCH_PRODUCTS', response.data)
        })
        .catch(err => {
          console.log('failed fetch all products', err.response)
        })
    }
  },
  modules: {
  }
})
