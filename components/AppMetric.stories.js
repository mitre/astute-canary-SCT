export default { title: 'AppMetric' }

export const loggingMetricExample = () =>  '<app-metric :metric="2" type="danger"><span class="md:text-lg">You have been experiencing symptoms for 2 days</span></app-metric>'
export const symptomMetricExample = () =>  '<app-metric :metric="3" type="success"><span class="md:text-lg">You have reported your overall feeling for 3 days</span></app-metric>'