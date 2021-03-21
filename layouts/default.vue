<template>
  <div>
    <Nuxt />
    <Navigation :active="$route.name"/>
  </div>
</template>
<script>
import Navigation from '../components/AppNavigation'
import PageBanner from '../components/AppPageBanner'
export default {
  components: {
    Navigation,
    PageBanner
  }
}
</script>
