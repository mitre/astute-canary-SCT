<template>
  <div id="surveyElement" class="w-full">
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
        complete: "bg-secondary border-none text-white"
      },
      question: {
        header: "text-2xl text-light-text px-4",
        content: "mt-8 px-8 text-lg"
      },
      checkbox: {
        label: "inline-block text-sm items-center bg-accent py-2 px-4 rounded-lg text-dark-text  mb-2 hover:bg-opacity-75 focus:bg-opacity-75 checked:bg-highlight font-light",
        itemControl: "form-tick appearance-none w-0 bg-accent focus:bg-secondary checked:bg-secondary"
      },
      radiogroup: {
        label: "radio-toolbar bg-accent py-2 px-4 mt-8 text-dark-text font-light w-full text-center rounded-lg mb-2 hover:bg-opacity-75 focus:bg-opacity-75 checked:bg-highlight",
        itemControl: "opacity-0 fixed w-0 bg-accent focus:bg-secondary checked:bg-secondary"
      },
      input: {
        label: "text-gray-500",
        itemControl: "border rounded"
      }
    };
    
    survey.onComplete.add(survey => {
      this.result = survey.data;
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
      this.$emit('resultsCaptured', this.result)
    }
  },
  created () {

  }
}
</script>
<style>
/* Add margin between radiogroup  */
.sv_q_radiogroup {
  margin-top: 24px;
}
/* Change the selected radio button background color */
.sv_q_radiogroup.checked > label {
  @apply bg-highlight;
  @apply text-dark-text;
  font-weight: bold;
}
/* Change input text style */
.sv_q_text_root {
  @apply bg-tertiary;
  border-radius: 5px;
  padding: 5px 3px;
}
.sv_qcbx .checkbox-material {
  margin-right: 0!important;
}
.form-tick:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
}
.sv_nav {
  @apply px-8;
  @apply pb-8;
}
.sv_q_checkbox.checked > label {
  @apply bg-highlight;
  @apply font-bold;
}
.sv_q_description {
  @apply text-base;
  @apply font-thin;
  @apply italic;
  @apply mt-4;
  @apply text-light-text
}
</style>

