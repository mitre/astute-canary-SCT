<template>
  <div id="surveyElement" style="display:inline-block;width:100%;" v-if="survey">
    <survey :survey="survey"/>
  </div>
</template>
<script>
import * as surveyVue from "survey-vue";
export default {
  props: {
    json: {
      type: Object
    }
  },
  data() {
    const jsonSurvey = this.json;
    const survey = new surveyVue.Model(this.json);
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
      }
    };
    survey.css = myCss
    return {
      survey: survey
    }
  }
}
</script>