<template>
  <button class="rounded-2xl icon-button hover:bg-white focus:bg-white flex flex-col items-center justify-center" @click="$emit('clicked')" :class="btnClass">
    <div>
      <div class="rounded-full h-6 w-6 absolute flex items-center justify-center bg-tertiary bg-opacity-25 mt-4"></div>
      <font-awesome-icon :icon="icon" class="mx-auto text-4xl mb-2 relative"></font-awesome-icon>
    </div>
    <p class="text-dark-text">{{ text }}</p>
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
      if (this.type === 'tertiary') {
        classes.push('text-tertiary')
      }
      return classes.join(' ')
    }
  }
}
</script>
<style scoped>
 .icon-button{
   width: 110px;
   height: 110px;
   box-shadow: 2px 2px 25px rgba(0,0,0,0.06), 2px 2px 25px rgba(0,0,0,0.06);
 }
</style>
