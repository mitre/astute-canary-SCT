<template>
  <div class="w-full bg-white fixed bottom-0 border border-t flex flex-row justify-center text-4xl text-dark-text">
    <nuxt-link to="/" class="hover:text-primary focus:text-primar"><font-awesome-icon icon="home"></font-awesome-icon></nuxt-link>
    <nuxt-link class="ml-4 hover:text-primary focus:text-primary" to="/calendar"><font-awesome-icon icon="calendar"></font-awesome-icon></nuxt-link>
    <nuxt-link class="ml-4 hover:text-primary focus:text-primary -mt-8 text-6xl bg-white" to="/document"><font-awesome-icon icon="plus-circle"></font-awesome-icon></nuxt-link>
    <nuxt-link class="ml-4 hover:text-primary focus:text-primary" to="/analysis"><font-awesome-icon icon="chart-line"></font-awesome-icon></nuxt-link>
    <nuxt-link class="ml-4 hover:text-primary focus:text-primary" to="/profile"><font-awesome-icon icon="user-cog"></font-awesome-icon></nuxt-link>
  </div>
</template>
<style scoped>
.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}
</style>
