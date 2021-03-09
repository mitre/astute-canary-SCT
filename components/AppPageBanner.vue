<template>
  <div class="w-full text-center py-4" :class="bannerClass">
    <h1 class="text-light-text uppercase text-xl font-bold tracking-widest"><slot /></h1>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    bannerClass () {
      const classes = []
      if (this.type === 'primary') {
        classes.push('bg-primary')
      } else if (this.type === 'secondary') {
        classes.push('bg-secondary')
      }
      return classes.join(' ')
    }
  }
}
</script>