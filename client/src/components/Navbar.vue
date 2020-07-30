<template>
  <div class="mynavbar navbar fixed-top">
    <div @click="goToHome" class="mylogo">
      <p>E-COMMERSE <span style="font-weight:bold;">ICHLAS</span></p>
    </div>
    <div class="mynavigasi">
      <!-- <a href="" class="btn btn-primary">Created by <img src="../assets/logo.png" alt="" width="30" height="30" ></a> -->
      <a href="" class="btn btn-" @click.prevent="logout">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goToHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
.mylogo {
  cursor: pointer;
}

</style>
