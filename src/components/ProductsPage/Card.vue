<template>
  <div>
    <transition-group name="fade" class="row" tag="div">
      <div v-for="product in Products" class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3" :key="product.id">
          <div class="card">
            <img class="card-img-top" :src="product.imageURL" alt="Card image cap">
            <div class="overlay">
              <button type="button" class="btn btn-outline-secondary btn-lg" @click="addtoCart(product)">Add +</button>
              <router-link to="/Info"><button type="button" class="btn btn-outline-secondary btn-lg" @click="sendInfo(product)">Info</button></router-link>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">Rp. {{ product.price.toLocaleString() }}</p>
            </div>
          </div>
      </div>
    </transition-group>
  </div>

</template>

<script>
export default {
  props: {
    Products: Array
  },
  name: 'Card',
  methods: {
    addtoCart (product) {
      if (!localStorage.getItem('access_token')) {
        this.$router.push('/login')
      } else {
        let products = []
        products.push(product)
        // this.$store.commit('inCart', product)
        this.$store.dispatch('addToCart', {
          ProductId: products[0].id,
          quantity: products.length
        })
        products = []
      }
    },
    sendInfo (product) {
      this.$store.commit('addtoInfo', product)
    }
  }
}
</script>

<style>
/* transition Group style */
.fade-move {
  transition: transform 1s;
}
/* Card Style */
.card {
  transition: 500ms;
  position: relative;
  overflow: hidden;
}

.card img {
  z-index: 1;
}

.card button {
  width: 140px;
  margin-bottom: 10px;
}

.card:hover img {
  filter: blur(4px);
}

.card:hover .overlay {
  opacity: 0.8;

}

.card .overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #232b34;
  opacity: 0;
  z-index: 100;
  transition: all 0.3s ease-in;
}

.card:hover, .card:active {
  transform: scaleY(1.1) scaleX(1.06);
  box-shadow: 0 14px 98px rgba(0, 0, 0, 0.25), 0 0px 60px rgba(0, 0, 0, 0.22);
}
</style>
