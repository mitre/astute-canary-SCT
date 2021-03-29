import Vue from 'vue'
import { HorizontalBar, Bar, Doughnut, Line, Pie } from 'vue-chartjs'

const registerComponent = function(name, originalComponent) {
    Vue.component(
        name,
        {
            extends: originalComponent,
            props: ['data', 'options'],
            mounted() {
                this.renderChart(this.data, this.options)
            }
        }
    )
}

registerComponent('HorizontalBarChart', HorizontalBar);
registerComponent('BarChart', Bar);
registerComponent('DoughnutChart', Doughnut);
registerComponent('LineChart', Line);
registerComponent('PieChart', Pie);