<template>
  <div class="container-fluid">
    <div class="container container-top flex-wrap">
      <div id="carouselExampleControls" class="carousel slide col-sm-12 col-md-12 col-lg-8" data-ride="carousel" data-interval="3000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block" src="https://inc.mizanstore.com/aassets/img/com_cart/produk/covGRM-192.jpg" alt="First slide">
          </div>
          <div class="carousel-item" v-for="(picture, index) in pictures" :key="index">
            <img class="d-block" :src="picture.imageUrl" :alt="picture.alt">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
       <div class="col-sm-12 col-md-12 col-lg-4">
          <div class="home-iklan top">
            <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <img src="../assets/shopa.png" style="width:200px; height:100px;" alt="">
            <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
         </div>
         <div class="home-iklan bottom">
            <h1>Must have stuff:</h1>
            <img class="image-slide" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLEplgxaCEtFe7gtWcsmoOn2fHO__5mgPTow&usqp=CAU">
        </div>
      </div>
    </div>
    <Categories />
  </div>
</template>

<script>
import Categories from './Categories'
export default {
  name: 'HomeDashboard',
  components: {
    Categories
  },
  computed: {
    pictures () {
      return this.$store.state.categories
    }
  }
}
</script>

<style scoped>
  .d-block{
    width:500px;
    height:450px;
    margin: auto;
    padding:15px 0;
  }
  .container-fluid{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .jumbotron{
    margin: auto;
    background-color:#ffc8c8;
  }
  .card-board{
    display: flex;
  }
  .container-top{
    display: flex;
    height: 450px;
    background-color: #e8505b;
    box-shadow: 10px 18px 28px #888888;
  }
  .home-iklan{
    text-align: center;
    height:40%;
    background-color: white;
  }
  .image-slide{
    height:200px;
    width:250px;
    max-width: 100%;
    max-height: 100%;
  }
  .top {
    color: #ff847c;
    margin-top:10px;
    height:150px;
  }
  .bottom{
    color:#3282b8;
    height:250px;
    font-family: 'Caveat', cursive;
  }
</style>
