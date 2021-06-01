<template>
  <div class="flex flex-col flex-grow h-full my-auto bg-light-background rounded-t-4xl mt-16 text-primary p-8 pt-12">
    <h2 class="text-2xl text-dark-text font-light">Need to <span class="font-bold">track</span> something else?</h2>
    <div class="mt-24 w-36 mx-auto">
      <app-icon-button class="w-full" type="tertiary" text="Vaccination" @clicked="goToVaccination"></app-icon-button>
    </div>
    <div class="mt-4 w-36 mx-auto">
      <app-icon-button class="w-full" icon="microscope" type="tertiary" text="Testing" @clicked="goToTesting"></app-icon-button>
    </div>
    <div class="mt-4">
      <app-button type="secondary" class="w-full" round @clicked="goToHome">Nothing else to track</app-button>
    </div>
  </div>
</template>
<script>
import AppButton from './AppButton.vue'
import AppIconButton from './AppIconButton.vue'

export default {
  components: {
    AppButton,
    AppIconButton
  },
  methods: {
    goToVaccination() {
      this.$router.push('/track/vaccination')
    },
    goToTesting() {
      this.$router.push('/track/testing')
    },
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>