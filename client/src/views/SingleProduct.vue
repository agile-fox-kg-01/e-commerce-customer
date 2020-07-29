<template>
    <div>
        <Navbar/>
        <div class="singleproduct">
            <b-nav tabs class="category-nav">
                <b-nav-item to="/">All Product</b-nav-item>
                <b-nav-item to="/cart">Your Cart</b-nav-item>
                <b-nav-item to="/transaction">Your Transaction</b-nav-item>
                <b-nav-item active>{{ product.name }}</b-nav-item>
            </b-nav>
            <b-container fluid>
                <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="4" class="product-single">
                    <div class="col-lg-5 col-md-12">
                        <div class="card">
                            <div class="img-square-wrapper">
                                <a :href="product.image_url" class="btn"><img class="rounded" :src="product.image_url" alt="Card image cap"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="card">
                                    <h1>{{ product.name }}</h1>
                                    <h1>Price: {{ product.price.toLocaleString("id-ID", { style:"currency", currency: "IDR" }) }}</h1>
                                    <h1>Stock: {{ product.stock }}</h1>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="card action-button">
                                <router-link to="/" class="btn btn-lg btn-primary btn-block">Back</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'SingleProduct',
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('fetchOneProduct', this.$route.params.id)
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.singleproduct {
  padding: 10px 10px;
}
@media (min-width: 100px) {
  .category-nav {
    padding: 0px 10px;
  }
}

@media (min-width: 668px) {
  .category-nav {
    padding: 0px 40px;
  }
}

@media (min-width: 992px) {
  .category-nav {
    padding: 0px 100px;
  }
}
.product-single {
  margin: 20px 70px;
}

.img-square-wrapper {
    padding: 20px;
}

.card {
    padding: 30px 30px;
}

.rounded {
    max-width:100%;
    max-height:100%;
  }

.rounded:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

.col-12 {
    margin-bottom: 30px;
}

.action-button {
    padding: 30px;
}
</style>
