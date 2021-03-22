<template>
  <div class="w-full min-h-screen px-4 md:px-0 flex flex-col mx-auto bg-primary pb-24">
    <div class="w-full">
      <div class="max-w-sm mx-auto pt-12">
        <app-powered-by-statement/>
        <h2 class="text-2xl md:text-3xl tracking-wide text-gray-400 letter font-light mt-12 ">Welcome back {{ firstname }}</h2> 
        <h3 v-if="!feeling" class="font-bold mt-2 text-2xl md:text-3xl tracking-wide text-light-text">How are you feeling</h3>
        <div class="flex flex-row justify-between my-8 w-full" v-if="!feeling">
          <app-feeling-button round @clicked="setFeeling('good')" icon="smile" type="success" prefix="far" text="Good"></app-feeling-button>
          <app-feeling-button round class="ml-4" @clicked="setFeeling('fair')" icon="meh" type="warning" prefix="far" text="Fair"></app-feeling-button>
          <app-feeling-button round class="ml-4" @clicked="setFeeling('poor')" icon="frown" type="danger" prefix="far" text="Poor"></app-feeling-button>
        </div>
        <div class="flex flex-col justify-center my-8 w-full text-gray-200 text-lg" v-else>
        <span class="leading-loose">
            Thanks for checking in today!<br/>
            You indicated you are feeling
              <font-awesome-icon :icon="['far', feelingIcon]" class="mx-2" :class="{'text-danger': feeling === 'poor', 'text-warning': feeling === 'fair', 'text-success' : feeling === 'good'}"></font-awesome-icon>
              <span class="font-bold" :class="{'text-danger': feeling === 'poor', 'text-warning': feeling === 'fair', 'text-success' : feeling === 'good'}">{{ feeling }}</span>
        </span>
          <div class="mt-4">
            Want to <button @click="resetFeeling" class="font-bold text-secondary underline">change your status</button>? <button @click="reportSymptoms" class="font-bold text-secondary underline">Report symptoms</button>? 
          </div>
        </div>
        <div class="flex flex-col bg-light-background py-12 rounded-2xl mt-4 md:mt-12 mx-auto text-primary">
          <app-metric :metric="symptomLength" type="danger"><span class="md:text-lg">You have been experiencing symptoms for {{ symptomLength }} days</span></app-metric>
          <app-metric :metric="loggingDuration" type="success" class="mt-8"><span class="md:text-lg">You have logged your symptoms for {{ loggingDuration }} days</span></app-metric>
          <div class="mt-2 md:mt-12">
            <p class="text-primary text-sm max-w-md bg-white shadow-xl rounded-xl p-4 m-4">
              <span class="font-bold">Important Information:</span> 
              {{ importantInformation }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
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
      todaysDate: undefined,
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
    }
  },
  computed: {
    today () {
      return this.$store.state.reporting.todayReporting.date
    },
    history() {
      return this.$store.state.reporting.reportingHistory
    },
    feeling () {
      return this.$store.state.reporting.todayReporting.overallFeeling
    },
    firstname () {
      return this.$store.state.profile.profile.firstname
    },
    symptomLength () {
      return this.$store.state.reporting.symptomLength
    },
    loggingDuration () {
      return this.$store.state.reporting.loggingDuration
    }
  },
  mounted () {
    this.$store.commit('general/SET_PAGE_TITLE', 'Home')
    this.appName = this.$store.state.general.appName
    this.importantInformation = this.$store.state.general.importantInformation
    // If last entry was not today, reset. Date Syntax MM/DD/YYYY
    var dateObj = new Date();
    this.todaysDate = this.$moment(dateObj).format('MM/DD/YYYY')
    if (this.$store.state.reporting.todayReporting.date !== this.todaysDate) {
      this.$store.commit('reporting/RESET_DAY')
      this.$store.commit('reporting/SET_TODAY_DATE', this.todaysDate)
    }
    

  }
}
</script>