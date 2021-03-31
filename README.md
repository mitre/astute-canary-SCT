# Astute Canary
Hello, welcome to Astute Canary. This provides the front-end framework for a COVID-19 Symptom Tracker Web application. 
While this was built with the COVID-19 pandemic in mind, it could easily be adapted for other health crisis or general use. 
At this time, this source code is front-end only, and will require building out of any kind of backend, database and authentication needed for your use case. 

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Customization

### Colors and Branding
The application utilizes the [TailwindCSS framework](https://tailwindcss.com/) for fast building and adaptable configuration. To change the main page background color of your application, text color, specify secondary colors, etc., locate the tailwind.config.js file in the root of the project. If running the project locally, you can preview how your color selections will look on the website within a few seconds of saving.  

To change the base font used see the [TailwindCSS documentation](https://tailwindcss.com/docs/font-family#customizing) on font-family customization.

To add your organizations logo to the application, drop the file into the <code>/assets/images</code> folder using the name and extension <code>Logo.svg</code>. An existing sample logo is in there, but you can remove or overwrite.

### Application data 
To change the application name to your organizations: Locate the file <code>general.js</code> under the <code>/store</code> directory. In this file, you can change the application name and update the 'important information' text on the home screen of the application. Note: if running locally, you may need to clear your cache to see your changes reflected, as this application utilizes [Vuex](https://vuex.vuejs.org/) state management along with [Vuex Persist](https://github.com/championswimmer/vuex-persist), which uses local storage to save your state data in your browser. 

### Surveys - Symptom, Vaccination, and Testing tracking
To update the symptom, vaccination, and testing tracking questionnaires, the framework is utilizing [SurveyJS](https://surveyjs.io/) to create and render the surveys. 

You can use the survey configs created as a base or start from scratch. But, you must follow the naming structure as follows: 

<ul>
<li>For the symptoms survey: <code>symptom.json</code></li>
<li>For the testing survey: <code>testing.json</code></li>
<li>For the vaccination survey: <code>vaccination.json</code></li>
</ul>

These three files must be named appropriately and located in <code>'/static/survey-congigs/'</code> for the application to render them.

Additionally for the <code>symptom.json</code> survey, there currently must be an element with the name "Symptoms". The analysis page uses this expected syntax to generate it's symptom chart. If you wish to have a different format for your symptoms, this will require adapting the Analysis code. 

To create a new survey or edit an existing survey you can:
<ol>
<li>Edit the appropriate survey JSON File directly
<li>Use the <a href="https://surveyjs.io/create-survey">SurveyJS Creator</a> tool to edit or build new surveys from scratch. To edit an existing survey, copy and paste the survey json into the JSON editor tab on the SurveyJS editor interface. It will populate the editor with the survey and you can edit from there. Make sure to copy and paste the new survey json into the appropriate file.</li>
</ol> 

### Components
This application leverages [StoryboardJS](https://storybook.js.org/) for it's components. To view the Storybook directory run
<code>npx nuxt storybook</code> or <code>yarn nuxt storybook</code>


## Future Work and Next Steps
This front-end is the first step of many in creating a flexible, adaptable, and customizable web application that can be easily used by organizations to help track the general health of their users. 
We are also looking to: 

<ol>
<li>Continue to adapt and improve the user interface through user research</li>
<li>Continue to ease customization of the UI and other elements of the application, so that someone with little to no coding experience could create an instance</li>
<li>Provide more flexible visualizations for data analysis</li>
<li>Improve code and documentation</li>
<li>Many other exciting things! So stay tuned</li>
</ol>


## Tech Stack
This application is built with [Vue](https://vuejs.org/) and [Nuxt](https://nuxtjs.org/).
Vue is a javascript framework that utilizes an HTML based syntax. Nuxt is a high-level framework built on top of Vue that makes building universal applications fast and easy. 

### Libraries
| Library | Package(s) | Description | Where is this used
| ----------- | ----------- | ----------- | ----------- |
| ChartJS | <https://vue-chartjs.org/> | Easy and beautiful charts with Chart.js and Vue.js | Analysis page <code>/pages/analysis/index.vue</code>
| FontAwesome | [@nuxtjs/fontawesome](https://www.npmjs.com/package/@nuxtjs/fontawesome) | Module to use Font Awesome icons in your Nuxt.js project. Uses vue-fontawesome under the hoods | Anywhere that uses an icon.
| SurveyJS | [survey-vue](https://www.npmjs.com/package/survey-vue) | SurveyJS is a modern way to add surveys and forms to your website. | Symptom Tracking page <code>/pages/track/symptoms/index.vue</code>, Testing Tracking page <code>/pages/track/testing/index.vue</code>, Vaccination Tracking page <code>/pages/track/vaccination/index.vue</code>, and the AppSurvey Component <code>/components/AppSurvey.vue</code>
| TailwindCSS | [@nuxtjs/tailwind](https://tailwindcss.nuxtjs.org/) | Rapidly build modern websites without ever leaving your HTML. | Used throughout the application
| V-Calendar | <https://vcalendar.io/> | An elegant calendar and datepicker plugin for Vuejs. | Calendar page <code>/pages/calendar/index.vue</code>


## Resources
<ul>
<li>Nuxt documentation - <a href="https://nuxtjs.org/docs/2.x/get-started/installation">https://nuxtjs.org/docs/2.x/get-started/installation</a></li>
<li>Vue documentation - <a href="https://vuejs.org/v2/guide/">https://vuejs.org/v2/guide/</a>
<li>TailwindCSS documentation- <a href="https://tailwindcss.com/docs">https://tailwindcss.com/docs</a></li>
<li>SurveyJS Creator documentation - <a href="https://surveyjs.io/Documentation/Survey-Creator">https://surveyjs.io/Documentation/Survey-Creator</a></li>
<li>V-Calendar documentation - <a href="https://vcalendar.io/">https://vcalendar.io/</a></li>
<li>ChartJS documentation - <a href="https://www.chartjs.org/docs/latest/">https://www.chartjs.org/docs/latest/</a></li>
<li>Storyboard documentation - <a href="https://storybook.js.org/docs/react/get-started/introduction">https://storybook.js.org/docs/react/get-started/introduction</a></li>
</ul>

## Notice
Copyright 2020 MITRE Engenuity. Approved for public release. Document number CT0011

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

<a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.