<template>
<div class="w-full bg-page-pattern bg-no-repeat bg-cover bg-center  min-h-screen">
  <div class="flex flex-col justify-center mx-auto w-full md:w-1/2 px-4 pb-24">
    <div class="flex flex-row w-full justify-between items-center mx-auto pt-12">
      <app-back-button type="secondary" @clicked="goBack">Back</app-back-button>
      <app-powered-by-statement/>
    </div>
    <div class="w-auto mx-auto p-4 mt-12" v-if="surveyCreated && !checkInComplete">
      <client-only>
        <survey :json="json" :results="reportedSymptoms" @resultsCaptured="setSymptoms"></survey>
      </client-only>
    </div>
    <div class="w-auto mx-auto p-4 mt-12" v-if="checkInComplete">
      <symptoms-complete />
    </div>
  </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
import AppButton from '@/components/AppButton.vue'
import Survey from '@/components/AppSurvey.vue'
import SymptomsComplete from '@/components/AppSymptomsComplete.vue'
import axios from 'axios'
export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | Track Symptoms'
    }
  },
  components: {
    AppButton,
    Survey,
    SymptomsComplete
  },
  data() {
    return {
      json: {},
      reportedSymptoms: {},
      checkInComplete: false,
      myCss: {
          navigationButton: "bg-primary text-light-text"   
      },
      surveyCreated: false
    }
  },
  methods: {
    async createSurvey() {
      const url = '/survey-configs/symptom.json'
      axios.get(url)
      .then(response => {
          this.json = response.data
          this.surveyCreated = true
      })
      .catch(error => {
        console.log(error)
      })
    },
    setSymptoms(symptoms) {
      this.$store.commit('reporting/SET_TODAY_SYMPTOMS', symptoms)
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
    // Set the header page title 
    this.$store.commit('general/SET_PAGE_TITLE', 'Track - Symptoms')

    // Check if user has reported symptoms today
    // this.reportedSymptoms = this.$store.state.symptoms.todaySymptoms.symptoms
  }
}
</script>
