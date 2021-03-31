export const state = () => ({
  profile: {
    firstname: undefined, //String
    lastname: undefined, // String
    dob: undefined, // Format: MM/DD/YYYY Ex:'09/09/1982'
    location: {
      city: undefined,
      state: undefined,
      country: undefined
   }
  }
})

export const mutations = {
  SET_PROFILE (state, profile) {
    state.profile = profile
  }
}