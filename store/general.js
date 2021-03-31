export const state = () => ({
  pageTitle: '',
  appName: 'Acme, INC.',
  importantInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
})

export const actions = {
  async setAppInformation() {
    const general = await this.$axios.$get("/app-configs/general.json")
    commit('SET_APP_INFORMATION', general);
  }
}

export const mutations = {
  SET_APP_INFORMATION (state, general) {
    state.appName = general.title,
    state.importantInformation = general.important_information
  },
  SET_PAGE_TITLE (state, title) {
    state.pageTitle = title
  }
}
// this.$store.dispatch.setAppInformation()