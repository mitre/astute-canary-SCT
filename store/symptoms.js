export const state = () => ({
  symptomLength: 3,
  loggingDuration: 7,
  todaySymptoms: {
    date: undefined,
    feeling: undefined,
    symptoms: []
  },
  historySymptoms: [],
  vaccinationExperience: {
    type: '',
    dosesRequired: 2,
    firstDoseReceived: '',
    secondDoseReceived: ''
  }
})

export const mutations = {
  RESET_DAY (state) {
    state.todaySymptoms = {
      date: undefined,
      overallFeeling: undefined,
      symptoms: []
    }
  },
  RESET_TODAY_OVERALL_FEELING (state) {
    state.todaySymptoms.feeling = undefined
  },
  SET_TODAY_OVERALL_FEELING (state, feeling) {
    state.todaySymptoms.feeling = feeling
  },
  SET_TODAY_DATE (state, date) {
    state.todaySymptoms.date = date
  },
  SET_TODAY_SYMPTOMS (state, symptoms) {
    state.todaySymptoms.symptoms = symptoms
  }
}