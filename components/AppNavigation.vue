<template>
  <div class="w-full bg-white fixed bottom-0 border border-t flex justify-center pb-2 pt-4 text-2xl text-gray-400 uppercase">
    <div class="grid grid-cols-5 gap-x-8 max-w-sm md:max-w-md mx-auto">
      <nuxt-link to="/" class="flex flex-col items-center hover:text-secondary focus:text-secondary" :class="{'text-primary font-bold border-b-8 border-primary hover:border-secondary focus:border-secondary' : active === 'index'}"><font-awesome-icon icon="home"></font-awesome-icon><span class="text-xs mt-1">Home</span></nuxt-link>
      <nuxt-link class="flex flex-col items-center hover:text-secondary focus:text-secondary" to="/calendar" :class="{'text-primary font-bold border-b-8 border-primary hover:border-secondary focus:border-secondary' : active === 'calendar'}"><font-awesome-icon icon="calendar"></font-awesome-icon><span class="text-xs mt-1">Calendar</span></nuxt-link>
      <nuxt-link class="flex flex-col items-center hover:text-secondary focus:text-secondary text-4xl -mt-3 " to="/document" :class="{'text-primary font-bold border-b-8 border-primary hover:border-secondary focus:border-secondary' : active.includes('document')}"><font-awesome-icon class="text-primary" icon="plus-circle"></font-awesome-icon><span class="text-xs mt-1">Document</span></nuxt-link>
      <nuxt-link class="flex flex-col items-center hover:text-secondary focus:text-secondary" to="/analysis" :class="{'text-primary font-bold border-b-8 border-primary hover:border-secondary focus:border-secondary' : active === 'analysis'}"><font-awesome-icon icon="chart-line"></font-awesome-icon><span class="text-xs mt-1">Analytics</span></nuxt-link>
      <nuxt-link class="flex flex-col items-center hover:text-secondary focus:text-secondary" to="/profile" :class="{'text-primary font-bold border-b-8 border-primary hover:border-secondary focus:border-secondary' : active === 'profile'}"><font-awesome-icon icon="user-cog"></font-awesome-icon><span class="text-xs mt-1">Profile</span></nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    active: {
      type: String,
      default: 'home'
    }
  }
}
</script>
    
<style scoped>
.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}
</style>
