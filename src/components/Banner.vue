<template>
<div>
    <h1>New Arrival</h1>
    <div class="container">
    <div class='' v-for="(product, index) in productData" :key="index" >
        <ProductCard v-if='index < 3' :product='product'/>
    </div>
  </div>
</div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Banner',
  data () {
    return {
    }
  },
  components: {
    ProductCard
  },
  computed: {
    productData () {
      return this.$store.state.productData
    }
  },
  methods: {
    submitLogin () {
      this.$store.dispatch('submitLogin', this.user)
    }
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
  justify-content: space-between;
}
.btn {
  background-color: #071013 !important;
  border: 0;
  color: white;
}
</style>
