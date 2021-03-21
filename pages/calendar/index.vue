<template>
<div class="w-auto flex flex-col justify-center">
  <div class="mt-24 mx-auto">
    <v-calendar ref="calendar" color="purple" :attributes="attributes" @dayclick='dayClicked' :max-date="new Date()"></v-calendar>
  </div>
  <div class="mt-8 mx-auto">
    <div
      v-if="selectedDay"
      class="mt-8 text-gray-700 leading-loose">
      <h3 class="text-dark-text font-bold">{{ selectedDay.date.toDateString() }} Notes:</h3>
       <ul v-if="selectedDay.attributes.length > 0">
        <li
          v-for='attr in selectedDay.attributes'
          :key='attr.key'
        >
          <div v-if="attr.popover">
            <span v-if="!attr.popover.label.includes('Overall feeling')" class="h-3 w-3 inline-block rounded-full" :class="'bg-' + attr.dot.base.color + '-600'"></span>
            <span class="capitalize">{{ attr.popover.label }}</span>
          </div>
        </li>
      </ul>
      <p v-else>Nothing reported on this day.</p>
    </div>
    <div v-else>
      Select a day to see your recorded symptoms
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
    return {
      todaysDate: new Date(),
      selectedDay: undefined
    }
  },
  computed: {
    history() {
      return this.$store.state.reporting.reportingHistory
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
              customData: entry
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
                dot: {
                  color: 'purple',
                },              
                popover: {
                  label: symptoms.join(', ')
                },
                customData: entry
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
                dot: {
                  color: 'yellow',
                },              
                popover: {
                  label: vaccination.join(', ')
                },
                customData: entry
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
                dot: {
                  color: 'blue',
                },              
                popover: {
                  label: testing.join(', ')
                },
                customData: entry
              }
            )
          }
        }
      }
      ret.push(
        {
          dates: new Date(),
          highlight: {
            color: 'purple',
            fillMode: 'light',
          },
          popover: false
        }
      )
      return ret
    },
    todaysAttributes() {
      let today = undefined
      for (var i = 0; i < this.attributes.length; i++) {
        if (this.$moment(this.attributes[i].date).format('MM/DD/YYYY') === this.$moment(this.todaysDate.toDateString()).format('MM/DD/YYYY')) {
          today = this.attributes[i]
        }
      }
      return today
    }
  },
  methods: {
    dayClicked(day) {
      this.selectedDay = day;
    }
  },
  mounted () {
    const calendar = this.$refs.calendar
    this.$store.commit('general/SET_PAGE_TITLE', 'Calendar')
  }
}
</script>
