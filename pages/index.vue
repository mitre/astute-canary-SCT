<template>
  <div class="w-full h-full flex flex-col min-h-screen mx-auto bg-home-pattern bg-no-repeat bg-cover bg-center pb-16">
      <div class="max-w-md mx-auto flex flex-col flex-grow h-full w-full pt-12">
        <app-powered-by-statement/>
        <div class="mt-8 w-full" v-if="weekOfDates.length > 0">
          <app-date-slide :dates="weekOfDates" @changedDate="setDate" />
        </div>
        <div class="bg-light-background h-48 pt-4 rounded-2xl px-8 border-b-18 border-transparent"
            :class="{'border-success' : selectedDay.overallFeeling === 'good', 'border-warning': selectedDay.overallFeeling === 'fair', 'border-danger': selectedDay.overallFeeling === 'poor'}"
            v-if="selectedDay">
          <span v-if="!selectedDay.overallFeeling && selectedDay.date === todaysDate">
            <h2 class="text-xl tracking-wide text-dark-text letter font-light">Welcome back {{ firstname }}</h2> 
            <h3 class="font-bold text-xl tracking-wide text-dark-text">How are you feeling today?</h3>
          </span>
          <span v-if="!selectedDay.overallFeeling && selectedDay.date !== todaysDate">
            <h2 class="text-lg tracking-wide text-dark-text letter font-light">You did not report your overall feeling.</h2> 
            <h3 class="font-bold text-xl tracking-wide text-dark-text">How were you feeling?</h3>
          </span>
          <div class="flex flex-row justify-center items-center w-full mt-4" v-if="!selectedDay.overallFeeling">
            <app-feeling-button @clicked="setFeeling('good')" icon="smile" type="success" prefix="fa" text="Good"></app-feeling-button>
            <app-feeling-button class="ml-4" @clicked="setFeeling('fair')" icon="meh" type="warning" prefix="fa" text="Fair"></app-feeling-button>
            <app-feeling-button class="ml-4" @clicked="setFeeling('poor')" icon="frown" type="danger" prefix="fa" text="Poor"></app-feeling-button>
          </div>
          <div class="flex flex-col justify-center h-full w-full text-dark-text text-lg py-2" v-else>
            <span class="text-2xl font-light">
                <p class="mt-4">Thanks for checking in<span v-if="selectedDay.date === todaysDate"> today</span>! You reported that you 
                  <span v-if="selectedDay.date === todaysDate">feel</span> <span v-else>felt</span> 
                  <span class="font-bold">{{ selectedDay.overallFeeling }}</span>.
                </p>
            </span>
            <div class="mt-4 text-sm text-right self-end">
              <button @click="resetFeeling" class="uppercase font-bold text-primary">change status</button>
            </div>
          </div>
        </div>
        <div class="flex-grow bg-light-background p-4 rounded-t-4xl mt-4 text-primary">
          <div class="">
              <h2 class="text-xl px-4 pt-4 tracking-wide text-dark-text letter font-light">Need to <span class="font-bold">track</span>?</h2> 
              <div class="mt-4 flex flex-col justify-center self-center my-auto">
                <div class="flex flex-row flex-wrap w-full items-center justify-center">
                  <app-icon-button class="mt-4" type="tertiary" @clicked="reportSymptoms" icon="thermometer-full" text="Symptoms"></app-icon-button>
                  <app-icon-button class="mt-4 ml-4" type="tertiary" icon="syringe" @clicked="reportVaccination" text="Vaccination">Vaccination Experience</app-icon-button>
                  <app-icon-button class="mt-4 ml-4" type="tertiary" icon="microscope" @clicked="reportTesting" text="Testing">Testing & Diagnosis</app-icon-button>
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
import AppPoweredByStatement from '../components/AppPoweredByStatement.vue'
import AppDateSlide from '../components/AppDateSlide.vue'
export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | Home'
    }
  },
  components: {
    AppFeelingButton,
    AppPoweredByStatement,
    AppDateSlide
  },
  data () {
    return {
      value: 0,
      appName: '',
      importantInformation: '',
      daysDate: this.$moment().format('MM/DD/YYYY'),
      todaysDate: this.$moment().format('MM/DD/YYYY'),
      feelingIcon: 'smile',
      feeling: undefined,
      weekOfDates: [],
      selectedDay: undefined
    }
  },
  methods: {
    setFeeling (feeling) {
      this.$store.commit('reporting/SET_DAY_OVERALL_FEELING', feeling )
      if (feeling === 'poor') {
        this.feelingIcon = 'frown'
      } else if (feeling === 'fair') {
        this.feelingIcon = 'meh'
      } else {
        this.feelingIcon = 'smile'
      }
      this.getWeekOfDates()
    },
    resetFeeling () {
      this.$store.commit('reporting/RESET_DAY_OVERALL_FEELING', this.daysDate)
      this.getWeekOfDates()
    },
    reportSymptoms() {
      this.$router.push('/track/symptoms')
    },
    reportVaccination() {
      this.$router.push('/track/vaccination')
    },
    reportTesting() {
      this.$router.push('/track/testing')
    },
    setDate(date) {
      this.$store.commit('reporting/SET_SELECTED_DATE', date)
      this.selectedDay = this.getReportedDayHistory(date)
    },
    getWeekOfDates() {
      var date = this.daysDate
      this.weekOfDates = []
      this.weekOfDates.push(date)
      for (var i = 0; i < 6; i++) {
        date = this.$moment(date).subtract(1, 'days').format('MM/DD/YYYY')
        this.weekOfDates.push(date)
      }
    },
    getReportedDayHistory(date) {
      var selectedDateHistory = {
        date: date,
        overallFeeling: undefined,
        symptomsReported: {},
        vaccinationReported: {},
        testingReported: {}
      }
      for (var i = 0; i < this.history.length; i++) {
        if (this.history[i].date === date) {
          selectedDateHistory = this.history[i]
        }
      }
      return selectedDateHistory
    }
  },
  computed: {
    firstname () {
      return this.$store.state.profile.profile.firstname
    },
    ...mapGetters({
        // map `this.history` to `this.$store.getters.allReportingHistory`
        history: 'reporting/allReportingHistory'
    }),
  },
  mounted () {
    this.$store.commit('general/SET_PAGE_TITLE', 'Home')
    this.appName = this.$store.state.general.appName
    this.importantInformation = this.$store.state.general.importantInformation
    this.getWeekOfDates()
    // If last entry was not day, reset. Date Syntax MM/DD/YYYY
    if (this.$store.state.reporting.todayDate !== this.todaysDate) {
      this.$store.commit('reporting/SET_SELECTED_DATE', this.daysDate)
      this.$store.commit('reporting/SET_TODAY_DATE', this.todaysDate)
    }
    if (!this.$store.state.reporting.activeDate) {
      this.$store.commit('reporting/SET_SELECTED_DATE', this.daysDate)
    }

    this.setDate(this.daysDate)
  }
}
</script>
<style>
.rounded-t-4xl {
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
}
.border-b-18 {
  border-bottom-width: 18px;
}
</style>