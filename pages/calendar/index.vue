<template>
  <div>
    Calendar
  </div>
</template>
<script>
export default {
  head: {
    title: 'Astute Canary | Calendar'
  },
  mounted () {
    this.$store.commit('pageTitle/SET_PAGE_TITLE', 'Calendar')
  }
}
</script>
