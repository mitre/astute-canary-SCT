<template>
<div class="w-full bg-page-pattern bg-no-repeat bg-cover bg-center min-h-screen">
  <div class="flex flex-col justify-center mx-auto w-full md:w-1/2 px-4 pb-24">
    <div class="flex flex-row w-full justify-between items-center mx-auto pt-12">
      <app-back-button type="secondary" @clicked="goBack">Back</app-back-button>
      <app-powered-by-statement/>
    </div>
    <div class="w-auto mx-auto p-4 mt-12" v-if="surveyCreated && !checkInComplete">
      <survey :json="json" :results="reportedVaccination" @resultsCaptured="setVaccination"></survey>
    </div>
    <div class="w-auto mx-auto p-4 mt-12" v-if="checkInComplete">
      <vaccination-complete />
    </div>
  </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
import AppButton from '@/components/AppButton.vue'
import Survey from '@/components/AppSurvey.vue'
import VaccinationComplete from '@/components/AppVaccinationsComplete.vue'
import axios from 'axios'

export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | Track Vaccination'
    }
  },
  components: {
    AppButton,
    Survey,
    VaccinationComplete
  },
  data() {
    return {
      json: {},
      reportedVaccination: {},
      myCss: {
          navigationButton: "bg-primary text-light-text"   
      },
      surveyCreated: false,
      checkInComplete: false
    }
  },
  methods: {
    async createSurvey() {
      const url = '/survey-configs/vaccination.json'
      axios.get(url)
      .then(response => {
          this.json = response.data
          this.surveyCreated = true
      })
      .catch(error => {
        console.log(error)
      })
    },
    setVaccination(vaccination) {
      this.$store.commit('reporting/SET_TODAY_VACCINATION', vaccination)
      this.checkInComplete = true
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  created () {
    // this calls the function to get the symptom survey json config file. 
   this.createSurvey()
  },
  mounted () {
    this.$store.commit('general/SET_PAGE_TITLE', 'Track - Vaccination')
  }
}
</script>
