export const state = () => ({
  vaccinationQuestions: [],
  vaccinationHistory: {}
})

export const mutations = {
  SET_VACCINATION_HISTORY (state, vaccination) {
    state.vaccinationHistory = vaccination
  }
}