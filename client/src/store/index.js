import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'
import router from '../router/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    carts: []
  },
  mutations: {
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    FETCH_PRODUCT (state, payload) {
      state.product = payload
    },
    FETCH_CARTS (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    fetchCarts ({ commit }, payload) {
      // console.log(localStorage.getItem('token'))
      axios({
        methods: 'GET',
        url: '/chart/show',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data.charts)
          commit('FETCH_CARTS', data.charts)
        })
        .catch(console.log)
    },
    addToCart ({ commit }, payload) {
      console.log(payload)
      axios
        .post('/chart/add', {
          quantity: payload.quantity,
          ProductId: payload.ProductId
        })
        .set({ token: localStorage.getItem('token') })
        .then(({ data }) => {
          console.log('Berhasil add to cart')
          commit('FETCH_CHARTS', data)
          router.push({ path: '/cart' })
        })
        .catch(console.log)
    },
    fetchProduct ({ commit }, payload) {
      // console.log(localStorage.getItem('token'))
      axios({
        methods: 'GET',
        url: `/products/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          commit('FETCH_PRODUCT', data)
        })
        .catch(console.log)
    },
    fetchProducts ({ commit }) {
      axios({
        methods: 'GET',
        url: '/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('FETCH_PRODUCTS', data)
        })
        .catch(console.log)
    },
    postLogin (_, payload) {
      console.log(payload)
      axios
        .post('/users/login', {
          email: payload.email,
          password: payload.password
        })
        .then(({ data }) => {
          console.log(data.token)
          localStorage.setItem('token', data.token)
          router.push({ path: '/' })
        })
        .catch(console.log)
    },
    postRegister (_, payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/users/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data.message)
          router.push({ path: '/login' })
        })
        .catch(console.log)
    }

  },
  modules: {
  }
})
