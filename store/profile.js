export const state = () => ({
  profile: {
    firstname: 'Casey',
    lastname: 'Smith',
    dob: '09/09/1982',
    location: {
      city: 'San Francisco',
      state: 'California'
   }
  }
})

export const mutations = {
  SET_PROFILE (state, profile) {
    state.profile = profile
  }
}