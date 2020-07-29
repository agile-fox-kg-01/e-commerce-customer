<template>
  <div>
    <Navbar/>
    <div class="cart">
      <b-nav tabs class="category-nav">
        <b-nav-item to="/">All Product</b-nav-item>
        <b-nav-item to="/cart">Your Cart</b-nav-item>
        <b-nav-item to="/transaction" active>Your Transaction</b-nav-item>
      </b-nav>
      <b-container fluid class="cart">
        <b-row class="product-cart">
            <b-col cols="12">
                <b-card>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Detail</th>
                            <th scope="col">Total</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="transaction in transactions" :key="transaction.id">
                                <th scope="row">{{ transaction.id }}</th>
                                <td>{{ transaction.detail }}</td>
                                <td>{{ transaction.total.toLocaleString("id-ID", { style:"currency", currency: "IDR" }) }}</td>
                                <td>{{ transaction.createdAt.toString().slice(11,16) }}/{{ transaction.createdAt.toString().slice(0,10) }}</td>
                                <td><button @click="deleteTransaction(transaction.id)" class="btn btn-danger">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </b-card>
            </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Transaction',
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('fetchTransaction')
  },
  computed: {
    transactions () {
      return this.$store.state.transactions
    }
  },
  methods: {
    deleteTransaction (id) {
      this.$store.dispatch('deleteTransaction', id)
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
.rounded-0 {
    max-width: 100%;
    max-height: 100%;
}
</style>
