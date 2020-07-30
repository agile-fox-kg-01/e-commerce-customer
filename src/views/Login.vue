<template>
  <div class="main-container">
      <div class="login-form">
          <div class="form-content">
              <div class="form-header">
                  <h4 class="form-title">Login</h4>
              </div>
              <div class="form-body">
                  <form action="" @submit.prevent="login">
                      <div class="form-group">
                          <div class="input-group">
                              <input type="email" class="form-control" v-model="email" placeholder="Email">
                          </div>
                      </div>
                      <div class="form-group">
                          <div class="input-group">
                              <input type="password" class="form-control" v-model="password" placeholder="Password">
                          </div>
                      </div>
                      <div class="form-group">
                          <button type="submit" class="btn btn-block btn-primary">Login</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10px - 17px);
}
.login-form {
  width: 350px;
}
.login-form .form-content {
  padding: 20px;
  border-radius: 5px;
  border: none;
}
.login-form .form-header {
  border-bottom: none;
  position: relative;
  justify-content: center;
}
.login-form h4 {
  color: #636363;
  text-align: center;
  font-size: 26px;
  margin-top: 0;
}
.login-form .form-content {
  color: #999;
  border-radius: 1px;
  margin-bottom: 15px;
  background: #fff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 25px;
}
.login-form .form-group {
  margin-bottom: 20px;
}
.login-form .form-control {
  min-height: 38px;
  padding-left: 5px;
  box-shadow: none !important;
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.login-form .form-control:focus {
  border-color: #ccc;
}
.login-form .btn, .login-form .btn:active {
  font-size: 16px;
  font-weight: bold;
  background: #19aa8d !important;
  border-radius: 3px;
  border: none;
  min-width: 140px;
}
.login-form .btn:hover, .login-form .btn:focus {
  background: #179b81 !important;
}
.login-form .form-footer {
  color: #999;
  border-color: #dee4e7;
  text-align: center;
  margin: 0 -25px -25px;
  font-size: 13px;
  justify-content: center;
}
.login-form a {
  color: #fff;
  text-decoration: underline;
}
.login-form a:hover {
  text-decoration: none;
}
.login-form a {
  color: #19aa8d;
  text-decoration: none;
}
.login-form a:hover {
  text-decoration: underline;
}
</style>
