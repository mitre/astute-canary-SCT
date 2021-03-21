<template>
  <button class="py-2 px-6 rounded-3xl border-2 border-white border-opacity-50 hover:bg-white hover:bg-opacity-25 focus:bg-white focus:bg-opacity-25 flex flex-col text-center justify-center" @click="$emit('clicked')" :class="btnClass">
    <font-awesome-icon :icon="[prefix, icon]" class="mx-auto text-3xl md:text-4xl mb-2"></font-awesome-icon>
    <p class="font-bold">{{ text }}</p>
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
        classes.push('text-success')
      }
      if (this.type === 'warning') {
        classes.push('text-warning')
      }
      if (this.type === 'danger') {
        classes.push('text-danger')
      }
      return classes.join(' ')
    }
  }
}
</script>