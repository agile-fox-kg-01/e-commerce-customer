<template>
  <div class="main-container">
    <div class="register-form">
      <div class="form-content">
        <div class="form-header">
          <h4 class="form-title">Register</h4>
        </div>
        <div class="form-body">
          <form action="" @submit.prevent="register">
            <div class="form-group">
              <div class="input-group">
                <input type="name" class="form-control" v-model="name" placeholder="Name">
              </div>
            </div>
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
              <button type="submit" class="btn btn-block btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        name: this.name,
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
.register-form {
  width: 350px;
}
.register-form .form-content {
  padding: 20px;
  border-radius: 5px;
  border: none;
}
.register-form .form-header {
  border-bottom: none;
  position: relative;
  justify-content: center;
}
.register-form h4 {
  color: #636363;
  text-align: center;
  font-size: 26px;
  margin-top: 0;
}
.register-form .form-content {
  color: #999;
  border-radius: 1px;
  margin-bottom: 15px;
  background: #fff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 25px;
}
.register-form .form-group {
  margin-bottom: 20px;
}
.register-form .form-control {
  min-height: 38px;
  padding-left: 5px;
  box-shadow: none !important;
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.register-form .form-control:focus {
  border-color: #ccc;
}
.register-form .btn, .register-form .btn:active {
  font-size: 16px;
  font-weight: bold;
  background: #19aa8d !important;
  border-radius: 3px;
  border: none;
  min-width: 140px;
}
.register-form .btn:hover, .register-form .btn:focus {
  background: #179b81 !important;
}
.register-form .form-footer {
  color: #999;
  border-color: #dee4e7;
  text-align: center;
  margin: 0 -25px -25px;
  font-size: 13px;
  justify-content: center;
}
.register-form a {
  color: #fff;
  text-decoration: underline;
}
.register-form a:hover {
  text-decoration: none;
}
.register-form a {
  color: #19aa8d;
  text-decoration: none;
}
.register-form a:hover {
  text-decoration: underline;
}
</style>
