<template>
  <button class="flex flex-row w-full items-center text-center py-4 hover:text-secondary focus:text-secondary focus:outline-none" @click="$emit('clicked')">
    <font-awesome-icon :icon="icon"></font-awesome-icon>
     <slot />
   </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'home'
    }
  }
}
</script>