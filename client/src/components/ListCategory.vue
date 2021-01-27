<template>
    <div>
      <div class="container name">
         <h1>Category: {{ name }}</h1>
      </div>
      <div class="container d-flex flex-wrap">
        <div v-for="product in products" :key="product.id" class="card" style="width: 28rem;">
          <h3 class="card-title">{{ product.name }}</h3>
          <img class="card-img-top" :src="product.image_url" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Stock: {{ product.stock }} items</h5>
            <h5 class="card-title">Price: Rp. {{ product.price }} /item</h5>
            <div class="d-flex">
              <button @click.prevent="addToCarts(product)">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ListCategory',
  data () {
    return {
      name: localStorage.getItem('category')
    }
  },
  created () {
    const name = localStorage.getItem('category')
    this.$store.dispatch('fetchDataCategory', name)
  },
  computed: {
    products () {
      return this.$store.state.category
    }
  },
  methods: {
    addToCarts (product) {
      this.$store.dispatch('addToCarts', product)
    }
  }
}
</script>
<style scoped>
  .d-flex{
    justify-content: center;
  }
  img{
    max-width: 400px;
    max-height: 200px;
    height: 100%;
    width:100%;
    padding-left:10px;
    padding-right:10px;
    padding-top:10px;
  }
  .card{
    background-color:white;
    border-style: outset;
    border-width: 1px;
    border-color:#f45b69;
    margin: 10px;
  }
  h1{
    padding: 15px;
    margin: 40px auto;
    color: #0f4c75;
    background-color: #ffdecf;
    height: 70px;
    border-radius: 20px;
    opacity: 0.7;
    border-style: outset;
  }
  h3{
    color: #f45b69;
  }
  h5{
    color: #3282b8;
    font-size: 15px;
  }
  h3{
    margin:10px;
  }
  button{
    margin-top:10px;
    margin-bottom:10px;
    width:240px;
    background-color:#f45b69;
    color:white;
  }
  .card-body{
    margin-top:0;
  }
</style>
