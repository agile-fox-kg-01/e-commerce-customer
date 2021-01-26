<template>
  <div>
    <Navbar/>
    <div class="cart">
      <b-nav tabs class="category-nav">
        <b-nav-item to="/">All Product</b-nav-item>
        <b-nav-item to="/cart" active>Your Cart</b-nav-item>
        <b-nav-item to="/transaction">Your Transaction</b-nav-item>
      </b-nav>
      <b-container fluid class="cart">
        <b-row class="product-cart">
            <b-col cols="12" sm="12" md="12" lg="9" class="mb-3">
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
                        <h1>Total</h1>
                        <h5>{{ carts.length }} items selected</h5>
                    </b-col>
                    <b-col cols="12" class="total">
                      <div class="right">
                        {{ total.toLocaleString("id-ID", { style:"currency", currency: "IDR" }) }}
                      </div>
                    </b-col>
                    <b-col cols="12" class="my-4">
                      <b-button @click="checkout" block variant="danger" class="checkout-btn">Checkout</b-button>
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
    },
    total () {
      let totalPrice = 0
      this.carts.map(temp => {
        totalPrice += temp.Product.price
      })
      return totalPrice
    }
  },
  methods: {
    checkout () {
      this.$store.dispatch('checkout')
      this.$router.push({ path: '/transaction' })
    }
  }
}
</script>

<style scoped>
.cart {
  padding: 10px 10px;
}

@media (min-width: 100px) {
  .product-cart {
    margin: 10px 10px;
  }
  .category-nav {
    padding: 0px 10px;
  }
}

@media (min-width: 668px) {
  .product-cart {
    margin: 20px 30px;
  }
  .category-nav {
    padding: 0px 40px;
  }
}

@media (min-width: 992px) {
  .product-cart {
    margin: 20px 70px;
  }
  .category-nav {
    padding: 0px 100px;
  }
}

.total {
    display: table;
}
.total .right {
    display: table-cell;
    text-align: left;
    font-size: 18px;
    font-weight: 700;
    color: #D10024;
}
.checkout-btn {
  border-radius: 30px;
}
</style>
