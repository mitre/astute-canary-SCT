<template>
  <div class="flex flex-col justify-center mx-auto w-full md:w-1/2 px-4">
    <div class="mt-8 flex flex-rowmx-auto">
      <Button type="light" @clicked="goBack">Back</Button>
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
</template>
<script>
import { mapMutations } from 'vuex'
import Button from '@/components/AppButton.vue'
import Survey from '@/components/AppSurvey.vue'
import SymptomsComplete from '@/components/AppSymptomsComplete.vue'
import axios from 'axios'
export default {
  head: {
    title: 'Astute Canary | Document Symptoms'
  },
  components: {
    Button,
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
      const base = process.env.NODE_ENV === 'production' ? '/astute-canary/' : ''
      const url = base + '/survey-configs/symptom.json'
      console.log(url)
      axios.get(url)
      .then(response => {
          console.log(response)
          this.json = response.data
          this.surveyCreated = true
      })
      .catch(error => {
        console.log(error)
      })
    },
    setSymptoms(symptoms) {
      console.log('complete')
      this.$store.commit('symptoms/SET_TODAY_SYMPTOMS', symptoms)
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
    this.$store.commit('pageTitle/SET_PAGE_TITLE', 'Document - Symptoms')

    // Check if user has reported symptoms today
    // this.reportedSymptoms = this.$store.state.symptoms.todaySymptoms.symptoms
  }
}
</script>
