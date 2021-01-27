<template>
  <div class="container-fluid d-flex">
    <div class="col-7 left">
      <router-link to="/">
      <img src="../assets/shopa2.png" alt="">
      </router-link>
    </div>
    <div class="col-5 right d-flex">
      <div class='icon'>
        <router-link to="/carts">
        <i class="fas fa-cart-plus fa-3x"></i>
        </router-link>
      </div>
      <div>
        <router-link to="/login">
          <h3 v-if="!token">login</h3>
        </router-link>
      </div>
      <div>
        <router-link to="/login">
          <h3 v-if="token" @click.prevent="logout">logout</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      token: localStorage.getItem('access_token')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.token = null
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
  .container-fluid{
    background: hsla(0, 100%, 100%, 1);
    background: radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
    background: -moz-radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
    background: -webkit-radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ffc8c8", endColorstr="#ff5858", GradientType=1 );
    height: 80px;
  }
  img{
    width: 180px;
    height: 80px;
  }
  h3{
    color:#3282b8;
    margin-left:15px;
  }
  .left{
    margin-left:5px;
  }
  .icon{
    margin-top:15px;
    margin-right: 20px;
    color: #FFC8C8
  }
</style>
