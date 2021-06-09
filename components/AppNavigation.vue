<template>
  <div class="w-full overflow-y-auto z-10 bg-white fixed bottom-0 border border-t pb-2 pt-4 text-xl text-gray-400 uppercase px-2 md:px-0">
    <div class="flex flex-row items-center justify-between max-w-sm mx-auto">
      <nuxt-link to="/" class="flex flex-col items-center hover:text-primary focus:text-primary" :class="{'text-primary font-bold' : active === 'index'}"><font-awesome-icon class="" icon="home"></font-awesome-icon><span class="text-xs tracking-tight mt-1">Home</span></nuxt-link>
      <nuxt-link class="flex flex-col items-center hover:text-primary focus:text-primary" to="/history" :class="{'text-primary font-bold' : active === 'history'}"><font-awesome-icon class="" icon="calendar"></font-awesome-icon><span class="text-xs mt-1">History</span></nuxt-link>
      <nuxt-link class="flex flex-col items-center hover:text-primary focus:text-primary" to="/track" :class="{'text-primary font-bold' : active.includes('track')}"><font-awesome-icon class="text-3xl text-tertiary" :class="{'text-primary' : active.includes('track')}" icon="plus-circle"></font-awesome-icon><span class="text-xs mt-1">Track</span></nuxt-link>
      <nuxt-link class="flex flex-col items-center hover:text-primary focus:text-primary" to="/trends" :class="{'text-primary font-bold' : active === 'trends'}"><font-awesome-icon class="" icon="chart-line"></font-awesome-icon><span class="text-xs mt-1">Trends</span></nuxt-link>
      <nuxt-link class="flex flex-col items-center hover:text-primary focus:text-primary" to="/profile" :class="{'text-primary font-bold' : active === 'profile'}"><font-awesome-icon class="" icon="user-cog"></font-awesome-icon><span class="text-xs mt-1">Profile</span></nuxt-link>
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
