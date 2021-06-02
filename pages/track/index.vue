<template>
  <div class="w-full h-full flex flex-col min-h-screen mx-auto bg-page-pattern bg-no-repeat bg-cover bg-right-top pb-18">
    <div class="max-w-md mx-auto flex flex-col flex-grow h-full w-full pt-8">
      <app-powered-by-statement/>
      <h2 class="text-3xl text-white font-light pt-12 px-4">What would you like to <span class="font-bold">track</span> today?</h2>
      <div class="flex-grow my-auto bg-light-background p-4 rounded-t-4xl mt-16 pb-24">
        <div class="mx-auto mt-12" style="width:300px;">
          <div class="grid grid-cols-2 gap-4">
            <app-icon-button type="tertiary" size="large" @clicked="reportSymptoms" icon="thermometer-full" text="Symptoms"></app-icon-button>
            <app-icon-button type="tertiary" size="large" icon="syringe" @clicked="reportVaccination" text="Vaccination">Vaccination Experience</app-icon-button>
            <app-icon-button type="tertiary" size="large" icon="microscope" @clicked="reportTesting" text="Testing">Testing & Diagnosis</app-icon-button>
          </div>
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
