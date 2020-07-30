import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems: [],
    isLoggedIn: false,
    categories: [],
    products: []
  },
  mutations: {
    FETCH_CART (state, payload) {
      state.cartItems = payload.CartProducts
    },
    FETCH_CATEGORIES (state, payload) {
      state.categories = payload
    },
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_LOGINSTATUS (state, payload) {
      state.isLoggedIn = payload
    },
    // inCart (state, n) { // Cart Component
    //   return state.cartItems.push(n)
    // },
    outCart (state, n) { // Cart Component
      const index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo (state, n) { // Info Component
      return state.infoPage.push(n)
    }
  },
  actions: {
    addToCart (context, payload) {
      axios({
        method: 'POST',
        url: '/cart',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          products: [payload]
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteProductInCart (context, payload) {
      axios({
        method: 'PUT',
        url: `/cart/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchCart ({ commit }) {
      axios({
        method: 'GET',
        url: '/cart',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('FETCH_CART', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchCategories ({ commit }) {
      axios({
        method: 'GET',
        url: '/category'
      })
        .then(({ data }) => {
          commit('FETCH_CATEGORIES', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: '/product'
      })
        .then(({ data }) => {
          commit('FETCH_PRODUCTS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    login ({ commit }, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          commit('SET_LOGINSTATUS', true)
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    register ({ commit }, payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
        .then(({ data }) => {
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  },
  getters: {
    itemsNumber (state) { // Cart Component
      return state.cartItems.length
    },
    totalPrice (state) { // Cart Component
      if (state.cartItems.length !== 0) {
        return state.cartItems.reduce((a, b) => {
          return (b.Product.price == null) ? a : a + b.Product.price
        }, 0)
      }
    },
    infoLength (state) { // Info Component
      if (state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  }
})
