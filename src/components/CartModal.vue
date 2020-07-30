<template>
  <div>
    <div
      class='modal fade bd-example-modal-lg'
      id='modal-cart'
      tabindex='-1'
      role='dialog'
      aria-labelledby='myModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog modal-lg' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h4 class='modal-title font-weight-bold'>My Cart</h4>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div class='modal-body text-left font-weight-bold'>
            <div class='card'>
    <div class='card-header main-color'>Product List</div>
    <div class='card-body'>
      <table class='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Name</th>
            <th scope='col'>Image</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody v-if='cartData'>
          <tr v-for="(product, index) in cartData" :key="index">
            <th scope='row'>{{index+1}}</th>
            <td>{{product.name}}</td>
            <td><img :src='product.image_url' alt=""></td>
            <td>{{product.price}}</td>
            <td>{{product.quantity}}</td>
            <td>
              <div class='btn-group' role='group' aria-label='Basic example'>
                <button type='button' class='btn btn-secondary' data-toggle='modal'
                data-target='#modal-update-product' @click="reduceQuantityItemCart(product.name)">-</button>
                <button type='button' class='btn btn-secondary' @click="addQuantityItemCart(product.name)">+</button>
                <button type='button' class='btn btn-danger' @click="removeItemCart(product.name)">Remove</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="checkout">
    <button type='button' class='btn btn-primary' @click="removeAllCart" v-if='checkoutButton'>Checkout</button>
    </div>
  </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartModal',
  data () {
    return {
      cartDatas: []
    }
  },
  props: {
  },
  computed: {
    cartData () {
      return this.$store.state.cart
    },
    checkoutButton () {
      if (localStorage.getItem('token')) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    submitLogin () {
      this.$store.dispatch('submitLogin', this.user)
    },
    emptyAddForm () {
      this.newProduct = {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    },
    addQuantityItemCart (productName) {
      this.$store.dispatch('addQuantityItemCart', productName)
    },
    reduceQuantityItemCart (productName) {
      this.$store.dispatch('reduceQuantityItemCart', productName)
    },
    removeItemCart (productName) {
      this.$store.dispatch('removeItemCart', productName)
    },
    removeAllCart () {
      this.$store.dispatch('removeAllCart')
    }
  }
}
</script>

<style scoped>
.main-color {
  background-color: #23b5d3;
  border: 0;
}
.btn-info {
  background-color: #363636 !important;
  border: 0;
}
.btn {
  background-color: #23b5d3 !important;
  border: 0;
  color: white;
}
.btn-group {
  align-items: center;
}
img {
  height: 100px;
}
.checkout {
  width: 50%;
  display: flex;
  justify-content: center;
  align-self: center;
  margin-bottom: 10px;
}
</style>
