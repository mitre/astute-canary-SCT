import moment from "moment";

export const state = () => ({
  todayDate: undefined,
  activeDate: undefined,
  weekOfDates: [],
  reportingHistory: [
    {
      "date": "2/01/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fever or chills", "Persistent pain or pressure on the chest" ], "Temperature": "100", "notes": "I was feeling really drained today."},
      "testingReported": {}
    },
    {
      "date": "03/01/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fever or chills", "Cough", "Sore Throat", "Congestion or runny nose" ], "Temperature": "101", "notes": "I was feeling really drained today."},
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/02/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fever or chills", "Cough", "Sore Throat", "Congestion or runny nose" ], "Temperature": "100" },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/03/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fever or chills", "Cough", "Sore Throat", "Congestion or runny nose" ], "Temperature": "100" },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/04/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fever or chills", "Cough", "Sore Throat", "Congestion or runny nose", "New loss of taste or smell" ], "Temperature": "98" },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/05/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Cough", "Sore Throat", "Congestion or runny nose", "New loss of taste or smell" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/06/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Cough", "Sore Throat", "Congestion or runny nose", "New loss of taste or smell" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/07/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Cough", "Sore Throat", "New loss of taste or smell", "Trouble Breathing" ] },
      "vaccinationReported": {},
      "testingReported": { "Testing Type": ["Lab Test"], "Location": ["At Home"], "Results Received": ["Yes"], "Results": "Positive"}
    },
    {
      "date": "03/08/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Cough", "Dizziness" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/09/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Cough", "Dizziness" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/10/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Cough", "Dizziness" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/11/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Cough", "Diffuculty concentrating" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/12/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Dizziness", "Diffuculty concentrating" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/13/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Dizziness", "Diffuculty concentrating"  ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/14/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Dizziness", "Diffuculty concentrating"  ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/15/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Diffuculty concentrating" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/16/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Heart Palpitations" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/17/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Heart Palpitations", "Persistent pain or pressure on the chest" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/18/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Heart Palpitations", "Persistent pain or pressure on the chest" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/19/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Heart Palpitations", "Persistent pain or pressure on the chest" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/20/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Heart Palpitations", "Persistent pain or pressure on the chest" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/21/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Heart Palpitations", "Persistent pain or pressure on the chest" ] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/22/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Muscle Aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/23/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Muscle Aches", "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/24/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Muscle Aches", "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/25/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Muscle Aches", "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/26/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Muscle Aches", "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/27/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Muscle Aches", "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/28/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Muscle Aches", "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/29/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/30/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "03/31/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Dizziness"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/01/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Dizziness"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/02/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Dizziness"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/03/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/04/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/05/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/06/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/07/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/08/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Dizziness", "Headache"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/09/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Dizziness", "Headache"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/10/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Dizziness", "Headache"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/11/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/12/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/13/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Dizziness", "Headache"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/14/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Dizziness", "Headache"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/15/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/16/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/17/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/18/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/19/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/20/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/21/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/22/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/23/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/24/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "04/25/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
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