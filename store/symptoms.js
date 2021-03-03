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
  },
  symptomOptions: {
    "pages": [
      {
      "name": "Symptom Checker",
      "elements": [
        {
        "type": "checkbox",
        "name": "Symptoms",
        "title": "Check all the symptoms that you are experiencing:",
        "choices": [
          {
          "value": "Fever or chills",
          "text": "Fever or chills"
          },
          {
          "value": "Cough",
          "text": "Cough"
          },
          {
          "value": "Shortness of breath or difficulty breathing",
          "text": "Shortness of breath or difficulty breathing"
          },
          {
          "value": "Fatigue",
          "text": "Fatigue"
          },
          {
          "value": "Muscle or body aches",
          "text": "Muscle or body aches"
          },
          {
          "value": "Headache",
          "text": "Headache"
          },
          {
          "value": "Sore throat",
          "text": "Sore throat"
          },
          {
          "value": "New loss of taste or smell",
          "text": "New loss of taste or smell"
          },
          {
          "value": "Congestion or runny nose",
          "text": "Congestion or runny nose"
          },
          {
          "value": "Diarrhea",
          "text": "Diarrhea"
          },
          {
          "value": "Trouble Breathing",
          "text": "Trouble Breathing"
          },
          {
          "value": "Persistent pain or pressure on the chest",
          "text": "Persistent pain or pressure on the chest"
          },
          {
          "value": "Nausea or vomiting",
          "text": "Nausea or vomiting"
          }
        ],
        "hasSelectAll": false
        }
      ]
      },
      {
      "name": "Fever Checker",
      "elements": [
        {
        "type": "radiogroup",
        "name": "Fever",
        "title": "Do you have a fever?",
        "choices": [
          {
          "value": "yes",
          "text": "Yes"
          },
          {
          "value": "no",
          "text": "No"
          }
        ]
        }
      ],
      "visibleIf": "{Symptoms} contains 'Fever or chills'"
      },
      {
      "name": "Enter body temp",
      "elements": [
        {
        "type": "text",
        "name": "question1",
        "visibleIf": "{Fever} = 'yes'",
        "title": "Enter your body temperature",
        "placeHolder": "ex: 97.2"
        }
      ]
      }
    ]
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