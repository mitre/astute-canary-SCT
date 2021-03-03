<template>
  <div class="flex flex-col justify-center mx-auto w-full md:w-1/2 px-4">
    <div class="mt-8 flex flex-rowmx-auto">
      <Button type="light" @clicked="backToDocumentPage">Back</Button>
    </div>
    <div class="w-auto mx-auto p-4 mt-12">
      <survey :json="json" :results="reportedVaccination" @results="setVaccination"></survey>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Button from '@/components/Button.vue'
import Survey from '@/components/Survey.vue'
import vaccinationJson from '@/static/survey-configs/vaccination.json';
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
      json: vaccinationJson,
      reportedVaccination: {},
      myCss: {
          navigationButton: "bg-primary text-light-text"   
      },
      surveyCreated: false
    }
  },
  methods: {
    setVaccination(vaccination) {
      this.$store.commit('vaccination/SET_VACCINATION_HISTORY', vaccination)
      this.backToDocumentPage()
    },
    backToDocumentPage() {
      this.$router.push('/document')
    }
  },
  mounted () {
    this.$store.commit('pageTitle/SET_PAGE_TITLE', 'Document - Vaccination')
  }
}
</script>
