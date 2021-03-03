<template>
  <div>
    <page-banner>{{ $store.state.pageTitle.pageTitle }}</page-banner>
    <Nuxt />
    <Navigation />
  </div>
</template>
<script>
import Navigation from '../components/Navigation'
import PageBanner from '../components/PageBanner'
export default {
  components: {
    Navigation,
    PageBanner
  }
}
</script>
