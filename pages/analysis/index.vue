<template>
  <div class="text-center mt-64">
    <h1 class="text-4xl uppercase text-secondary">THIS PAGE IS UNDER CONSTRUCTION</h1>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | Analysis'
    }
  },
  mounted () {
    this.$store.commit('general/SET_PAGE_TITLE', 'Analysis')
  }
}
</script>