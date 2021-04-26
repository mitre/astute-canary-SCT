import moment from "moment";

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
      "date": "4/13/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Dizziness", "Headache"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/14/2021",
      "overallFeeling": "Poor",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Dizziness", "Headache"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/15/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/16/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/17/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/18/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/19/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/20/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/21/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/22/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/23/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/24/2021",
      "overallFeeling": "Fair",
      "symptomsReported": { "Symptoms": [ "Fatigue", "Muscle or body aches"] },
      "vaccinationReported": {},
      "testingReported": {}
    },
    {
      "date": "4/25/2021",
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
      return day.date == state.todayReporting.date
      }
    )
    if(objIndex > -1) {
        state.reportingHistory[objIndex].overallFeeling = undefined
        state.reportingHistory[objIndex].symptomsReported = {}
        state.reportingHistory[objIndex].vaccinationReported = {}
        state.reportingHistory[objIndex].testingReported = {}
    }
    state.todayReporting.overallFeeling = undefined
    state.todayReporting.symptomsReported = {}
    state.todayReporting.vaccinationReported = {}
    state.todayReporting.testingReported = {}
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

export const getters = {
  allReportingHistory: (state) => {
    return state.reportingHistory.sort((a,b) => (moment(a.date) < moment(b.date)) ? 1 : -1)
  },
  todayReportingSymptoms: (state) => {
    var reportedSymptoms = false
    if (Object.keys(state.todayReporting.symptomsReported).length !== 0) {
      reportedSymptoms = true
    }
    return reportedSymptoms
  },
  todayReportedFeeling: (state) => {
    var todayReportedFeeling = false
    if (state.todayReporting.overallFeeling != undefined) {
      todayReportedFeeling = true
    }
    return todayReportedFeeling
  },
  loggedDays: (state, getters) => {
    let days = 0
    const yesterday = moment(state.todayReporting.date).subtract(1, 'days').format('MM/DD/YYYY')
    const mostRecentEntry = getters.allReportingHistory[0].date
    if ((yesterday === mostRecentEntry || state.todayReporting.date === mostRecentEntry) && getters.allReportingHistory[0].overallFeeling !== undefined) {
      days++;
      for (let i = 0; i < getters.allReportingHistory.length-1; i++) {
        var dayBefore = moment(getters.allReportingHistory[i].date).subtract(1, 'days').format('MM/DD/YYYY')
        if (dayBefore === getters.allReportingHistory[i + 1].date) {
          if (getters.allReportingHistory[i + 1].overallFeeling != undefined ) {
              days++;
          }
        } else {
          break;
        }
      }
    } else if (state.todayReporting.date === mostRecentEntry && getters.allReportingHistory[0].overallFeeling === undefined) {
      for (let i = 0; i < getters.allReportingHistory.length-1; i++) {
        var dayBefore = moment(getters.allReportingHistory[i].date).subtract(1, 'days').format('MM/DD/YYYY')
        if (dayBefore === getters.allReportingHistory[i + 1].date) {
          console.log('Match')
          console.log(state.todayReporting.overallFeeling)
          if (getters.allReportingHistory[i + 1].overallFeeling != undefined ) {
              days++;
          }
        } else {
          break;
        }
      }
    }
    
    return days
  },
  experienceSymptomsDuration: (state, getters) => {
    let days = 0
    const yesterday = moment(state.todayReporting.date).subtract(1, 'days').format('MM/DD/YYYY')
    const mostRecentEntry = getters.allReportingHistory[0].date
    if ((yesterday === mostRecentEntry || state.todayReporting.date === mostRecentEntry) && Object.keys(getters.allReportingHistory[0].symptomsReported).length !== 0) {
      days++;
      for (let i = 0; i < getters.allReportingHistory.length-1; i++) {
        var dayBefore = moment(getters.allReportingHistory[i].date).subtract(1, 'days').format('MM/DD/YYYY')
        if (dayBefore === getters.allReportingHistory[i + 1].date) {
          if (Object.keys(getters.allReportingHistory[i + 1].symptomsReported).length !== 0) {
              days++;
          }
        } else {
          break;
        }
      }
    }
    else if (state.todayReporting.date === mostRecentEntry && Object.keys(getters.allReportingHistory[0].symptomsReported).length === 0) {
      for (let i = 0; i < getters.allReportingHistory.length-1; i++) {
        var dayBefore = moment(getters.allReportingHistory[i].date).subtract(1, 'days').format('MM/DD/YYYY')
        if (dayBefore === getters.allReportingHistory[i + 1].date) {
          if (Object.keys(getters.allReportingHistory[i + 1].symptomsReported).length !== 0) {
              days++;
          }
        } else {
          break;
        }
      }
    } 
    return days
  }
}