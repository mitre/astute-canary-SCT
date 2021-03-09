<template>
  <div class="flex flex-col justify-center mx-auto w-full md:w-1/2 px-4">
    <div class="mt-8 flex flex-rowmx-auto">
      <Button type="light" @clicked="goBack">Back</Button>
    </div>
    <div class="w-auto mx-auto p-4 mt-12" v-if="surveyCreated && !checkInComplete">
      <survey :json="json" :results="reportedVaccination" @resultsCaptured="setVaccination"></survey>
    </div>
    <div class="w-auto mx-auto p-4 mt-12" v-if="checkInComplete">
      <vaccination-complete />
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Button from '@/components/AppButton.vue'
import Survey from '@/components/AppSurvey.vue'
import VaccinationComplete from '@/components/AppVaccinationsComplete.vue'
import axios from 'axios'

export default {
  head: {
    title: 'Astute Canary | Document Vaccination'
  },
  components: {
    Button,
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
      const base = process.env.NODE_ENV === 'production' ? '/astute-canary/' : ''
      const url = base + '/survey-configs/vaccination.json'
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
    setVaccination(vaccination) {
      this.$store.commit('vaccination/SET_VACCINATION_HISTORY', vaccination)
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
    this.$store.commit('pageTitle/SET_PAGE_TITLE', 'Document - Vaccination')
  }
}
</script>
