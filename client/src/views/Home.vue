<template>
  <div>
    <Navbar/>
    <div class="home">
      <b-nav tabs class="category-nav">
        <b-nav-item to="/" active>All Product</b-nav-item>
        <b-nav-item to="/cart">Your Cart</b-nav-item>
      </b-nav>
      <b-container fluid>
        <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="4" class="product-index">
          <ProductList
          v-for="product in products"
          :key="product.id"
          :product="product"/>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductList
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>
.home {
  padding: 10px 10px;
}
.category-nav {
  padding: 0px 100px;
}
.product-index {
  margin: 20px 70px;
}
</style>
