<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <img @click="goToDetail" :src="product.image_url" alt="" class="goToDetail">
      <div @click="goToDetail" class="card-body goToDetail">
        <h4 class="card-title">
          {{ product.name }}
        </h4>
        <strong>Rp. {{ product.price }}</strong>
      </div>
      <div class="px-4 pb-3">
        <button @click="addToCart" class="btn btn-secondary">Add to chart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    goToDetail () {
      this.$store.dispatch('fetchProduct', {
        id: this.product.id
      })
      this.$router.push({ path: `/detailProduct/${this.product.id}` })
    },
    addToCart () {
      this.$store.dispatch('addToCart', {
        quantity: 1,
        ProductId: this.product.id
      })
    }
  }
}
</script>

<style>
.imageku{
  width: 60px;
  height: 40px;
}
.goToDetail {
  cursor: pointer;
}
</style>
