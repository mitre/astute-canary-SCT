<template>
<div class="w-full bg-primary min-h-screen">
  <div class="max-w-sm md:max-w-md mx-auto md:px-0 pb-24">
    <div class="mx-auto pt-12">
      <app-powered-by-statement/>
      <h2 class="text-4xl text-white font-light pt-12">What you've reported:</h2>
    </div>
    <div class="mx-auto w-full mt-8">
      <div v-if="attributes.length > 0" class="">
        <v-calendar
          class="w-128 mx-auto"
          color="purple"
          :masks="masks"
          :attributes="attributes"
          :max-date="new Date()"
          @dayclick='dayClicked'
          is-expanded
          is-dark
        >
          <template v-slot:day-content="{ day, dayEvents, attributes }">
            <div class="h-full z-10 overflow-hidden border rounded cursor-pointer" v-on="dayEvents">
              <div class="w-full mx-1 overflow-y-auto overflow-x-auto h-12">
                <span class="day-label text-sm text-gray-200 block">{{ day.day }}</span>
                <span v-for="(attr, index) in attributes" :key="index"  class="">
                  <span v-if="attr.customData">
                      <span
                        v-if="attr.customData.category === 'feeling'"
                        :class="attr.customData.class"
                        class="inline-block w-1/3"
                      >
                        <font-awesome-icon :icon="['far', attr.customData.icon]"></font-awesome-icon>
                      </span>
                      <span
                        v-if="attr.customData.category === 'symptoms'"
                        class="text-xs"
                        :class="attr.customData.class"
                      >
                        <span class="text-purple-300 font-bold">S</span>
                      </span>
                      <span
                        v-if="attr.customData.category === 'testing'"
                        class="text-xs"
                        :class="attr.customData.class"
                      >
                        <span class="text-testing font-bold">T</span>
                      </span>
                      <span
                        v-if="attr.customData.category === 'vaccination'"
                        class="text-xs"
                        :class="attr.customData.class"
                      >
                        <span class="text-vaccination font-bold">V</span>
                      </span>
                  </span>
                </span>
              </div>
            </div>
          </template>
        </v-calendar>
      </div>
    </div>
    <div class="mt-8 mx-auto">
      <div
        v-if="selectedDay"
        class="mt-8 text-gray-200 leading-loose">
        <h3 class="text-secondary-text font-bold">{{ selectedDay.date.toDateString() }} Notes:</h3>
        <ul v-if="selectedDay.attributes.length > 0">
          <li
            v-for='(attr, index) in selectedDay.attributes'
            :key='index'
          >
            <div v-if="attr.popover">
              <span v-if="!attr.popover.label.includes('Overall feeling')" class="h-3 w-3 inline-block rounded-full" :class="{'bg-symptom': attr.popover.label.includes('Symptoms'), 'bg-vaccination': attr.popover.label.includes('Vaccination'), 'bg-testing': attr.popover.label.includes('Testing')}"></span>
              <span v-else :class="attr.customData.class"><font-awesome-icon :icon="['far', attr.customData.icon]"></font-awesome-icon></span>
              <span class="capitalize">{{ attr.popover.label }}</span>
            </div>
          </li>
        </ul>
        <p v-else>Nothing reported on this day.</p>
      </div>
      <div v-else class="text-gray-400 italic">
        Select a day to see your recorded symptoms
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | Calendar'
    }
  },
  data () {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      todaysDate: new Date(),
      selectedDay: undefined,
       masks: {
        weekdays: 'WWW',
      }
    }
  },
  computed: {
    history() {
      return this.$store.state.reporting.reportingHistory
    },
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
      this.selectedDay = day;
      console.log(day)
    }
  },
  mounted () {
    const calendar = this.$refs.calendar
  }
}
</script>
