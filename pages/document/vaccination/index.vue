<template>
  <div class="flex flex-col justify-center mx-auto w-full md:w-1/2 px-4">
    <div class="mt-8 flex flex-rowmx-auto">
      <Button type="light" @clicked="backToDocumentPage">Back</Button>
    </div>
    <div class="w-auto mx-auto p-4 mt-12" v-if="surveyCreated">
      <survey :json="json" :results="reportedVaccination" @resultsCaptured="setVaccination"></survey>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Button from '@/components/Button.vue'
import Survey from '@/components/SurveyComponent.vue'
import axios from 'axios'

export default {
  head: {
    title: 'Astute Canary | Document Vaccination'
  },
  components: {
    Button,
    Survey
  },
  data() {
    return {
      json: {},
      reportedVaccination: {},
      myCss: {
          navigationButton: "bg-primary text-light-text"   
      },
      surveyCreated: false
    }
  },
  methods: {
    async createSurvey() {
      axios.get('/survey-configs/vaccination.json')
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
      this.backToDocumentPage()
    },
    backToDocumentPage() {
      this.$router.push('/document')
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
