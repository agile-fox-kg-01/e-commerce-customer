<template>
    <b-col cols="12" class="mb-2">
        <b-card no-body class="overflow-hidden" style="max-height: 150px;">
            <b-row no-gutters>
            <b-col cols="3" class="my-auto mx-auto">
                <b-card-img :src="cart.Product.image_url" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col cols="6" class="my-auto mx-auto">
                <b-card-body :title="cart.Product.name" class="text-left">
                    <b-card-text>
                        {{ cart.Product.price.toLocaleString("id-ID", { style:"currency", currency: "IDR" }) }}
                    </b-card-text>
                </b-card-body>
            </b-col>
            <b-col cols="2" class="my-auto">
              <b-button @click="deleteCart" variant="danger" class="float-right mx-3">Delete</b-button>
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
.rounded-0 {
    max-width: 100px;
    max-height: 100px;
}
</style>
