<template>
  <div>
    <page-banner>{{ $store.state.pageTitle.pageTitle }}</page-banner>
    <Nuxt />
    <Navigation />
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
