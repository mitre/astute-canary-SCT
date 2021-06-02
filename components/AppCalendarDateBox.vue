<template>
<div class="box w-24 rounded-t text-center h-full border-b-16 border-transparent">
  <div class="inner-box w-full bg-opacity-75 bg-light-background pt-2 px-4 rounded-xl border-b-8 border-transparent" :class="{'border-success' : feeling === 'good', 'border-warning': feeling === 'fair', 'border-danger': feeling === 'poor'}">
    <p class="text-gray-500 text-xs capitalize">{{ weekday }}</p>
    <p class="text-2xl text-dark-text font-bold">{{ day }}</p>
    <p class="uppercase text-dark-text font-bold -mt-1">{{ month }}</p>
    <p class="italic text-gray-500 text-xs h-6 capitalize">{{ feeling }}</p>
  </div>
  <div class="left-corner hidden">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.98 129.61"><defs><style>.cls-1{fill:#fff;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M66,0V129.06l-66,.55a271.47,271.47,0,0,0,39.33-55.5A271.82,271.82,0,0,0,66,0Z"/></g></g></svg>
  </div>
  <div class="right-corner hidden">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.98 129.61"><defs><style>.cls-1{fill:#fff;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,0V129.06l66,.55a271.08,271.08,0,0,1-39.33-55.5A271.82,271.82,0,0,1,0,0Z"/></g></g></svg>
  </div>
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
    @apply border-white;
    @apply relative;
  }
  .is-active > .box > .inner-box  {
    @apply bg-opacity-100;
    @apply rounded-b-none;
    @apply border-transparent;
  }
 .is-active > .box > .left-corner {
    @apply block;
    @apply absolute;
    @apply left-0;
    @apply -ml-4;
    @apply -mb-8;
    @apply bottom-0;
    @apply w-4;
  }
  .is-active > .box > .right-corner {
    @apply block;
    @apply absolute;
    @apply right-0;
    @apply -mr-4;
    @apply -mb-8;
    @apply bottom-0;
    @apply w-4;
  }
  .border-b-16 {
    border-bottom-width: 12px;
  }
</style>
