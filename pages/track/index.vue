<template>
  <div class="text-center min-h-screen bg-page-pattern bg-no-repeat bg-cover bg-center ">
    <div class="max-w-sm mx-auto px-4 md:px-0 pt-12 pb-24">
      <app-powered-by-statement/>
      <h2 class="text-2xl md:text-4xl text-white font-light pt-12" v-if="!loggedSymptoms">What would you like to <span class="font-bold">track</span> today?</h2>
      <h2 class="text-lg md:text-2xl text-dark-text font-bold pt-12" v-else>Thank you for logging your symptoms. <br> Would you like to document anything else?</h2>
      <div class="flex flex-col w-36 mx-auto mt-12">
        <app-icon-button type="symptom" @clicked="reportSymptoms" icon="thermometer-full" text="Symptoms"></app-icon-button>
        <app-icon-button type="vaccination" icon="syringe" class="mt-8" @clicked="reportVaccination" text="Vaccination">Vaccination Experience</app-icon-button>
        <app-icon-button type="testing" icon="microscope" class="mt-8" @clicked="reportTesting" text="Testing">Testing & Diagnosis</app-icon-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppIconButton from '@/components/AppIconButton.vue'
export default {
  components: {
    AppIconButton
  },
  head() {
    return {
      title: this.$store.state.general.appName + ' | Track'
    }
  },
  data() {
    return {
      loggedSymptoms: false
    }
  },
  methods: {
    reportSymptoms() {
      this.$router.push('/track/symptoms')
    },
    reportVaccination() {
      this.$router.push('/track/vaccination')
    },
    reportTesting() {
      this.$router.push('/track/testing')
    }
  },
  mounted () {
    this.$store.commit('general/SET_PAGE_TITLE', 'Track')
  }
}
</script>
