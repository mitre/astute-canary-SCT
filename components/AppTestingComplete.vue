<template>
  <div>
    <h2 class="text-2xl text-gray-200 font-light">Thank you for logging your symptoms.</h2>
    <h2 class="text-2xl text-light-text font-bold mt-4">Would you like to track anything else?</h2>
    <div class="flex flex-col items-center">
      <div class="mt-8 w-36">
        <app-icon-button class="w-full" type="symptom" icon="thermometer-full" text="Symptoms" @clicked="goToSymptoms"></app-icon-button>
      </div>
      <div class="mt-8 w-36">
        <app-icon-button class="w-full" type="vaccination" text="Vaccination" @clicked="goToVaccination"></app-icon-button>
      </div>
      <div class="mt-4">
        <app-button type="accent" class="w-full" round @clicked="goToHome">Nothing else to track</app-button>
      </div>
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