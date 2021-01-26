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
            {{ product.price.toLocaleString("id-ID", { style:"currency", currency: "IDR" }) }}
            </b-card-text>
            <template v-slot:footer>
            <b-button @click="toProductPage" variant="warning" class="m-1 float-left">Detail</b-button>
            <b-button @click="addToCart" variant="danger" class="m-1 float-right">Add to <i class="fa fa-shopping-cart"></i></b-button>
            </template>
        </b-card>
    </b-col>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ProductList',
  props: {
    product: Object
  },
  methods: {
    toProductPage () {
      this.$router.push({ path: `/product/${this.product.id}` })
    },
    addToCart () {
      if (localStorage.getItem('token')) {
        this.$store.dispatch('addToCart', this.product.id)
      } else {
        this.$router.push({ path: '/login' })
        Swal.fire({
          icon: 'error',
          title: 'Oops...login first to Add',
          showConfirmButton: false,
          timer: 1000
        })
      }
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
