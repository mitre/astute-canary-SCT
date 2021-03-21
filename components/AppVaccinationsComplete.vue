<template>
  <div class="flex flex-col justify-center items-center text-center">
    <h2 class="text-xl text-dark-text font-bold">Thank you for logging your vaccination.</h2>
    <h2 class="text-xl text-dark-text font-bold mt-4">Would you like to document anything else?</h2>
    <div class="mt-8 w-64">
      <Button class="w-full" type="secondary" @clicked="goToSymptoms">Symptoms</Button>
    </div>
    <div class="mt-4 w-64">
      <Button class="w-full"  type="accent" @clicked="goToTesting">Testing & Diagnosis</Button>
    </div>
    <div class="mt-4 w-64">
      <Button class="w-full" @clicked="goToHome">No</Button>
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
      this.$router.push('/document/symptoms')
    },
    goToTesting() {
      this.$router.push('/document/testing')
    },
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>