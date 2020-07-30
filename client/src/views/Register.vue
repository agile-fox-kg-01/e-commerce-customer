<template>
<div class="container">
  <div class="row" style="margin-top:150px" >
    <div class="col-sm-6">
      <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_Advb2R.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"></lottie-player>
    </div>
    <div class="col-sm-6">
      <form @submit.prevent="register">
        <h3 style="font-family: 'Piedra', cursive; font-size:32px">REGISTER FORM</h3>
        <router-link :to="{ name: 'Login' }">Login Here</router-link>
        <br><br>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const userInput = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('postRegister', userInput)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Piedra&display=swap');

</style>
