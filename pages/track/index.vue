<template>
  <div class="w-full h-full flex flex-col min-h-screen mx-auto bg-page-pattern bg-no-repeat bg-cover bg-center pb-16">
    <div class="max-w-sm mx-auto flex flex-col flex-grow h-full w-full pt-12">
      <app-powered-by-statement/>
      <h2 class="text-3xl text-white font-light pt-12" v-if="!loggedSymptoms">What would you like to <span class="font-bold">track</span> today?</h2>
      <h2 class="text-xl text-dark-text font-bold pt-12" v-else>Thank you for logging your symptoms. <br> Would you like to document anything else?</h2>
      <div class="flex-grow my-auto bg-light-background p-4 rounded-t-3xl mt-16">
        <div class="flex flex-col self-center h-full items-center justify-center mt-4">
          <app-icon-button type="tertiary" @clicked="reportSymptoms" icon="thermometer-full" text="Symptoms"></app-icon-button>
          <app-icon-button type="tertiary" icon="syringe" class="mt-8" @clicked="reportVaccination" text="Vaccination">Vaccination Experience</app-icon-button>
          <app-icon-button type="tertiary" icon="microscope" class="mt-8" @clicked="reportTesting" text="Testing">Testing & Diagnosis</app-icon-button>
        </div>
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
