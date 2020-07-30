<template>
<div class="col-md-6">
<div class='card' style='width: 18rem;'>
    <img :src='product.image_url' class='card-img-top' alt='...' />
    <div class='card-body'>
      <h5 class='card-title'>{{product.name}}</h5>
      <p
        class='card-text'
      >{{product.price}}</p>
    </div>
    <div class="card-footer text-muted text-center">
      <a href='#' class='btn btn-primary' @click='addToCart(product)'>Add To Bag</a>
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
  data () {
    return {
    }
  },
  methods: {
    addToCart (product) {
      this.$store.dispatch('addToCart', product)
    }
  }
}
</script>
<style scoped>
img {
    height: 250px;
}
.card {
    margin: 15px auto;
}
.card-body {
  height: 130px;
  background-color: #23b5d3;
  color: white;
}
.card-footer {
  background-color: #eef0f2;
}
.btn {
  background-color: #071013 !important;
  border: 0;
  color: white;
}
</style>
