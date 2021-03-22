<template>
  <div id="surveyElement" class="w-full inline-block">
      <survey :survey="surveyRender" />
  </div>
</template>
<script>
import * as surveyVue from "survey-vue";
export default {
  props: {
    json: {
      type: Object
    },
    results: {
      type: Object
    }
  },
  data() {
    const jsonSurvey = this.json;
    const survey = new surveyVue.Model(jsonSurvey);

    // style the survey 
    var myCss = {
      errors: "text-white",
      headerText: "text-xl",
      navigationButton: "border py-2 px-4 rounded mt-4 right",
      navigation: {
        complete: "bg-primary text-white"
      },
      question: {
        header: "text-2xl text-light-text font-bold",
        content: "my-8 text-lg"
      },
      checkbox: {
        label: "flex flex-row items-center text-light-text",
        itemControl: "form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-accent checked:border-transparent focus:outline-none"
      },
      radiogroup: {
        label: "radio-toolbar inline-block border border-secondary py-2 px-1 text-white w-full text-center rounded mb-2 hover:bg-secondary focus:bg-secondary checked:bg-secondary",
        itemControl: "opacity-0 fixed w-0 focus:bg-secondary checked:bg-secondary"
      }
    };
    
    survey.onComplete.add(survey => {
      this.result = survey.data;
      console.log('on complete')
      this.sendResults()
    })

    survey.css = myCss
    return {
      surveyRender: survey,
      result: []
    }
  },
  methods: {
    sendResults () {
      console.log('results captured')
      this.$emit('resultsCaptured', this.result)
    }
  },
  created () {

  }
}
</script>
<style>
/* Change the selected radio button background color */
.sv_q_radiogroup.checked > label {
  background-color: #6b66ec;
}
/* Change input text style */
.sv_q_text_root {
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px 3px;
}
.sv_q_erbox {
  color: #FF6262;
}
.form-tick:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>

