<template>
<div class="w-full h-full flex flex-col bg-page-pattern bg-no-repeat bg-cover bg-center min-h-screen pb-18">
  <div class="max-w-md mx-auto flex flex-col flex-grow h-full w-full pt-12">
      <app-powered-by-statement/>
      <h2 class="px-4 text-2xl md:text-4xl text-white font-light pt-12">Your <span class="font-bold">history</span></h2>
    <div class="flex-grow my-auto bg-light-background p-4 rounded-t-4xl mt-4 text-primary pb-24">
      <div v-if="attributes.length > 0" class="">
        <v-calendar
          class="w-128 mx-auto"
          color="#081E3A"
          :attributes="attributes"
          :max-date="new Date()"
          @dayclick='dayClicked'
          is-expanded
          is-dark
        >
          <template v-slot:day-content="{ day, dayEvents, attributes }">
            <div class="h-full z-10 overflow-hidden brounded cursor-pointer" v-on="dayEvents">
              <div class="w-full overflow-y-auto overflow-x-auto">
                <span class="day-label text-xs text-gray-200 flex flex-col justify-center text-center h-6 w-6 mx-auto" :class="{'bg-white text-dark-text rounded font-bold' : day.id ==( $moment(todaysDate).format('YYYY') + '-' + $moment(todaysDate).format('MM') + '-' + $moment(todaysDate).format('DD') )}">
                  <span >{{ day.day }} </span>
                </span>
                <span class="content block mx-auto text-center">
                  <span v-for="(attr, index) in attributes" :key="index">
                    <span v-if="attr.customData">
                        <span
                          v-if="attr.customData.category === 'feeling'"
                          :class="attr.customData.class"
                          class="block mx-auto text-center text-xl"
                        >
                          <font-awesome-icon :icon="['fa', attr.customData.icon]"></font-awesome-icon>
                        </span>
                        <span class="inline-block">
                            <span
                              v-if="attr.customData.category === 'symptoms'"
                              class="text-xs text-tertiary"
                            >
                              <font-awesome-icon :icon="['fa', 'thermometer-full']"></font-awesome-icon>
                            </span>
                            <span
                              v-if="attr.customData.category === 'vaccination'"
                              class="text-xs text-tertiary"
                            >
                              <font-awesome-icon :icon="['fa', 'syringe']"></font-awesome-icon>
                            </span>
                            <span
                              v-if="attr.customData.category === 'testing'"
                              class="text-xs text-tertiary"
                            >
                              <font-awesome-icon :icon="['fa', 'microscope']"></font-awesome-icon>
                            </span>
                        </span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </template>
        </v-calendar>
      </div>
      <div class="mt-4 mx-auto p-4 bg-gray-100 rounded-2xl">
        <div
          v-if="selectedDay"
          class="text-dark-text leading-loose">
          <div class="flex flex-row items-center">
            <h3 class="text-secondary-text font-bold text-lg">{{ $moment(selectedDay.date).format('MMMM') }} {{ $moment(selectedDay.date).format('D') }}</h3>
            <span v-if="selectedDay.overallFeeling" class="flex flex-row items-center">
              <span class="flex h-1 w-1 bg-primary rounded-full mx-2" />
              <p>You reported feeling <span class="font-bold">{{ selectedDay.overallFeeling }}</span></p>
            </span>
          </div>
          <span v-if="selectedDay.overallFeeling || Object.keys(selectedDay.symptomsReported).length > 0 || Object.keys(selectedDay.vaccinationReported).length > 0 || Object.keys(selectedDay.testingReported).length > 0">
            <span v-if="Object.keys(selectedDay.symptomsReported).length > 0">
              You documented {{ selectedDay.symptomsReported.Symptoms.length }} <span class="font-bold">symptoms</span>:
              <span class="flex flex-row flex-wrap items-center">
                <span v-for="(symptom, index) in selectedDay.symptomsReported.Symptoms" :key="index" class="bg-highlight text-primary font-bold rounded mt-2 px-2 py-1 mr-2">{{ symptom }}</span>
              </span>
            </span>
            <span v-if="Object.keys(selectedDay.vaccinationReported).length > 0" class="block mt-4">
              <font-awesome-icon :icon="['fa', 'syringe']" class="mr-1 text-tertiary"></font-awesome-icon> You received the {{ selectedDay.vaccinationReported['Dose'] }} dose of <span class="font-bold">{{ selectedDay.vaccinationReported['Vaccination Type'] }}</span>.
            </span>
            <span v-if="Object.keys(selectedDay.testingReported).length > 0" class="block mt-4">
              <font-awesome-icon :icon="['fa', 'microscope']" class="mr-1 text-tertiary"></font-awesome-icon> You received a <span class="lowercase font-bold">{{ selectedDay.testingReported['Testing Type'] }}</span> at a/an {{ selectedDay.testingReported['Location'] }}:
              <span v-if="selectedDay.testingReported['Results Received'] === 'no'">and did not reveive a result at this time</span>
              <span v-if="selectedDay.testingReported['Results Received'] === 'yes'">you received a 
                <span class="lowercase">{{ selectedDay.testingReported['Results'] }}</span> result
              </span>
            </span>
          </span>
          <p v-else>Nothing reported on this day.</p>
        </div>
        <div v-else class="text-gray-400 italic">
          Select a day to see your recorded symptoms
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | History'
    }
  },
  data () {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      todaysDate: new Date(),
      selectedDay: undefined
    }
  },
  computed: {
    ...mapGetters({
        // map `this.doneCount` to `this.$store.getters.doneTodosCount`
        history: 'reporting/allReportingHistory'
    }),
    todaysAttributes() {
      let today = undefined
      for (var i = 0; i < this.attributes.length; i++) {
        if (this.$moment(this.attributes[i].date).format('MM/DD/YYYY') === this.$moment(this.todaysDate.toDateString()).format('MM/DD/YYYY')) {
          today = this.attributes[i]
        }
      }
      return today
    },
    attributes() {
      let ret = []
      var entry = {}
      // compute the symptoms, vaccination and testing history and transition to v-calendar format for visual indicators
      for (var i = 0; i < this.history.length; i++) {
        entry = this.history[i]
        if (this.history[i].overallFeeling) {
          ret.push(
            {
              dates: entry.date,          
              popover: {
                label: 'Overall feeling: ' + entry.overallFeeling
              },
              customData: {
                category: 'feeling',
                title: entry.overallFeeling,
                icon: entry.overallFeeling.toLowerCase() === 'good' ? 'smile' : entry.overallFeeling.toLowerCase() === 'fair' ? 'meh' : 'frown',
                class: entry.overallFeeling.toLowerCase() === 'good' ? 'text-success' : entry.overallFeeling.toLowerCase() === 'fair' ? 'text-warning' : 'text-danger'
              }
            }
          )
        }
        if (this.history[i].symptomsReported) {
          var symptoms = []
          for (const property in this.history[i].symptomsReported) {
            symptoms.push(property + ': ' + this.history[i].symptomsReported[property])
          }
          if (symptoms.length > 0) {
            ret.push(
              {
                dates: entry.date,            
                popover: {
                  label: symptoms.join(', ')
                },
                customData: {
                  category: 'symptoms',
                  class: ''
                }
              }
            )
          }
        }
        if (this.history[i].vaccinationReported) {
          var vaccination = []
          for (const property in this.history[i].vaccinationReported) {
            vaccination.push(property + ': ' + this.history[i].vaccinationReported[property])
          }
          if (vaccination.length > 0) {
            ret.push(
              {
                dates: entry.date,             
                popover: {
                  label: vaccination.join(', ')
                },
                customData: {
                  category: 'vaccination',
                  class: ''
                }
              }
            )
          }
        }
        if (this.history[i].testingReported) {
          var testing = []
          for (const property in this.history[i].testingReported) {
            testing.push(property + ': ' + this.history[i].testingReported[property])
          }
          if (testing.length > 0) {
            ret.push(
              {
                dates: entry.date,            
                popover: {
                  label: testing.join(', ')
                },
                customData: {
                  category: 'testing',
                  class: ''
                }
              }
            )
          }
        }
      }
      return ret
    }
  },
  methods: {
    dayClicked(day) {
      var date = this.$moment(day.id).format('MM/DD/YYYY')
      this.selectedDay = this.getReportedDayHistory(date);
      console.log(date)
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
  mounted () {
    const calendar = this.$refs.calendar
    this.getReportedDayHistory(this.todaysDate)
  }
}
</script>
<style>
.vc-container {
  border-radius: 3rem;
}
.vc-is-dark .vc-title {
  @apply font-light;
  @apply text-sm;
}
.vc-arrows-container {
  @apply px-8
}
.vc-is-dark .vc-weekday {
  @apply font-light;
  @apply text-sm;
}
.vc-weeks {
  @apply mt-4;
}
.vc-day:focus {
  @apply border;
  @apply border-white;
  @apply rounded-md;
}
.vc-is-dark .vc-nav-item.is-active {
  @apply text-secondary;
}
</style>
