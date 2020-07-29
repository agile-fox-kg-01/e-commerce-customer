<template>
    <b-col cols="12" class="mb-2">
        <b-card no-body class="overflow-hidden" style="max-height: 150px;">
            <b-row no-gutters>
            <b-col md="3">
                <b-card-img :src="cart.Product.image_url" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="9">
                <b-card-body :title="cart.Product.name" class="text-left">
                    <b-card-text>
                        Rp.{{ cart.Product.price }}
                    </b-card-text>
                    <b-button @click="deleteCart" variant="danger" class="float-right">Delete</b-button>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>
    </b-col>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    cart: Object
  },
  methods: {
    deleteCart () {
      this.$store.dispatch('deleteCart', this.cart.id)
    }
  }
}
</script>

<style scoped>
</style>
