<template>
  <div class="flex-grow flex flex-col justify-start text-center bg-light-background p-8 rounded-t-4xl mt-4 text-primary">
    <h2 class="text-2xl text-dark-text font-light">Need to <span class="font-bold">track</span> something else?</h2>
    <div class="mt-12 mx-auto">
      <app-icon-button class="w-full" type="tertiary" size="large" icon="thermometer-full" text="Symptoms" @clicked="goToSymptoms"></app-icon-button>
    </div>
    <div class="mt-4 mx-auto">
      <app-icon-button class="w-full" type="tertiary" size="large" text="Vaccination" @clicked="goToVaccination"></app-icon-button>
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
    goToSymptoms() {
      this.$router.push('/track/symptoms')
    },
    goToVaccination() {
      this.$router.push('/track/vaccination')
    },
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>