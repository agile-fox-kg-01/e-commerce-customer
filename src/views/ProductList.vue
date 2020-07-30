<template>
  <div>
    <Navbar />
    <h1>All Product</h1>
    <div class="container">
      <div  v-for="(product, index) in productData" :key="index" >
      <ProductCard :product='product'/>
      </div>
    </div>
    <LoginModal />
    <CartModal />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ProductCard from '@/components/ProductCard.vue'
import LoginModal from '@/components/LoginModal.vue'
import CartModal from '@/components/CartModal.vue'

export default {
  name: 'ProductList',
  components: {
    Navbar,
    ProductCard,
    LoginModal,
    CartModal
  },
  computed: {
    productData () {
      return this.$store.state.productData
    }
  },
  beforeCreate () {
    this.$store.dispatch('fetchProductData')
  }
}
</script>

<style scoped>
.container {
  height: 30%;
  margin: 10px auto;
  /* background-color: #dfe0e2 !important; */
  display: flex;
  flex-flow: row wrap;
  /* justify-content: space-between; */
}
</style>
