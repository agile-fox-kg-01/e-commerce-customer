<template>
  <div>
    <Navbar/>
    <div class="cart">
      <b-nav tabs class="category-nav">
        <b-nav-item to="/">All Product</b-nav-item>
        <b-nav-item to="/cart" active>Your Cart</b-nav-item>
      </b-nav>
      <b-container fluid class="cart">
        <b-row class="product-cart">
            <b-col cols="12" sm="12" md="12" lg="9">
                <b-card>
                    <h1>Your Cart</h1>
                    <b-row>
                        <CartList
                        v-for="cart in carts"
                        :key="cart.id"
                        :cart="cart"/>
                    </b-row>
                </b-card>
            </b-col>
            <b-col cols="12" sm="12" md="12" lg="3">
                <b-card>
                    <b-col cols="12">
                        <h1>Your Order</h1>
                        <h5>5 items selected</h5>
                    </b-col>
                    <b-col cols="12" class="total">
                        <div class="left">
                            Total
                        </div>
                        <div class="right">
                            20000
                        </div>
                    </b-col>
                </b-card>
            </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CartList from '../components/CartList'

export default {
  name: 'Cart',
  components: {
    Navbar,
    CartList
  },
  created () {
    this.$store.dispatch('fetchCart')
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  }
}
</script>

<style scoped>
.cart {
  padding: 10px 10px;
}
.category-nav {
  padding: 0px 100px;
}

@media (min-width: 100px) {
    .product-cart {
        margin: 10px 10px;
    }
}

@media (min-width: 668px) {
    .product-cart {
        margin: 20px 30px;
    }
}

@media (min-width: 992px) {
    .product-cart {
        margin: 20px 70px;
    }
}

.total {
    display: table;
}
.total .right {
    display: table-cell;
    text-align: right;
    font-size: 24px;
    font-weight: 700;
    color: #D10024;
}
.total .left {
    font-weight: bold;
    display: table-cell;
    text-align: left;
}
.rounded-0 {
    max-width: 100%;
    max-height: 100%;
}
</style>
