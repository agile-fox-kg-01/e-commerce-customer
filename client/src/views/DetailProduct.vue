<template>
  <div class="home">
    <Navbar />
    <div class="container">
    </div>
    <div style="margin-top:100px">
      <Header />
      <div class="container">
        <Product :product="product" />
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Product from '@/components/Product.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    Product
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct', {
        id: this.$route.params.id
      })
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  }
}
</script>

<style>

</style>
