<template>
<div class="w-full h-full flex flex-col bg-page-pattern bg-no-repeat bg-cover bg-right-top min-h-screen">
  <div class="max-w-md mx-auto flex flex-col flex-grow h-full w-full">
    <div class="flex flex-row w-full justify-between items-center mx-auto pt-8 px-4">
      <app-back-button type="secondary" @clicked="goBack">Back</app-back-button>
      <app-powered-by-statement/>
    </div>
    <div class="w-auto mx-auto mt-8 pb-24" v-if="surveyCreated && !checkInComplete">
      <p class="px-4 text-sm text-gray-200 font-light mb-4">
        For
        <span v-if="todayDate === activeDate">
          <span class="font-bold">today:</span>
          {{ $moment(activeDate).format('dddd') }}, {{ $moment(activeDate).format('MMMM') }} {{ $moment(activeDate).format('Do') }}
        </span>
        <span v-else>
          <span class="font-bold ml-1">{{ $moment(activeDate).format('dddd') }}, {{ $moment(activeDate).format('MMMM') }} {{ $moment(activeDate).format('Do') }}</span>
        </span>
      </p>

      <client-only>
        <survey :json="json" :results="reportedSymptoms" @resultsCaptured="setSymptoms"></survey>
      </client-only>
    </div>
    <h2 v-if="checkInComplete" class="mt-12 text-2xl text-gray-200 font-light px-4"  style="margin-top: 20%">Thank you for <span class="font-bold">logging your symptoms!</span></h2>
    <symptoms-complete class="mt-24" v-if="checkInComplete"/>
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
      const base = process.env.NODE_ENV === 'production' ? '/astute-canary-SCT/' : ''
      const url = base + '/survey-configs/symptom.json'
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
      this.$store.commit('reporting/SET_DAY_SYMPTOMS', symptoms)
      this.checkInComplete = true
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  computed: {
    activeDate () {
      return this.$store.state.reporting.activeDate
    },
    todayDate () {
      return this.$store.state.reporting.todayDate
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
