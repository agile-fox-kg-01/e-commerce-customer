<template>
 <div>
   <Navigation />
   <HomeDashboard />
 </div>
</template>

<script>
import Navigation from '../components/Navigation'
import HomeDashboard from '../components/HomeDashboard'
export default {
  name: 'Home',
  components: {
    Navigation,
    HomeDashboard
  }
}
</script>
