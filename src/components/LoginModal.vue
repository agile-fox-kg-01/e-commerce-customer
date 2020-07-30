<template>
  <div>
    <div
      class='modal fade'
      id='modal-user-login'
      tabindex='-1'
      role='dialog'
      aria-labelledby='myModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h4 class='modal-title font-weight-bold'>Sign In</h4>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div class='modal-body mx-3 text-left font-weight-bold'>
            <form class='text-center border border-light p-5' action='#!'>
              <label for='login-email'>Email</label>
              <input
                type='text'
                id='login-email'
                class='form-control mb-4'
                placeholder='Email'
                v-model='user.email'
              />
              <label for='login-password'>Password</label>
              <input
                type='password'
                id='login-password'
                class='form-control mb-4'
                placeholder='Password'
                v-model='user.password'
              />
              <button class='btn btn-block my-4' type='submit' @click.prevent='submitLogin' data-dismiss="modal">Sign in</button>
              <p>Not a member?
                <router-link to="/register"><a href='' data-dismiss="modal">Register</a></router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  props: {
    showModal: Boolean
  },
  computed: {
    successLogin () {
      return this.$store.state.successLogin
    }
  },
  methods: {
    submitLogin () {
      this.$store.dispatch('submitLogin', this.user)
    },
    emptyAddForm () {
      this.newProduct = {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    },
    beforeCreate () {
    }
  }
}
</script>

<style scoped>
.main-color {
  background-color: #b6eb7a;
  border: 0;
}
.btn-info {
  background-color: #363636 !important;
  border: 0;
}
.btn {
  background-color: #23b5d3 !important;
  border: 0;
  color: white;
}
</style>
