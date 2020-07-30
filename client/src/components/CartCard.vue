<template>
  <!-- <tr>
    <th scope="row">{{ cart.ProductId }}</th>
    <td><img :src="cart.Product.image_url" alt="product.image_url" class="imageku"></td>
    <td>{{ cart.Product.name }}</td>
    <td>{{ cart.Product.price }}</td>
    <td>{{ cart.Product.stock }}</td>
  </tr> -->
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <img :src="cart.Product.image_url" alt="" class="goToDetail">
      <div class="card-body goToDetail">
        <h4 class="card-title">
          {{ cart.Product.name }}
        </h4>
        <strong>Rp. {{ cart.Product.price }}</strong>
        <br>
        <strong>Stock : {{ cart.Product.stock }}</strong>
        <hr>
        <p>Quantity: {{ cart.quantity }}</p>
        <a href="" @click.prevent="deleteCart">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  props: {
    cart: Object
  },
  methods: {
    deleteCart () {
      this.$store.dispatch('deleteCart', {
        ProductId: this.cart.ProductId
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
