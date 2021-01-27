<template>
  <div>
    <Navigation />
    <CartsBoard />
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import CartsBoard from '../components/CartsBoard'
export default {
  name: 'Carts',
  components: {
    Navigation,
    CartsBoard
  }
}
</script>

<style>

</style>
