<template>
  <div class="w-full bg-primary min-h-screen">
    <div class="max-w-sm md:max-w-md mx-auto md:px-0 pb-24">
      <div class="mx-auto pt-12 px-4 md:px-0">
        <app-powered-by-statement/>
        <h1 class="text-2xl md:text-3xl text-white font-light pt-12">Here's what's been happening:</h1>
      </div>
      <div class="flex flex-col bg-light-background p-4 rounded-2xl mt-4 md:mt-12 mx-auto text-primary">
        <div class="w-full mt-8">
          <h2 class="text-primary font-bold uppercase">Symptoms</h2>
          <p class="pb-2 text-gray-600 text-sm">Symptoms recorded during the past three months</p>
          <client-only>
            <horizontal-bar-chart :data="symptomChartData" :options="symptomOptions"></horizontal-bar-chart>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | Trends'
    }
  },
  data() {
    return {
      symptomOptions: {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                  label += ': ';
              }
              label += tooltipItem.value + ' day';
              if (tooltipItem.value > 1 || tooltipItem.value < 1) {
                label += 's'
              }
              return label;
            }
          }
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Days Experienced'
              },
              ticks: {
                beginAtZero: true,
                min: 0
              }
            }
          ],
          yAxes: [{
            title: {
                display: true,
                text: 'Days Experienced'
              },
            ticks: {
              callback: function(value) {
                  let ret = ''
                  if(value.length > 20) {
                    ret = value.substr(0, 20) + '...';
                  } else {
                    ret = value
                  }
                  return ret
              },
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.$store.commit('general/SET_PAGE_TITLE', 'Analysis')
  },
  computed: {
    ...mapGetters({
      history: 'reporting/allReportingHistory'
    }),
    lineData() {
      var ret = {
        labels: ['Good', 'Fair', 'Poor'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      }
      return ret
    },
    symptomChartData () {
      let ret = {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
            label: this.$moment().format('MMM YYYY')
          },
          {
            data: [],
            backgroundColor: [],
            label: this.$moment().subtract(1, 'months').format('MMM YYYY')
          },
          {
            data: [],
            backgroundColor: [],
            label: this.$moment().subtract(2, 'months').format('MMM YYYY')
          }
        ]
      }
      const thisMonth = this.$moment().format('MM')
      const lastMonth = this.$moment().subtract(1, 'months').format('MM')
      const twoMonth = this.$moment().subtract(2, 'months').format('MM')

      if (this.history.length > 0) {
        for (var i = 0; i < this.history.length; i++) {
          if (this.history[i].symptomsReported.Symptoms) {
            for (var j = 0; j < this.history[i].symptomsReported.Symptoms.length; j++) {
              if (ret.labels.includes(this.history[i].symptomsReported.Symptoms[j])) {
                if (this.$moment(this.history[i].date).format('MM') === thisMonth) {
                    ret.datasets[0].data[ret.labels.indexOf(this.history[i].symptomsReported.Symptoms[j])]++
                } else if (this.$moment(this.history[i].date).format('MM') === lastMonth) {
                    ret.datasets[1].data[ret.labels.indexOf(this.history[i].symptomsReported.Symptoms[j])]++
                } else if (this.$moment(this.history[i].date).format('MM') === twoMonth) {
                    ret.datasets[2].data[ret.labels.indexOf(this.history[i].symptomsReported.Symptoms[j])]++
                }
              } else {
                if (this.$moment(this.history[i].date).format('MM') === thisMonth) {
                    ret.labels.push(this.history[i].symptomsReported.Symptoms[j])
                    ret.datasets[0].data.push(1)
                    ret.datasets[1].data.push(0)
                    ret.datasets[2].data.push(0)
                    ret.datasets[0].backgroundColor.push('#4AA7B3')
                    ret.datasets[1].backgroundColor.push('#141E73')
                    ret.datasets[2].backgroundColor.push('#296ABA')
                } else if (this.$moment(this.history[i].date).format('MM') === lastMonth) {
                    ret.labels.push(this.history[i].symptomsReported.Symptoms[j])
                    ret.datasets[0].data.push(0)
                    ret.datasets[1].data.push(1)
                    ret.datasets[2].data.push(0)
                    ret.datasets[0].backgroundColor.push('#4AA7B3')
                    ret.datasets[1].backgroundColor.push('#141E73')
                    ret.datasets[2].backgroundColor.push('#296ABA')
                } else if (this.$moment(this.history[i].date).format('MM') === twoMonth) {
                    ret.labels.push(this.history[i].symptomsReported.Symptoms[j])
                    ret.datasets[0].data.push(0)
                    ret.datasets[1].data.push(0)
                    ret.datasets[2].data.push(1)
                    ret.datasets[0].backgroundColor.push('#4AA7B3')
                    ret.datasets[1].backgroundColor.push('#141E73')
                    ret.datasets[2].backgroundColor.push('#296ABA')
                }
              }
            }
          }
        }
      }
      return ret
    }
  }
}
</script>