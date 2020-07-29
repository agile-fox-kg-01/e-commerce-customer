import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    product: {}
  },
  mutations: {
    FETCHPRODUCTS (state, payload) {
      state.products = payload
    },
    RESETPRODUCTS (state) {
      state.products = []
    },
    FETCHONEPRODUCT (state, payload) {
      state.product = payload
    },
    ADDTOCART (state, payload) {
      state.carts.push(payload)
    },
    FETCHCART (state, payload) {
      state.carts = payload
    },
    RESETCART (state, payload) {
      state.carts = []
    },
    DELETEFAV (state, payload) {
      state.carts = state.carts.filter(carts => carts.id !== payload)
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios({
        method: 'get',
        url: '/'
      })
        .then(res => {
          commit('FETCHPRODUCTS', res.data)
        })
        .catch(err => {
          commit('RESETPRODUCTS')
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response.data.errors}`,
            text: 'please contact developers ^^'
          })
        })
    },
    fetchOneProduct ({ commit }, payload) {
      axios({
        method: 'get',
        url: `/product/${payload}`
      })
        .then(res => {
          commit('FETCHONEPRODUCT', res.data)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response.data.errors}`,
            text: 'please contact developers ^^'
          })
        })
    },
    addToCart ({ commit }, payload) {
      axios({
        method: 'post',
        url: `/addToCart/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(res => {
          commit('ADDTOCART', res.data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'sucess add to cart',
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response.data.errors}`,
            text: 'please contact developers ^^'
          })
        })
    },
    fetchCart ({ commit }) {
      axios({
        method: 'get',
        url: '/carts',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(res => {
          commit('FETCHCART', res.data)
        })
        .catch(err => {
          commit('RESETCART')
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.errors
          })
        })
    },
    deleteCart ({ commit }, payload) {
      axios({
        method: 'delete',
        url: `/carts/delete/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(res => {
          commit('DELETEFAV', payload)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success delete item in your cart',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.errors
          })
        })
    }
  },
  modules: {
  }
})
