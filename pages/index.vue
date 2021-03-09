<template>
  <div class="w-full flex flex-col text-center justify-center mx-auto">
    <h2 class="text-2xl text-dark-text font-bold mt-12">Welcome back {{ firstname }}! <br/> <span v-if="!feeling.feeling">How are you feeling today?</span></h2>
    <div class="flex flex-row justify-center my-8 w-full" v-if="!feeling.feeling">
      <Button round @clicked="setFeeling('healthy')">I feel as healthy as normal</Button>
      <Button round class="ml-4" @clicked="setFeeling('unwell')">I'm feeling unwell</Button>
    </div>
    <div class="flex flex-col justify-center my-8 w-full text-secondary" v-else>
     <span>
        Thanks for checking in today! 
        You indicated you are feeling <span class="font-bold">{{ feeling.feeling }}</span>.
     </span>
      <div class="pt-2 text-sm">
        Want to <button @click="resetFeeling" class="font-bold underline">change your status</button>? <button @click="reportSymptoms" class="font-bold underline">Report symptoms</button>? 
      </div>
    </div>
    <div>
      <p class="text-dark-text text-sm max-w-md mx-auto mt-8">
        <span class="font-bold">Important Information:</span> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div class="flex flex-col mt-12 mx-auto text-dark-text">
      <div class="flex flex-row items-center ">
        <div class="rounded-full border-2 border-warning h-16 w-16 flex items-center justify-center text-3xl font-bold">
          {{ symptomLength }}
        </div>
        <span class="ml-2">You have been experiencing symptoms for {{ symptomLength }} days</span>
      </div>
      <div class="flex flex-row items-center mt-8">
        <div class="rounded-full border-2 border-good h-16 w-16 flex items-center justify-center text-3xl font-bold">
          {{ loggingDuration }}
        </div>
        <span class="ml-2">You have logged your symptoms for {{ loggingDuration }} days</span>  
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Button from '../components/AppButton.vue'

export default {
  head: {
    title: 'Astute Canary | Home'
  },
  components: {
    Button
  },
  data () {
    return {
      value: 0
    }
  },
  methods: {
    setFeeling (feeling) {
      this.$store.commit('symptoms/SET_TODAY_OVERALL_FEELING', feeling)
      if (feeling === 'unwell') {
        this.$router.push('/document/symptoms')
      }
    },
    resetFeeling () {
      this.$store.commit('symptoms/RESET_TODAY_OVERALL_FEELING')
    },
    reportSymptoms() {
      this.$router.push('/document/symptoms')
    }
  },
  computed: {
    feeling () {
      return this.$store.state.symptoms.todaySymptoms
    },
    firstname () {
      return this.$store.state.profile.firstname
    },
    symptomLength () {
      return this.$store.state.symptoms.symptomLength
    },
    loggingDuration () {
      return this.$store.state.symptoms.loggingDuration
    }
  },
  mounted () {
    this.$store.commit('pageTitle/SET_PAGE_TITLE', 'Home')

    // Date Syntax YYYY/MM/DD
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var todaysDate = year + "/" + month + "/" + day;

    this.$store.commit('symptoms/SET_TODAY_DATE', todaysDate)
    // if(todaysDate !== this.$store.state.symptoms.todaySymptoms.date) {
    //   this.$store.commit('symptoms/RESET_DAY')
    //   this.$store.commit('symptoms/SET_TODAY_DATE', todaysDate)
    // } 
  }
}
</script>