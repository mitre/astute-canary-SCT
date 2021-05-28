<template>
<!-- @splide:active="slideClicked" -->
  <splide :options="options" @splide:click="slideClicked" @splide:active="slideActive" ref="splide">
		<splide-slide v-for="(date,index) in dates" :key="index">
       {{$store.state.activeDate}}
			<app-calendar-date-box :weekday="getWeekday(date)" :day="getDay(date)" :month="getMonth(date)" :feeling="getFeeling(date)" :history="history"/>
		</splide-slide>
  </splide>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  import AppCalendarDateBox from './AppCalendarDateBox.vue';
  export default {
  components: { AppCalendarDateBox },
  props: {
    dates: Array
  },
  data() {
    return {
      options: {
        type: 'slide',
        width  : '100%',
        perPage: 3,
        start: 0,
        perMove: 1,
        focus: 0,
        direction: 'rtl',
        gap: '1rem',
        arrows: false,
        rewind: true,
        pagination: false,
        padding: {
          right: '2rem',
          left : '2rem',
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      // map `this.history to reporting/history
      history: 'reporting/allReportingHistory'
    }),
  },
  methods: {
    slideClicked( splide, newIndex) {
      this.$refs.splide.go(newIndex.index)
      this.$emit('changedDate', this.dates[newIndex.index])
    },
    slideActive(splide, newIndex) {
      this.$emit('changedDate', this.dates[newIndex.index])
    },
    getWeekday (date) {
      return this.$moment(date).format('ddd')
    },
    getDay (date) {
      return this.$moment(date).format('DD')
    },
    getMonth (date) {
      return this.$moment(date).format('MMMM')
    },
    getFeeling (date) {
      var selectedDateFeeling = undefined
      for (var i = 0; i < this.history.length; i++) {
        if (this.history[i].date === date) {
          selectedDateFeeling = this.history[i].overallFeeling ? this.history[i].overallFeeling : undefined
        }
      }
      return selectedDateFeeling
    },
    getStartIndex() {
      let index = 0
      console.log('in start')
      for(var i = 0; i < this.dates.length; i++) {
        console.log('active' + this.$store.state.activeDate)
        if(this.dates[i] === this.$store.state.activeDate) {
          index = this.$store.state.activeDate
        }
      }
      return index
    }
  },
  mounted () {
    console.log('mounted')
    this.options.start = this.getStartIndex()
  }
}
</script>

<style>
  .splide__pagination{
    display: none!important;
  }
</style>
