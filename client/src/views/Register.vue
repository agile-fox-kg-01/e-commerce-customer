<template>
  <div>
    <Navbar/>
    <b-card class="text-center register register-card">
    <h1 v-if="this.$route.params.role === 'admin'">Register Admin</h1>
    <h1 v-else>Register</h1>
        <b-form @submit.prevent="register" @reset="onReset">
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
    </b-card>
  </div>
</template>

<script>
import axios from '../api/axios'
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar'

export default {
  name: 'register',
  components: {
    Navbar
  },
  data () {
    return {
      data: {
        email: '',
        password: '',
        role: 'customer'
      }
    }
  },
  created () {
    if (this.$route.params.role === 'admin') {
      this.data.role = 'admin'
    } else {
      this.data.role = 'customer'
    }
  },
  methods: {
    register () {
      axios({
        method: 'post',
        url: '/register',
        data: this.data
      })
        .then(res => {
          this.$router.push({ path: '/login' })
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `sucess register with ${res.data.email}`,
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
      this.data.role = null
    }
  }
}
</script>

<style scoped>
@media (min-width: 100px) {
    .register {
        margin: 40px 40px 40px 40px;
        padding: 0px 50px;
    }
}

@media (min-width: 668px) {
    .register {
        margin: 40px 40px 40px 40px;
        padding: 0px 50px;
    }
}

@media (min-width: 992px) {
    .register {
        margin: 40px 300px 40px 300px;
        padding: 0px 50px;
    }
}
.register-card {
    border-radius: 25px;
}
</style>
