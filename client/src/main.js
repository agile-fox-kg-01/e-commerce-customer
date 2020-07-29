import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GAuth from 'vue-google-oauth2'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const gauthOption = {
  clientId: '941386381500-jt7tl5lid1kmjgtkjm28bjg4d4a4viej.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
