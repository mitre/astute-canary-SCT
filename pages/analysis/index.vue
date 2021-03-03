<template>
  <div class="text-center mt-64">
    <h1 class="text-4xl uppercase text-secondary">THIS PAGE IS UNDER CONSTRUCTION</h1>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Astute Canary | Analysis'
  },
  mounted () {
    this.$store.commit('pageTitle/SET_PAGE_TITLE', 'Analysis')
  }
}
</script>