<template>
  <div class="w-full h-full flex flex-col min-h-screen mx-auto bg-home-pattern bg-no-repeat bg-cover bg-center pb-16">
      <div class="max-w-sm mx-auto flex flex-col flex-grow h-full w-full pt-12">
        <app-powered-by-statement/>
        <div class="bg-light-background py-4 rounded-2xl mt-4 px-8">
          <h2 class="text-2xl tracking-wide text-dark-text letter font-light">Welcome back {{ firstname }}</h2> 
          <h3 v-if="!feeling" class="font-bold text-2xl tracking-wide text-dark-text">How are you feeling today?</h3>
          <div class="flex flex-row justify-between mt-4 pb-4 w-full" v-if="!feeling">
            <app-feeling-button @clicked="setFeeling('good')" icon="smile" type="success" prefix="fa" text="Good"></app-feeling-button>
            <app-feeling-button class="ml-4" @clicked="setFeeling('fair')" icon="meh" type="warning" prefix="fa" text="Fair"></app-feeling-button>
            <app-feeling-button class="ml-4" @clicked="setFeeling('poor')" icon="frown" type="danger" prefix="fa" text="Poor"></app-feeling-button>
          </div>
          <div class="flex flex-col justify-center my-8 w-full text-gray-200 text-lg" v-else>
            <span class="text-2xl font-light">
                Thanks for checking in today!<br/>
                You indicated you are feeling
                <font-awesome-icon :icon="['far', feelingIcon]" class="mx-2" :class="{'text-danger': feeling === 'poor', 'text-warning': feeling === 'fair', 'text-success' : feeling === 'good'}"></font-awesome-icon>
                <span class="font-bold" :class="{'text-danger': feeling === 'poor', 'text-warning': feeling === 'fair', 'text-success' : feeling === 'good'}">{{ feeling }}</span>
            </span>
            <div class="mt-4 text-base">
              Want to <button @click="resetFeeling" class="font-bold text-secondary underline">change your status</button>? <button @click="reportSymptoms" class="font-bold text-secondary underline">Report symptoms</button>? 
            </div>
          </div>
        </div>
        <div class="flex-grow  my-auto bg-light-background p-4 rounded-t-3xl mt-16 text-primary">
          <div class="">
              <h2 class="text-xl px-4 pt-4 tracking-wide text-dark-text letter font-light">Need to <span class="font-bold">track</span>?</h2> 
              <div class="mt-4 flex flex-col justify-center self-center my-auto">
                <div class="flex flex-row flex-wrap w-full items-center justify-between">
                  <app-icon-button type="tertiary" @clicked="reportSymptoms" icon="thermometer-full" text="Symptoms"></app-icon-button>
                  <app-icon-button type="tertiary" icon="syringe" @clicked="reportVaccination" text="Vaccination">Vaccination Experience</app-icon-button>
                  <app-icon-button type="tertiary" icon="microscope" @clicked="reportTesting" text="Testing">Testing & Diagnosis</app-icon-button>
                </div>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapGetters } from 'vuex'
import AppFeelingButton from '../components/AppFeelingButton.vue'
import AppPoweredByStatement from '../components/AppPoweredByStatement'
export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | Home'
    }
  },
  components: {
    AppFeelingButton,
    AppPoweredByStatement
  },
  data () {
    return {
      value: 0,
      appName: '',
      importantInformation: '',
      todaysDate: this.$moment().format('MM/DD/YYYY'),
      feelingIcon: 'smile'
    }
  },
  methods: {
    setFeeling (feeling) {
      this.$store.commit('reporting/SET_TODAY_OVERALL_FEELING', feeling)
      if (feeling === 'poor') {
        this.feelingIcon = 'frown'
      } else if (feeling === 'fair') {
        this.feelingIcon = 'meh'
      } else {
        this.feelingIcon = 'smile'
      }
    },
    resetFeeling () {
      this.$store.commit('reporting/RESET_TODAY_OVERALL_FEELING', this.todaysDate)
    },
    reportSymptoms() {
      this.$router.push('/track/symptoms')
    },
    reportVaccination() {
      this.$router.push('/track/vaccination')
    },
    reportTesting() {
      this.$router.push('/track/testing')
    }
  },
  computed: {
    today () {
      return this.$store.state.reporting.todayReporting.date
    },
    feeling () {
      return this.$store.state.reporting.todayReporting.overallFeeling
    },
    firstname () {
      return this.$store.state.profile.profile.firstname
    },
    ...mapGetters({
        // map `this.doneCount` to `this.$store.getters.doneTodosCount`
        history: 'reporting/allReportingHistory',
        symptomLength: 'reporting/experienceSymptomsDuration',
        loggingDuration: 'reporting/loggedDays'
    }),
  },
  mounted () {
    this.$store.commit('general/SET_PAGE_TITLE', 'Home')
    this.appName = this.$store.state.general.appName
    this.importantInformation = this.$store.state.general.importantInformation
    // If last entry was not today, reset. Date Syntax MM/DD/YYYY
    if (this.$store.state.reporting.todayReporting.date !== this.todaysDate) {
      this.$store.commit('reporting/RESET_DAY')
      this.$store.commit('reporting/SET_TODAY_DATE', this.todaysDate)
    }
    

  }
}
</script>