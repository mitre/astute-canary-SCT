<template>
<div class="w-full h-full bg-primary min-h-screen">
  <div class="text-center my-auto pb-24">
    <h1 class="text-4xl uppercase text-secondary">THIS PAGE IS UNDER CONSTRUCTION</h1>
  </div>
</div>
</template>
<script>
export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | Track Testing'
    }
  },
  mounted () {
    this.$store.commit('general/SET_PAGE_TITLE', 'Track - Testing')
  }
}
</script>
