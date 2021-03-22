export const state = () => ({
  symptomLength: 3,
  loggingDuration: 7,
  todayReporting: {
    date: undefined,
    overallFeeling: undefined,
    symptomsReported: {},
    vaccinationReported: {},
    testingReported: {}
  },
  reportingHistory: [
    {
      "date": "03/01/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fever or chills" ], "Temperature": "100", "notes": "I was feeling really drained today."},
      "vaccinationReported": {"Vaccination Type" : "Johnson & Johnson", "Dose": "first dose"},
      "testingReported": {}
    },
    {
      "date": "03/02/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fever or chills" ], "Temperature": "100" },
      "vaccinationReported": {},
      "testingReported": {"Testing Type": "COVID Rapid test", "Result": "Negative"}
    },
    {
      "date": "03/13/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fever or chills" ], "Temperature": "100" },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/15/2021",
      "overallFeeling": "Good",
      "symptomsReported": {},
      "vaccinationReported": {"Vaccination Type" : "Johnson & Johnson",  "Dose": "Second"},
      "testingReported": {}
    }
  ]
})

export const mutations = {
  RESET_DAY (state) {
   var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.todayReporting.date
      }
    )
    if(objIndex > -1) {
        state.reportingHistory[objIndex].overallFeeling = undefined
        state.reportingHistory[objIndex].symptomsReported = []
        state.reportingHistory[objIndex].vaccinationReported = []
        state.reportingHistory[objIndex].testingReported = []
    }
    state.todayReporting.overallFeeling = undefined
    state.todayReporting.symptomsReported = []
    state.todayReporting.vaccinationReported = []
    state.todayReporting.testingReported = []
  },
  RESET_TODAY_OVERALL_FEELING (state) {
    var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.todayReporting.date
      }
    )
    if(objIndex > -1) {
      state.reportingHistory[objIndex].overallFeeling = undefined
    }
    state.todayReporting.overallFeeling = undefined
  },
  SET_TODAY_OVERALL_FEELING (state, feeling) {
    state.todayReporting.overallFeeling = feeling
    var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.todayReporting.date
      }
    )
    if(objIndex > -1) {
      state.reportingHistory[objIndex].overallFeeling = feeling
    } else {
      state.reportingHistory.push(state.todayReporting)
    }
  },
  SET_TODAY_DATE (state, date) {
    state.todayReporting.date = date
  },
  SET_TODAY_SYMPTOMS (state, symptoms) {
    state.todayReporting.symptomsReported = symptoms
    var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.todayReporting.date
      }
    )
    if(objIndex > -1) {
      state.reportingHistory[objIndex].symptomsReported = symptoms
    } else {
      state.reportingHistory.push(state.todayReporting)
    }
  },
  SET_TODAY_VACCINATION (state, vaccination) {
    state.todayReporting.vaccinationReported = vaccination
    var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.todayReporting.date
      }
    )
    if(objIndex > -1) {
      state.reportingHistory[objIndex].vaccinationReported = vaccination
    } else {
      state.reportingHistory.push(state.todayReporting)
    }
    
  },
  SET_TODAY_TESTING (state, testing) {
    state.todayReporting.testingReported = testing
    var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.todayReporting.date
      }
    )
    if(objIndex > -1) {
      state.reportingHistory[objIndex].testingReported = testing
    } else {
      state.reportingHistory.push(state.todayReporting)
    }
  },
  SET_HISTORY (state, history) {
    state.reportingHistory = history
  }
}