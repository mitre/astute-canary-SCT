<template>
  <div class="box bg-light-background rounded text-center pt-2 px-4 h-full border-b-8 border-transparent bg-opacity-75" :class="{'border-success' : feeling === 'good', 'border-warning': feeling === 'fair', 'border-danger': feeling === 'poor'}">
    <p class="text-gray-500 text-xs capitalize">{{ weekday }}</p>
    <p class="text-2xl text-dark-text font-bold">{{ day }}</p>
    <p class="uppercase text-dark-text font-bold">{{ month }}</p>
    <p class="italic text-gray-500 text-sm h-6 capitalize">{{ feeling }}</p>
  </div>
</template>

<script>
export default {
  props: {
    weekday: String,
    day: String,
    month: String,
    feeling: String
  }
}
</script>
<style scoped>
  .is-active > .box  {
    @apply bg-opacity-100;
  }
</style>
