<template>
  <div>
    Analysis
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