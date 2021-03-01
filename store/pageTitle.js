export const state = () => ({
  pageTitle: 'Home'
})

export const mutations = {
  SET_PAGE_TITLE (state, title) {
    state.pageTitle = title
  }
}