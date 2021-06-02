<template>
<div class="h-full flex flex-col bg-page-pattern bg-no-repeat bg-cover bg-center min-h-screen">
  <div class="max-w-md mx-auto flex flex-col flex-grow h-full w-full">
    <div class="flex flex-row w-full justify-between items-center mx-auto pt-8 px-4">
      <app-back-button type="secondary" @clicked="goBack">Back</app-back-button>
      <app-powered-by-statement/>
    </div>
    <div class="w-auto mx-auto mt-8 pb-24" v-if="surveyCreated && !checkInComplete">
      <span class="flex px-4 text-sm text-gray-200 font-light mb-4">
        Filling in vaccination information for 
        <span v-if="todayDate === activeDate">
          <span class="font-bold ml-1"> today:</span>
          {{ $moment(activeDate).format('dddd') }}, {{ $moment(activeDate).format('MMMM') }} {{ $moment(activeDate).format('Do') }}
        </span>
        <span v-else>
          <span class="font-bold ml-1">{{ $moment(activeDate).format('dddd') }}, {{ $moment(activeDate).format('MMMM') }} {{ $moment(activeDate).format('Do') }}</span>
        </span>
      </span>

      <client-only>
        <survey :json="json" :results="reportedVaccination" @resultsCaptured="setVaccination"></survey>
      </client-only>
    </div>
    <h2 v-if="checkInComplete" class="mt-12 text-2xl text-gray-200 font-light px-4">Thank you for <span class="font-bold">logging your vaccination!</span></h2>
    <vaccination-complete class="mt-8" v-if="checkInComplete"/>
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
  computed: {
    activeDate () {
      return this.$store.state.reporting.activeDate
    },
    todayDate () {
      return this.$store.state.reporting.todayDate
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
      this.$store.commit('reporting/SET_DAY_VACCINATION', vaccination)
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
