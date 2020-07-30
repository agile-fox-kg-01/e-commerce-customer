<template>
  <div class="row">
    <!-- <div class="col-3 mt-3">
    </div> -->
    <div class="col-6 mt-3 offset-3">
      <div class="card h-100 text-left">
        <img :src="product.image_url" alt="" class="goToDetail">
        <div class="card-body goToDetail">
          <h4 class="card-title">
            {{ product.name }}
          </h4>
          <strong>Rp. {{ product.price }}</strong>
        </div>
        <span style="margin-bottom:10px; margin-left: 20px;">Quantity</span>

        <div class="row">
          <div class="col-6">
            <form action="">
              <input v-model="quantity" type="text" style="padding: 8px 20px; margin-left: 20px; border:0; background-color:#ff1; border-radius:5px;" placeholder="Quantity">
            </form>
          </div>
          <div class="col-6">
            <div class="px-4 pb-3">
              <button @click="addToCart" class="btn btn-secondary">Add to chart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object
  },
  data () {
    return {
      quantity: 1
    }
  },
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', {
        quantity: this.quantity,
        ProductId: this.product.id
      })
    }
  }

}
</script>

<style>

</style>
