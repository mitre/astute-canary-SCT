<template>
  <div class="w-full overflow-y-auto z-10 bg-white fixed bottom-0 border border-t pb-2 pt-4 text-xl text-gray-400 uppercase">
    <div class="flex flex-row items-center justify-center max-w-screen sm:max-w-sm mx-auto">
      <nuxt-link to="/" class="flex flex-col mx-4 items-center hover:text-secondary focus:text-secondary" :class="{'text-primary font-bold' : active === 'index'}"><font-awesome-icon class="" icon="home"></font-awesome-icon><span class="text-xs tracking-tight mt-1">Home</span></nuxt-link>
      <nuxt-link class="flex flex-col mx-4 items-center hover:text-secondary focus:text-secondary" to="/calendar" :class="{'text-primary font-bold' : active === 'calendar'}"><font-awesome-icon class="" icon="calendar"></font-awesome-icon><span class="text-xs mt-1">Calendar</span></nuxt-link>
      <nuxt-link class="flex flex-col mx-4 items-center hover:text-secondary focus:text-secondary text-4xl -mt-3" to="/track" :class="{'text-primary font-bold' : active.includes('track')}"><font-awesome-icon class=" text-primary" icon="plus-circle"></font-awesome-icon><span class="text-xs mt-1">Track</span></nuxt-link>
      <nuxt-link class="flex flex-col mx-4 items-center hover:text-secondary focus:text-secondary" to="/analysis" :class="{'text-primary font-bold' : active === 'analysis'}"><font-awesome-icon class="" icon="chart-line"></font-awesome-icon><span class="text-xs mt-1">Analytics</span></nuxt-link>
      <nuxt-link class="flex flex-col mx-4 items-center hover:text-secondary focus:text-secondary" to="/profile" :class="{'text-primary font-bold' : active === 'profile'}"><font-awesome-icon class="" icon="user-cog"></font-awesome-icon><span class="text-xs mt-1">Profile</span></nuxt-link>
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
