<template>
<div class="h-full w-full flex flex-col min-h-screen">
  <div class="w-full bg-page-pattern bg-no-repeat bg-cover bg-bottom">
    <div class="max-w-md mx-auto flex flex-col flex-grow h-full w-full pt-8 pb-48">
      <div class="flex flex-row w-full justify-between items-center mx-auto px-4">
        <app-back-button type="secondary" @clicked="goBack">Back</app-back-button>
        <app-powered-by-statement/>
      </div>
    </div>
  </div>
  <div class="max-w-md mx-auto flex flex-col flex-grow h-full w-full -mt-40">
    <div class="w-auto mx-auto pb-24" v-if="surveyCreated && !checkInComplete">
      <p class="px-4 text-sm text-dark-text font-light mb-4">
        Filling in testing information for 
        <span v-if="todayDate === activeDate">
          <span class="font-bold"> today:</span>
          {{ $moment(activeDate).format('dddd') }}, {{ $moment(activeDate).format('MMMM') }} {{ $moment(activeDate).format('Do') }}
        </span>
        <span v-else>
          <span class="font-bold ml-1">{{ $moment(activeDate).format('dddd') }}, {{ $moment(activeDate).format('MMMM') }} {{ $moment(activeDate).format('Do') }}</span>
        </span>
      </p>
      <client-only>
        <survey :json="json" :results="reportedTesting" @resultsCaptured="setTesting"></survey>
      </client-only>
    </div>
    
    <h2 class="text-2xl text-dark-text font-light px-4" v-if="checkInComplete">Thank you for logging your testing activity.</h2>
    <testing-complete class="mt-24" v-if="checkInComplete" />
  </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
import AppButton from '@/components/AppButton.vue'
import Survey from '@/components/AppSurvey.vue'
import TestingComplete from '@/components/AppTestingComplete.vue'
import axios from 'axios'

export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | Track Testing'
    }
  },
  components: {
    AppButton,
    Survey,
    TestingComplete
  },
  data() {
    return {
      json: {},
      reportedTesting: {},
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
      const url = '/survey-configs/testing.json'
      axios.get(url)
      .then(response => {
          this.json = response.data
          this.surveyCreated = true
      })
      .catch(error => {
        console.log(error)
      })
    },
    setTesting(testing) {
      this.$store.commit('reporting/SET_DAY_TESTING', testing)
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
    this.$store.commit('general/SET_PAGE_TITLE', 'Track - Testing')
  }
}
</script>