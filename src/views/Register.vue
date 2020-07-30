<template>
  <div>
    <Navbar />
    <RegisterForm />
    <LoginModal />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import LoginModal from '@/components/LoginModal.vue'

export default {
  name: 'Register',
  components: {
    Navbar,
    RegisterForm,
    LoginModal
  },
  beforeCreate () {
    this.$store.dispatch('fetchProductData')
  }
}
</script>
