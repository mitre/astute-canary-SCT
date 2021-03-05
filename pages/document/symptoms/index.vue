<template>
  <div class="flex flex-col justify-center mx-auto w-full md:w-1/2 px-4">
    <div class="mt-8 flex flex-rowmx-auto">
      <Button type="light" @clicked="backToDocumentPage">Back</Button>
    </div>
    <div class="w-auto mx-auto p-4 mt-12" v-if="surveyCreated">
      <client-only>
        <survey :json="json" :results="reportedSymptoms"></survey>
      </client-only>
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
    title: 'Astute Canary | Document Symptoms'
  },
  components: {
    Button,
    Survey
  },
  data() {
    return {
      json: {},
      reportedSymptoms: {},
      myCss: {
          navigationButton: "bg-primary text-light-text"   
      },
      surveyCreated: false
    }
  },
  methods: {
    async createSurvey() {
      axios.get('/survey-configs/symptom.json')
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
      this.$store.commit('symptoms/SET_TODAY_SYMPTOMS', symptoms)
      this.backToDocumentPage()
    },
    backToDocumentPage() {
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
