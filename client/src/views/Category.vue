<template>
 <div>
   <Navigation />
   <ListCategory />
 </div>
</template>

<script>
import Navigation from '../components/Navigation'
import ListCategory from '../components/ListCategory'
export default {
  name: 'Category',
  components: {
    Navigation,
    ListCategory
  }
}
</script>
