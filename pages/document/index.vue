<template>
  <div class="text-center">
    <h2 class="text-2xl text-dark-text font-bold mt-12" v-if="!loggedSymptoms">What would you like to document today?</h2>
    <h2 class="text-2xl text-dark-text font-bold mt-12" v-else>Thank you for logging your symptoms. <br> Would you like to document anything else?</h2>
    <div class="flex flex-col w-64 mx-auto mt-12">
      <Button round @clicked="reportSymptoms">Report Symptoms</Button>
      <Button type="blue" round class="mt-8" @clicked="reportVaccination">Vaccination Experience</Button>
      <Button type="accent" round class="mt-8" @clicked="reportTesting">Testing & Diagnosis</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  components: {
    Button
  },
  data() {
    return {
      loggedSymptoms: false
    }
  },
  methods: {
    reportSymptoms() {
      this.$router.push('/document/symptoms')
    },
    reportVaccination() {
      this.$router.push('/document/vaccination')
    },
    reportTesting() {
      this.$router.push('/document/testing')
    }
  },
  mounted () {
    this.$store.commit('pageTitle/SET_PAGE_TITLE', 'Document')
    this.loggedSymptoms = this.$store.state.symptoms.todaySymptoms.symptoms.length > 0
  }
}
</script>
