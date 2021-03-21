<template>
  <div class="w-full text-center py-4" :class="bannerClass">
    <h1 class="uppercase text-xl font-bold tracking-widest"><slot /></h1>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    textType: {
      type: String,
      default: 'light-text'
    }
  },
  computed: {
    bannerClass () {
      const classes = []
      classes.push('text-' + this.textType)
      classes.push('bg-' + this.type)
      return classes.join(' ')
    }
  }
}
</script>