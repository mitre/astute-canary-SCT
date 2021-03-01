<template>
  <div class="flex flex-col justify-center mx-auto w-full md:w-1/2">
    <div class="mt-8 flex flex-rowmx-auto">
      <Button type="light" @clicked="backToDocumentPage">Back</Button>
    </div>
    <div class="w-auto mx-auto p-4 mt-12" v-if="json">
      <survey :json="json"></survey>
    </div>
    
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Button from '@/components/Button.vue'
import Survey from '@/components/Survey.vue'

export default {
  head: {
    title: 'Astute Canary | Document Symptoms'
  },
  components: {
    Button,
    Survey
  },
  data() {
    return {
      json: {
        "showQuestionNumbers": "off",
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
      },
      reportedSymptoms: [],
      myCss: {
          navigationButton: "bg-primary text-light-text"   
      }
    }
  },
  methods: {
    async getSymptomOptions () {
      this.json = this.$store.state.symptoms.symptomOption
    },
    createSurvey() {
      this.survey = new surveyVue.Model(this.json);
    },
    setSymptoms() {
      this.$store.commit('symptoms/SET_TODAY_SYMPTOMS', this.reportedSymptoms)
      this.backToDocumentPage()
    },
    backToDocumentPage() {
      this.$router.push('/document')
    }
  },
  computed: {
    symptomList() {
      return this.$store.state.symptoms.symptomOptions
    }
  },
  mounted () {
    this.$store.commit('pageTitle/SET_PAGE_TITLE', 'Document - Symptoms')
    this.reportedSymptoms = this.$store.state.symptoms.todaySymptoms.symptoms
  }
}
</script>
