<template>
<div class="flex-grow flex flex-col justify-start text-center bg-light-background p-8 rounded-t-4xl mt-4 text-primary">
    <h2 class="text-2xl text-dark-text font-light">Need to <span class="font-bold">track</span> something else?</h2>
    <div class="mt-12 flex flex-row mx-auto">
      <app-icon-button class="w-full" size="large" type="tertiary" icon="thermometer-full" text="Symptoms" @clicked="goToSymptoms"></app-icon-button>
      <app-icon-button class="w-full ml-4" icon="microscope" size="large" type="tertiary" text="Testing" @clicked="goToTesting"></app-icon-button>
    </div>
  </div>
</template>
<script>
import Button from '@/components/AppButton.vue'

export default {
  components: {
    Button
  },
  methods: {
    goToSymptoms() {
      this.$router.push('/track/symptoms')
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