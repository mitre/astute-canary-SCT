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
      headerText: "text-xl",
      navigationButton: "border py-2 px-4 rounded mt-4 right",
      navigation: {
        complete: "bg-primary text-white"
      },
      question: {
        header: "text-2xl text-dark-text font-bold",
        content: "my-8 text-lg"
      },
      checkbox: {
        label: "flex flex-row items-center",
        itemControl: "ml-1 bg-gray-100 border p-2 rounded checked:bg-secondary checked:border-transparent mr-4"
      },
      radiogroup: {
        label: "radio-toolbar inline-block bg-secondary py-2 px-1 text-white w-full text-center rounded mb-2 hover:bg-primary focus:bg-primary checked:bg-primary",
        itemControl: "opacity-0 fixed w-0 focus:bg-primary checked:bg-primary"
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
    background-color: #242348;
}
/* Change input text style */
.sv_q_text_root {
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px 3px;
}
</style>

