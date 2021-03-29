<template>
  <div>
    <div v-if="chartType === 'line'">
      <line-chart v-if="showChart" :data="chartData" :options="options"></line-chart>
    </div>
    <div v-if="chartType === 'bar'">
      <bar-chart v-if="showChart" :data="chartData" :options="options"></bar-chart>
    </div>
    {{options}}
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Object,
      default: {}
    },
    chartType: {
      type: String,
      default: 'line'
    },
    options: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      showChart: false
    }
  },
  mounted () {
    this.showChart = true // showChart will only be set to true on the client. This keeps the DOM-tree in sync.
  }
}
</script>