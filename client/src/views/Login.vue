<template>
  <div>
    <img @click.prevent="goHome" src='../assets/shopa.png' alt="">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  img{
    width: 150px;
    height:80px;
    margin: 10px 40px;
  }

</style>
