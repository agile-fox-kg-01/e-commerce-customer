<template>
  <div class="row">
    <ProductCard
    v-for="product in products"
    :key="product.id"
    :product="product"
    />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'Products',
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  updated () {
    this.fetchProducts()
  }
}
</script>

<style>
.header{
  padding: 20px;
  background: #fff;
  color: #717171;
}
</style>
