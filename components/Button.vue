<template>
  <button class="font-bold py-2 rounded px-4 hover:shadow-xl focus:shadow-xl" :class="btnClass" @click="$emit('clicked')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    round: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    btnClass () {
      const classes = []
      if (this.round) {
        classes.push('rounded-full')
      }
      if (this.type === 'primary') {
        classes.push('bg-primary text-light-text')
      } else if (this.type === 'secondary') {
        classes.push('bg-secondary text-light-text')
      } else if (this.type === 'accent') {
        classes.push('bg-accent text-light-text')
      } else if (this.type === 'blue') {
        classes.push('bg-blue-400 text-light-text')
      } else if (this.type === 'light') {
        classes.push('bg-white text-dark-text border')
      } else if (this.type === 'dark') {
        classes.push('bg-black border text-light-text')
      }
      return classes.join(' ')
    }
  }
}
</script>