<template>
  <button class="py-4 px-6 rounded-2xl border-2 bg-gray-200 hover:bg-white focus:bg-white flex flex-col items-center justify-center" @click="$emit('clicked')" :class="btnClass">
    <font-awesome-icon :icon="icon" class="mx-auto text-6xl md:text-4xl mb-2"></font-awesome-icon>
    <p class="font-bold text-xl text-gray-600">{{ text }}</p>
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'syringe'
    },
    type: {
      type: String,
      default: 'symptom'
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    btnClass () {
      const classes = []
      if (this.type === 'symptom') {
        classes.push('text-symptom')
      }
      if (this.type === 'vaccination') {
        classes.push('text-vaccination')
      }
      if (this.type === 'testing') {
        classes.push('text-testing')
      }
      return classes.join(' ')
    }
  }
}
</script>