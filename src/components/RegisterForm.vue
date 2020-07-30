<template>
  <div class='login-form card'>
    <form class='text-center border border-light p-5' action='#!'>
      <p class='h4 mb-4'>Sign Up</p>
      <label for='register-email'>Email</label>
      <input
        type='text'
        id='register-email'
        class='form-control mb-4'
        placeholder='Email'
        v-model='user.email'
      />
      <label for='register-password'>Password</label>
      <input
        type='password'
        id='register-password'
        class='form-control mb-4'
        placeholder='Password'
        v-model='user.password'
      />
      <button class='btn btn-block my-4' type='submit' @click.prevent='submitRegister'>Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'RegisterForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
  },
  methods: {
    submitRegister () {
      this.$store.dispatch('submitRegister', this.user)
    }
  }
}
</script>

<style scoped>
.login-form {
  width: 30%;
  margin: 10px auto;
}
.login-form label {
  display: flex;
}
.btn {
  background-color: #363636 !important;
  border: 0;
  color: white;
}
</style>
