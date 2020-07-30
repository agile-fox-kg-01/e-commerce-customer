<template>
  <div class="row">
    <CartCard
    v-for="cart in carts"
    :key="cart.id"
    :cart="cart"
    />
  </div>
</template>

<script>
import CartCard from '../components/CartCard'

export default {
  name: 'Carts',
  components: {
    CartCard
  },
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    }
  },
  created () {
    this.fetchCarts()
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  }
}
</script>

<style>
.header{
  padding: 20px;
  background: #fff;
  color: #717171;
}
</style>
