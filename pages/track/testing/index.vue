<template>
<div class="h-full w-full bg-page-pattern bg-no-repeat bg-cover bg-center min-h-screen">
  <div class="mx-auto w-full md:w-1/2 px-4 pb-24">
    <div class="flex flex-row w-full justify-between items-center mx-auto pt-12">
      <app-back-button type="secondary" @clicked="goBack">Back</app-back-button>
      <app-powered-by-statement/>
    </div>
    <div class="max-w-sm mx-auto flex flex-col h-full w-full pt-12" v-if="surveyCreated && !checkInComplete">
      <survey :json="json" :results="reportedTesting" @resultsCaptured="setTesting"></survey>
    </div>
    <div class="max-w-sm mx-auto flex flex-col flex-grow h-full w-full pt-12" v-if="checkInComplete">
      <h2 class="text-2xl text-gray-200 font-light">Thank you for logging your symptoms.</h2>
      <testing-complete />
    </div>
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
      this.$store.commit('reporting/SET_TODAY_TESTING', testing)
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