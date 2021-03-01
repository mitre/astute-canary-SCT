<template>
  <div class="w-full bg-white fixed bottom-0 border border-t flex flex-row justify-center text-4xl text-dark-text">
    <nuxt-link to="/" class="hover:text-primary focus:text-primar"><icon name="home"></icon></nuxt-link>
    <nuxt-link class="ml-4 hover:text-primary focus:text-primary" to="/calendar"><icon name="calendar"></icon></nuxt-link>
    <nuxt-link class="ml-4 hover:text-primary focus:text-primary -mt-8 text-6xl bg-white" to="/document"><icon name="plus-circle"></icon></nuxt-link>
    <nuxt-link class="ml-4 hover:text-primary focus:text-primary" to="/analysis"><icon name="chart-line"></icon></nuxt-link>
    <nuxt-link class="ml-4 hover:text-primary focus:text-primary" to="/profile"><icon name="user-cog"></icon></nuxt-link>
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
