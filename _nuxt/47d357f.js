(window.webpackJsonp=window.webpackJsonp||[]).push([[16,9],{257:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"text-sm uppercase text-secondary text-opacity-70 tracking-wide bg-primary justify-end pr-4 font-light flex flex-row items-center"},[t._v("Powered by Astute Canary "),r("img",{staticClass:"ml-2",attrs:{src:o(258),width:"20"}})])])}],n=o(15),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,null,null);e.default=component.exports},258:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OS4zNTIiIGhlaWdodD0iNzcuNDk1IiB2aWV3Qm94PSIwIDAgOTkuMzUyIDc3LjQ5NSI+CiAgPGcgaWQ9Ikdyb3VwXzMyMSIgZGF0YS1uYW1lPSJHcm91cCAzMjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDUuMzI0IC01NC41MDUpIj4KICAgIDxwYXRoIGlkPSJiaXJkIiBkPSJNMTAxLjM1Miw0MS43NjJsLTE0LjQzLTUuMTUzYTE4LjE3NCwxOC4xNzQsMCwwLDAtNC4zMDUtOC4yNTQsMjAuMzQ1LDIwLjM0NSwwLDAsMC0yOC4wNTUsMGwtNyw2Ljc0OUwxNi4xOTMsM2MtNC43MzEsMTguMjQxLDAsMzYuNDgyLDExLjU5MSw1MS4xNjZMMiw3OC4yNDNzNDIuMDU5LDkuMTIsNjYuNTY2LTkuMzQ4QzgxLjYyNCw1OS4wNDUsODQuNTU3LDUzLjMsODYuNCw0Ny4yMzRsMTQuOTUtNS40NzJtLTI1LjAyNywxYTQuOSw0LjksMCwwLDEtNi43MTgsMCw0LjQyNiw0LjQyNiwwLDAsMSwwLTYuNDMsNC45LDQuOSwwLDAsMSw2LjcxOCwwQTQuNDI2LDQuNDI2LDAsMCwxLDc2LjMyNSw0Mi43NjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDMuMzI0IDUxLjUwNSkiIGZpbGw9InJnYmEoMTcyLDE1MSwyMDYsMC40NCkiLz4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNzgiIGRhdGEtbmFtZT0iRWxsaXBzZSA3OCIgY3g9IjMiIGN5PSIzIiByPSIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTMgODgpIiBmaWxsPSJyZ2JhKDI0MCwyMTcsNDUsMC42NCkiLz4KICA8L2c+Cjwvc3ZnPgo="},280:function(t,e,o){"use strict";o.r(e);o(39),o(28),o(38),o(56),o(34),o(57);var r=o(26),n=(o(86),o(59),o(55));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={head:function(){return{title:this.$store.state.general.appName+" | Calendar"}},data:function(){(new Date).getMonth(),(new Date).getFullYear();return{todaysDate:new Date,selectedDay:void 0,masks:{weekdays:"WWW"}}},computed:c(c({},Object(n.b)({history:"reporting/allReportingHistory"})),{},{todaysAttributes:function(){for(var t=void 0,i=0;i<this.attributes.length;i++)this.$moment(this.attributes[i].date).format("MM/DD/YYYY")===this.$moment(this.todaysDate.toDateString()).format("MM/DD/YYYY")&&(t=this.attributes[i]);return t},attributes:function(){for(var t=[],e={},i=0;i<this.history.length;i++){if(e=this.history[i],this.history[i].overallFeeling&&t.push({dates:e.date,popover:{label:"Overall feeling: "+e.overallFeeling},customData:{category:"feeling",title:e.overallFeeling,icon:"good"===e.overallFeeling.toLowerCase()?"smile":"fair"===e.overallFeeling.toLowerCase()?"meh":"frown",class:"good"===e.overallFeeling.toLowerCase()?"text-success":"fair"===e.overallFeeling.toLowerCase()?"text-warning":"text-danger"}}),this.history[i].symptomsReported){var o=[];for(var r in this.history[i].symptomsReported)o.push(r+": "+this.history[i].symptomsReported[r]);o.length>0&&t.push({dates:e.date,popover:{label:o.join(", ")},customData:{category:"symptoms",class:""}})}if(this.history[i].vaccinationReported){var n=[];for(var l in this.history[i].vaccinationReported)n.push(l+": "+this.history[i].vaccinationReported[l]);n.length>0&&t.push({dates:e.date,popover:{label:n.join(", ")},customData:{category:"vaccination",class:""}})}if(this.history[i].testingReported){var c=[];for(var d in this.history[i].testingReported)c.push(d+": "+this.history[i].testingReported[d]);c.length>0&&t.push({dates:e.date,popover:{label:c.join(", ")},customData:{category:"testing",class:""}})}}return t}}),methods:{dayClicked:function(t){this.selectedDay=t}},mounted:function(){this.$refs.calendar}},y=o(15),component=Object(y.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full bg-primary min-h-screen"},[o("div",{staticClass:"max-w-sm md:max-w-md mx-auto md:px-0 pb-24"},[o("div",{staticClass:"mx-auto pt-12 px-4 md:px-0"},[o("app-powered-by-statement"),t._v(" "),o("h2",{staticClass:"text-2xl md:text-4xl text-white font-light pt-12"},[t._v("What you've reported:")])],1),t._v(" "),o("div",{staticClass:"mx-auto w-full mt-8"},[t.attributes.length>0?o("div",{},[o("v-calendar",{staticClass:"w-128 mx-auto",attrs:{color:"purple",masks:t.masks,attributes:t.attributes,"max-date":new Date,"is-expanded":"","is-dark":""},on:{dayclick:t.dayClicked},scopedSlots:t._u([{key:"day-content",fn:function(e){var r=e.day,n=e.dayEvents,l=e.attributes;return[o("div",t._g({staticClass:"h-full z-10 overflow-hidden border rounded cursor-pointer"},n),[o("div",{staticClass:"w-full mx-1 overflow-y-auto overflow-x-auto"},[o("span",{staticClass:"day-label text-sm text-gray-200 block"},[t._v(t._s(r.day))]),t._v(" "),o("span",{staticClass:"inline-block h-12"},t._l(l,(function(e,r){return o("span",{key:r},[e.customData?o("span",["feeling"===e.customData.category?o("span",{staticClass:"block w-1/3",class:e.customData.class},[o("font-awesome-icon",{attrs:{icon:["far",e.customData.icon]}})],1):t._e(),t._v(" "),"symptoms"===e.customData.category?o("span",{staticClass:"text-xs",class:e.customData.class},[o("span",{staticClass:"text-purple-300 font-bold"},[t._v("S")])]):t._e(),t._v(" "),"testing"===e.customData.category?o("span",{staticClass:"text-xs",class:e.customData.class},[o("span",{staticClass:"text-testing font-bold"},[t._v("T")])]):t._e(),t._v(" "),"vaccination"===e.customData.category?o("span",{staticClass:"text-xs",class:e.customData.class},[o("span",{staticClass:"text-vaccination font-bold"},[t._v("V")])]):t._e()]):t._e()])})),0)])])]}}],null,!1,2964199800)})],1):t._e()]),t._v(" "),o("div",{staticClass:"mt-8 mx-auto px-4 md:px-0"},[t.selectedDay?o("div",{staticClass:"mt-8 text-gray-200 leading-loose"},[o("h3",{staticClass:"text-secondary-text font-bold"},[t._v(t._s(t.selectedDay.date.toDateString())+" Notes:")]),t._v(" "),t.selectedDay.attributes.length>0?o("ul",t._l(t.selectedDay.attributes,(function(e,r){return o("li",{key:r},[e.popover?o("div",[e.popover.label.includes("Overall feeling")?o("span",{class:e.customData.class},[o("font-awesome-icon",{attrs:{icon:["far",e.customData.icon]}})],1):o("span",{staticClass:"h-3 w-3 inline-block rounded-full",class:{"bg-symptom":e.popover.label.includes("Symptoms"),"bg-vaccination":e.popover.label.includes("Vaccination"),"bg-testing":e.popover.label.includes("Testing")}}),t._v(" "),o("span",{staticClass:"capitalize"},[t._v(t._s(e.popover.label))])]):t._e()])})),0):o("p",[t._v("Nothing reported on this day.")])]):o("div",{staticClass:"text-gray-400 italic"},[t._v("\n        Select a day to see your recorded symptoms\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppPoweredByStatement:o(257).default})}}]);