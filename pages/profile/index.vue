<template>
  <div>
    Profile
  </div>
</template>
<script>
export default {
  head: {
    title: 'Astute Canary | Profile'
  },
  mounted () {
    this.$store.commit('pageTitle/SET_PAGE_TITLE', 'Profile/Settings')
  }
}
</script>
