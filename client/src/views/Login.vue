<template>
  <div>
    <Navbar/>
    <b-card class="text-center login login-card">
    <h1>Login</h1>
        <b-form @submit.prevent="login" @reset="onReset">
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                <b-form-input
                id="input-1"
                type="email"
                v-model="data.email"
                required
                placeholder="email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input
                id="input-2"
                type="password"
                v-model="data.password"
                required
                placeholder="password"
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="m-1">Submit</b-button>
            <b-button type="reset" variant="danger" class="m-1">Reset</b-button>
        </b-form>
        <b-button @click="googlesignin" variant="warning" class="fa fa-google m-1"> SignIn</b-button>
    </b-card>
  </div>
</template>

<script>
import axios from '../api/axios'
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar'

export default {
  name: 'login',
  components: {
    Navbar
  },
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios({
        method: 'post',
        url: '/login',
        data: this.data
      })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          this.$router.push({ path: '/' })
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `sucess login with ${res.data.email}`,
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response.data.errors}`
          })
        })
    },
    googlesignin () {
      this.$gAuth.signIn().then(token => {
        const googletoken = token.getAuthResponse()
        return axios({
          method: 'post',
          url: '/login/google',
          headers: {
            google_token: googletoken.id_token
          }
        })
      })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          this.$router.push({ path: '/' })
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `sucess login with ${res.data.email}`,
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response.data.errors}`
          })
        })
    },
    onReset () {
      this.data.email = ''
      this.data.password = ''
    }
  }
}
</script>

<style scoped>
@media (min-width: 100px) {
  .login {
    margin: 40px 40px 40px 40px;
    padding: 0px 50px;
  }
}

@media (min-width: 668px) {
  .login {
    margin: 40px 40px 40px 40px;
    padding: 0px 50px;
  }
}

@media (min-width: 992px) {
  .login {
    margin: 40px 300px 40px 300px;
    padding: 0px 50px;
  }
}
.login-card {
  border-radius: 25px;
}
</style>
