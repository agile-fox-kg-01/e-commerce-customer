<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar">
      <b-navbar-brand to="/" class="nav-icon">Ecomm.</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login" v-if="isLogin === false">login</b-nav-item>
          <b-nav-item to="/register" v-if="isLogin === false">register</b-nav-item>
          <b-nav-item right @click="logout" v-if="isLogin === true">Sign Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Navbar',
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$gAuth.signOut()
        .then(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'see you again',
            showConfirmButton: false,
            timer: 1000
          })
          this.$router.push({ path: '/login' })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response}`
          })
        })
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 10px 120px;
}

.nav-icon {
  font-size: 40px;
}
</style>
