<template>
  <div class="container-fluid d-flex">
    <div v-if="!isRegister" class="login-form">
      <div class="icon-login">
        <i class="fas fa-users fa-5x"></i>
      </div>
      <form @submit.prevent="login">
        <div class="col-12">
          <label for="email" />
          <input id="email" type="text" placeholder="email" v-model="email" />
        </div>
        <div class="col-12">
          <label for="password" />
          <input id="password" type="password" placeholder="password" v-model="password" />
        </div>
        <div class="col-12 div-button">
          <button type="submit">login</button>
        </div>
      </form>
      <div class="div-bottom">
        <h3 @click.prevent="goRegister">Not register yet?</h3>
        <p>@ 2020-2021</p>
      </div>
    </div>
    <!-- register -->
    <div v-if="isRegister" class="register-form">
      <div class="icon-register">
        <h2>REGISTER</h2>
      </div>
      <form @submit.prevent="register">
        <div class="col-12">
          <label for="fullname" />
          <input id="fullname" type="text" placeholder="fullname" v-model="fullname" />
        </div>
        <div class="col-12">
          <label for="email" />
          <input id="email" type="text" placeholder="email" v-model="emailRegis" />
        </div>
        <div class="col-12">
          <label for="password" />
          <input id="password" type="password" placeholder="password" v-model="passwordRegis" />
        </div>
        <div class="col-12 div-button d-flex flex-column">
          <button type="submit">sign in</button>
          <p>or</p>
          <button class="button-to-login" @click.prevent="goLogin" type="submit">login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      fullname: '',
      email: '',
      password: '',
      emailRegis: '',
      passwordRegis: '',
      isRegister: false
    }
  },
  methods: {
    login () {
      const userLogin = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', userLogin)
    },
    goRegister () {
      this.isRegister = true
    },
    register () {
      const data = {
        fullname: this.fullname,
        email: this.emailRegis,
        password: this.passwordRegis
      }
      this.$store.dispatch('register', data)
      this.fullname = ''
      this.emailRegis = ''
      this.passwordRegis = ''
      this.isRegister = false
    },
    goLogin () {
      this.isRegister = false
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .container-fluid{
    background: hsla(0, 100%, 89%, 1);
    background: radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
    background: -moz-radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
    background: -webkit-radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ffc8c8", endColorstr="#ff5858", GradientType=1 );
    height: 450px;
    justify-content: center;
  }
  .login-form {
    margin-top: 60px;
    width: 400px;
    height:330px;
    background-color: #FFC0C0;
    opacity:0.8;
  }
  form{
    position: relative;
    margin: 30px;
    text-align: center;
  }
  input {
    margin-bottom: 10px;
    color:#f45b69;
    outline: none;
    font-size: 17px;
    width: 300px;
    height: 30px;
    padding-left:10px;
  }
  button {
    text-align: center;
    background-color:#f45b69;
    width: 300px;
    font-size: 20px;
    color:white;
  }
  button:hover {
    background-color: #fa9372;
    color:white;
  }
  p{
    width:25%;
    border-radius: 5px;
    font-size: 13px;
    color:#f45b69;
    margin: auto;
  }
  .icon-login{
    text-align: center;
    color:#3282b8;
    padding-top:20px;
  }
  .col-12{
    margin:auto;
  }
  .div-button{
    text-align: center;
  }
  h3{
    text-align: center;
    color:#3282b8;
    font-family: 'Caveat', cursive;
  }
  h3:hover{
    color:#0f4c75;
  }
  .register-form {
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: white;
    text-align: left;
  }
  h2{
    margin-left: 50px;
    margin-top: 50px;
    color: #0f4c75;
  }
  .flex-column button {
    margin: 5px;
  }
  .flex-column p {
    font-size: 20px;
    color: #0f4c75;
  }
  .button-to-login{
    background-color:#3282b8;
  }
  .button-to-login:hover{
    background-color:#0f4c75;
  }
</style>
