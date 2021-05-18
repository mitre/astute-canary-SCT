<template>
  <button class="py-2 w-full rounded-md bg-white button-shadow hover:bg-white hover:bg-opacity-25 focus:bg-white focus:bg-opacity-25 flex flex-col text-center justify-center" @click="$emit('clicked')" :class="btnClass">
    <p class="text-dark-text text-center text-sm mb-2 mx-auto font-light">{{ text }}</p>
    <font-awesome-icon :icon="[prefix, icon]" class="mx-auto text-4xl mb-2 text-tertiary"></font-awesome-icon>
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'smile'
    },
    type: {
      type: String,
      default: 'success'
    },
    text: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: 'fas'
    }
  },
  computed: {
    btnClass () {
      const classes = []
      if (this.type === 'success') {
        classes.push('border-b-8 border-success')
      }
      if (this.type === 'warning') {
        classes.push('border-b-8 border-warning')
      }
      if (this.type === 'danger') {
        classes.push('border-b-8 border-danger')
      }
      return classes.join(' ')
    }
  }
}
</script>
<style scoped>
 .button-shadow {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);
 }
</style>
