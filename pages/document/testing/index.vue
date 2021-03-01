<template>
  <div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Astute Canary | Document Testing'
  },
  mounted () {
    this.$store.commit('pageTitle/SET_PAGE_TITLE', 'Document - Testing')
  }
}
</script>
