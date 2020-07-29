<template>
    <b-col>
        <b-card
            :title="product.name"
            :img-src="product.image_url"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
        >
            <b-card-text>
            Rp.{{ product.price }}
            </b-card-text>
            <template v-slot:footer>
            <b-button href="#" variant="warning" class="m-1 float-left">Detail</b-button>
            <b-button @click="addToCart" variant="danger" class="m-1 float-right">Add to Cart</b-button>
            </template>
        </b-card>
    </b-col>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    product: Object
  },
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', this.product.id)
    }
  }
}
</script>

<style scoped>
.img-product {
  max-width: 100%;
  height: auto;
}
</style>
