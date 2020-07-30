<template>
  <div class="container">
    <p>ALL CATEGORIES</p>
    <div class="d-flex">
      <div v-for="category in categories" :key="category.id" @click.prevent="goCategory(category.name)" class="card" style="width: 25rem;">
        <img class="card-img-top" :src="category.imageUrl" alt="Card image cap">
        <p class="card-text">{{category.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  methods: {
    goCategory (categoryName) {
      localStorage.removeItem('category')
      localStorage.setItem('category', categoryName)
      this.$store.dispatch('fetchDataCategory', categoryName)
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style scoped>
  .container{
    margin-top: 30px;
  }
  img{
    max-width: 400px;
    max-height: 300px;
    height: 100%;
    width:100%;
    padding:10px;
  }
  .d-flex{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card{
    margin-bottom:30px;
  }
  .card:hover{
    opacity: 0.7;
  }
  p{
    font-size: 25px;
    color: #3282b8;
  }
</style>
