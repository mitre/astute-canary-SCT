<template>
   <div class="flex-grow flex flex-col justify-start text-center p-8 mt-12 text-primary">
    <h2 class="text-2xl text-dark-text font-light">Need to <span class="font-bold">track</span> something else?</h2>
    <div class="mt-12 mx-auto flex flex-row">
      <app-icon-button class="w-full" size="large" type="tertiary" text="Vaccination" @clicked="goToVaccination"></app-icon-button>
      <app-icon-button class="w-full ml-4" size="large" icon="microscope" type="tertiary" text="Testing" @clicked="goToTesting"></app-icon-button>
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