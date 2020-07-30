<template>
  <div class='navigation-bar'>
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <div>
        <ul class='navbar-nav'>
          <li class='nav-item'>
            <router-link to="/"><a class='nav-link' href='#'>
              <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
              <span class='sr-only'>(current)</span>
            </a></router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class='navbar-nav'>
          <li class='nav-item active'>
            <router-link to="/"><a class='nav-link' href='#'>
              Home
              <span class='sr-only'>(current)</span>
            </a></router-link>
          </li>
          <li class='nav-item'>
            <router-link to="/product"><a class='nav-link' href='#'>Products</a></router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class='navbar-nav navbar-right'>
          <li class='nav-item'>
            <a class='nav-link' href='#' v-if='loginStatus === false' data-toggle='modal'
                data-target='#modal-user-login'>
              Sign In
              <span class='sr-only'>(current)</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#' v-if='loginStatus === true' @click='logout'>
              Sign Out
              <span class='sr-only'>(current)</span>
            </a>
          </li>
          <li>
            <a class='nav-link' href='#' data-toggle='modal'
                data-target='#modal-cart'>
              <i class="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
              <span class='sr-only'>(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      loginStatus: false
    }
  },
  components: {
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(response => this.checkLoginStatus())
    },
    checkLoginStatus () {
      if (localStorage.getItem('token')) {
        this.loginStatus = true
      } else {
        this.loginStatus = false
      }
    }
  },
  computed: {
  },
  created () {
    this.checkLoginStatus()
  }
}
</script>

<style scoped>
h3 {
  padding: 10px 0;
}
nav {
  display: flex;
  justify-content: space-between;
  background-color: #23b5d3 !important;
  align-items: center;

}

.navbar-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
