<template>
  <div class="flex flex-col justify-center mx-auto w-full md:w-1/2 px-4">
    <div class="mt-8 flex flex-rowmx-auto">
      <Button type="light" @clicked="backToDocumentPage">Back</Button>
    </div>
    <div class="w-auto mx-auto p-4 mt-12" v-if="surveyCreated">
      <survey :json="json" :results="reportedSymptoms" @results="setSymptoms"></survey>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Button from '@/components/Button.vue'
import Survey from '@/components/Survey.vue'

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
      fetch(process.env.baseUrl + '/survey-configs/symptom.json')
      .then(r => r.json())
      .then(json => {
        this.json = json
        // TODO - Set selected if the user has already entered symptoms 

        this.surveyCreated = true
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
    this.reportedSymptoms = this.$store.state.symptoms.todaySymptoms.symptoms
  }
}
</script>
