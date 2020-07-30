<template>
  <div class="home">
    <Navbar />
    <div class="container">
    </div>
    <div style="margin-top:100px">
      <Header />
      <div class="container">
        <Carts />
      </div>

    </div>
    <div class="footer" style="margin-top:100px" >

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Carts from '@/components/Carts.vue'

export default {
  name: 'Cart',
  components: {
    Navbar,
    Header,
    Carts
  }
}
</script>

<style>

</style>
