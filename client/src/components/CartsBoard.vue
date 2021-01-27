<template>
  <div class="container d-flex flex-wrap">
    <div class="d-flex top-div">
      <h1>Items on your carts</h1>
      <button @click.prevent="checkOut">checkout</button>
    </div>
    <table class="table">
      <thead>
        <tr class='d-flex'>
          <th class='col-2'>Name</th>
          <th class='col-2'>Quantity</th>
          <th class='col-2'>Total Price</th>
          <th class='col-4'>Image</th>
          <th class='col-2'>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr class='d-flex' v-for="(product,index) in products" :key="index">
          <td class='col-2'>
              {{ product.Product.name }}
          </td>
          <td class='col-2'>
              {{ product.quantity }}
          </td>
          <td class='col-2'>
              Rp. {{ product.price }}
          </td>
          <td class='col-4'>
            <div class="card " style="width: 28rem;">
              <img class="card-img-top" :src="product.Product.image_url">
            </div>
          </td>
          <td class="col-2 d-flex">
            <a class="setting" href="#" @click.prevent="editQuantity(product)">edit</a>
            <a class="setting" href="#" @click.prevent="remove(product)">remove</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'CartsBoard',
  created () {
    this.$store.dispatch('fetchDataCarts')
  },
  methods: {
    checkOut () {
      Swal.fire({
        title: 'Continue checking out',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, please!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Success!'
          )
          this.$store.dispatch('checkingOut')
          this.$router.push('/carts')
        }
      })
    },
    async editQuantity (product) {
      const { value: number } = await Swal.fire({
        title: 'Enter quantity',
        input: 'number',
        inputPlaceholder: 'How many?'
      })
      if (number) {
        await Swal.fire(`Entered quantity: ${number}`)
        product.quantity = number
        this.$store.dispatch('editQuantity', product)
      }
    },
    remove (product) {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Item has been removed from carts'
          )
          this.$store.dispatch('deleteCart', product)
        }
      })
    }
  },
  computed: {
    products () {
      return this.$store.state.carts
    }
  }
}
</script>

<style scoped>
  .container {
    justify-content: center;
    margin-top: 30px;
  }
  .top-div{
    flex-direction: column;
    text-align: left;
  }
  table{
    width: 100%;
    margin-top:20px;
  }
  thead{
    text-align: center;
    border-style: outset;
    border-color:#ffc8c8;
    font-size: 20px;
    color:white;
    top: 100px;
  }
  th{
    border-color:#ffc8c8;
    color:#e84a5f;
  }
  tbody{
    background-color:#ffc8c8;
    text-align: center;
    border-style: outset;
    border-color: #ffc8c8;
    color:#3282b8;
  }
  td{
    text-align: left;
    font-size: 20px;
  }
  img{
  max-width: 200px;
  max-height: 200px;
  height: 100%;
  width:100%;
  outline: none;
  }
  .card{
    background-color:#ffc8c8;
  }
  button{
    margin-top:10px;
    margin-bottom:10px;
    background-color:#3282b8;
    color:white;
    outline: none ;
    height:30px;
  }
  button:hover{
    background-color: #bbe1fa;
  }
  .card-body{
    margin-top:0;
  }
  .setting{
    margin-right:20px;
  }
  h1{
    color:#3282b8;
  }
</style>
