<template>
  <div>
    <Navbar />
    <Banner />
    <LoginModal />
    <CartModal />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import LoginModal from '@/components/LoginModal.vue'
import CartModal from '@/components/CartModal.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Banner,
    LoginModal,
    CartModal
  },
  beforeCreate () {
    this.$store.dispatch('fetchProductData')
  }
}
</script>
