import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productData: [],
    successLogin: false,
    cart: []
  },
  mutations: {
    FETCH_PRODUCT_DATA (state, payload) {
      state.productData = []
      state.productData = payload
    },
    SUCCESS_LOGIN (state) {
      state.successLogin = true
    },
    ADD_TO_CART (state, payload) {
      const currentItem = payload
      let duplicateItem = false
      state.cart.forEach(item => {
        if (item.name === payload.name) {
          duplicateItem = true
        }
      })
      if (duplicateItem === false) {
        currentItem.quantity = 1
        state.cart.push(currentItem)
      }
    },
    ADD_QUANTITY_ITEM_CART (state, payload) {
      const index = state.cart.findIndex(item => item.name === payload)
      Vue.set(state.cart[index], 'quantity', state.cart[index].quantity + 1)
    },
    REDUCE_QUANTITY_ITEM_CART (state, payload) {
      const index = state.cart.findIndex(item => item.name === payload)
      Vue.set(state.cart[index], 'quantity', state.cart[index].quantity - 1)
    },
    REMOVE_ITEM_CART (state, payload) {
      state.cart = state.cart.filter(item => item.name !== payload)
    },
    REMOVE_ALL_CART (state) {
      state.cart = []
    }
  },
  actions: {
    async fetchProductData ({ commit }) {
      axios.get('/product')
        .then(response => {
          commit('FETCH_PRODUCT_DATA', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    submitRegister ({ commit }, user) {
      axios.post('/user/register', {
        email: user.email,
        password: user.password
      })
        .then(response => {
          console.log(response.data)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    submitLogin ({ commit }, user) {
      axios.post('/user/login', {
        email: user.email,
        password: user.password
      })
        .then(response => {
          console.log(response.data)
          localStorage.setItem('token', response.data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      localStorage.removeItem('token')
    },
    addToCart ({ commit }, item) {
      commit('ADD_TO_CART', item)
    },
    addQuantityItemCart ({ commit }, itemName) {
      commit('ADD_QUANTITY_ITEM_CART', itemName)
    },
    reduceQuantityItemCart ({ commit }, itemName) {
      commit('REDUCE_QUANTITY_ITEM_CART', itemName)
    },
    removeItemCart ({ commit }, itemName) {
      commit('REMOVE_ITEM_CART', itemName)
    },
    removeAllCart ({ commit }) {
      commit('REMOVE_ALL_CART')
    }
  },
  modules: {
  }
})
