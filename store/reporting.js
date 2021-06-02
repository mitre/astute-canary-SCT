import moment from "moment";

export const state = () => ({
  todayDate: undefined,
  activeDate: undefined,
  weekOfDates: [],
  reportingHistory: [
    // Example Object
    {
      "date": "1/01/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fever or chills", "Persistent pain or pressure on the chest" ], "Temperature": "100", "notes": "I was feeling really drained day."},
      "vaccinationReported": {},
      "testingReported": {}
    }
  ]
})

export const mutations = {
  RESET_DAY (state) {
    var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.activeDate
      }
    )
    if(objIndex > -1) {
        state.reportingHistory[objIndex].overallFeeling = undefined
        state.reportingHistory[objIndex].symptomsReported = {}
        state.reportingHistory[objIndex].vaccinationReported = {}
        state.reportingHistory[objIndex].testingReported = {}
    }
  },
  RESET_DAY_OVERALL_FEELING (state) {
    var objIndex = state.reportingHistory.findIndex(function(day) {
        return day.date == state.activeDate
      }
    )
    if(objIndex > -1) {
      state.reportingHistory[objIndex].overallFeeling = undefined
    }
  },
  SET_DAY_OVERALL_FEELING (state, feeling) {
    var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.activeDate
      }
    )
    if(objIndex > -1) {
      state.reportingHistory[objIndex].overallFeeling = feeling
    } else {
      let newDay = {
        date: state.activeDate,
        overallFeeling: feeling,
        symptomsReported: {},
        vaccinationReported: {},
        testingReported: {}
      }
      state.reportingHistory.push(newDay)
    }
  },
  SET_SELECTED_DATE (state, date) {
    state.activeDate = date
  },
  SET_TODAY_DATE (state, date) {
    state.todayDate = date
  },
  SET_DAY_SYMPTOMS (state, symptoms) {
    var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.activeDate
      }
    )
    if(objIndex > -1) {
      state.reportingHistory[objIndex].symptomsReported = symptoms
    } else {
      let newDay = {
        date: state.activeDate,
        overallFeeling: undefined,
        symptomsReported: symptoms,
        vaccinationReported: {},
        testingReported: {}
      }
      state.reportingHistory.push(newDay)
    }
  },
  SET_DAY_VACCINATION (state, vaccination) {
    var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.activeDate
      }
    )
    if(objIndex > -1) {
      state.reportingHistory[objIndex].vaccinationReported = vaccination
    } else {
      let newDay = {
        date: state.activeDate,
        overallFeeling: undefined,
        symptomsReported: {},
        vaccinationReported: vaccination,
        testingReported: {}
      }
      state.reportingHistory.push(newDay)
    }
    
  },
  SET_DAY_TESTING (state, testing) {
    var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.activeDate
      }
    )
    if(objIndex > -1) {
      state.reportingHistory[objIndex].testingReported = testing
    } else {
      let newDay = {
        date: state.activeDate,
        overallFeeling: undefined,
        symptomsReported: {},
        vaccinationReported: {},
        testingReported: testing
      }
      state.reportingHistory.push(newDay)
    }
  }
}

export const actions = {
  GET_DAY_REPORT (state, date) {
    var selectedDateHistory = undefined
    for (var i = 0; i < state.reportingHistory.length; i++) {
      if (state.reportingHistory[i].date === date) {
        selectedDateHistory = state.reportingHistory[i]
      }
    }
    return selectedDateHistory
  },
  GET_ACTIVE_DAY (state) {
    return state.activeDate
  }

}

export const getters = {
  allReportingHistory: (state) => {
    return state.reportingHistory.sort((a,b) => (moment(a.date) < moment(b.date)) ? 1 : -1)
  },
  daySelected: (state) => {
    var day = {
      date: state.activeDate,
      overallFeeling: undefined,
      symptomsReported: {},
      vaccinationReported: {},
      testingReported: {}
    }
    var objIndex = state.reportingHistory.findIndex(function(day) {
      return day.date == state.activeDate
      }
    )
    if(objIndex > -1) {
      day = state.reportingHistory[objIndex]
    }
    
    return day
  },
  dayReportingSymptoms: (state) => {
    var reportedSymptoms = false
    if (Object.keys(state.dayReporting.symptomsReported).length !== 0) {
      reportedSymptoms = true
    }
    return reportedSymptoms
  },
  dayReportedFeeling: (state) => {
    var dayReportedFeeling = false
    if (state.dayReporting.overallFeeling != undefined) {
      dayReportedFeeling = true
    }
    return dayReportedFeeling
  }
}