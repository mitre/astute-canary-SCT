(window.webpackJsonp=window.webpackJsonp||[]).push([[16,10],{267:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"text-sm uppercase text-light-text text-opacity-70 tracking-wide justify-end pr-4 font-light flex flex-row items-center"},[t._v("Powered by Astute Canary "),n("img",{staticClass:"ml-2",attrs:{src:o(268),width:"20"}})])])}],r=o(8),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},268:function(t,e,o){t.exports=o.p+"img/Astute-Canary-Logo.d999f71.svg"},292:function(t,e,o){var content=o(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("8d32e67c",content,!0,{sourceMap:!1})},299:function(t,e,o){"use strict";o(292)},300:function(t,e,o){var n=o(44)((function(i){return i[1]}));n.push([t.i,".vc-container{\n  border-radius:3rem\n}\n.vc-is-dark .vc-title{\n  font-weight:300;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.vc-arrows-container{\n  padding-left:2rem;\n  padding-right:2rem\n}\n.vc-is-dark .vc-weekday{\n  font-weight:300;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.vc-weeks{\n  margin-top:1rem\n}\n.vc-day:focus{\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(255, 255, 255, var(--tw-border-opacity));\n  border-radius:0.375rem\n}\n.vc-is-dark .vc-nav-item.is-active{\n  color:#000;\n  --tw-text-opacity:1;\n  color:rgba(57, 81, 255, var(--tw-text-opacity))\n}",""]),t.exports=n},305:function(t,e,o){"use strict";o.r(e);o(39),o(27),o(38),o(56),o(28),o(57);var n=o(25),r=(o(59),o(55));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={head:function(){return{title:this.$store.state.general.appName+" | History"}},data:function(){(new Date).getMonth(),(new Date).getFullYear();return{todaysDate:new Date,dateSelected:void 0}},computed:l(l({},Object(r.b)({history:"reporting/allReportingHistory"})),{},{selectedDay:function(){for(var t=this.dateSelected,e={date:t,overallFeeling:void 0,symptomsReported:{},vaccinationReported:{},testingReported:{}},i=0;i<this.history.length;i++)this.history[i].date===t&&(e=this.history[i]);return e},todaysAttributes:function(){for(var t=void 0,i=0;i<this.attributes.length;i++)this.$moment(this.attributes[i].date).format("MM/DD/YYYY")===this.$moment(this.todaysDate.toDateString()).format("MM/DD/YYYY")&&(t=this.attributes[i]);return t},attributes:function(){for(var t=[],e={},i=0;i<this.history.length;i++){if(e=this.history[i],this.history[i].overallFeeling&&t.push({dates:e.date,customData:{category:"feeling",title:e.overallFeeling,icon:"good"===e.overallFeeling.toLowerCase()?"smile":"fair"===e.overallFeeling.toLowerCase()?"meh":"frown",class:"good"===e.overallFeeling.toLowerCase()?"text-success":"fair"===e.overallFeeling.toLowerCase()?"text-warning":"text-danger"}}),this.history[i].symptomsReported){var o=[];for(var n in this.history[i].symptomsReported)o.push(n+": "+this.history[i].symptomsReported[n]);o.length>0&&t.push({dates:e.date,customData:{category:"symptoms",class:""}})}if(this.history[i].vaccinationReported){var r=[];for(var c in this.history[i].vaccinationReported)r.push(c+": "+this.history[i].vaccinationReported[c]);r.length>0&&t.push({dates:e.date,customData:{category:"vaccination",class:""}})}if(this.history[i].testingReported){var l=[];for(var d in this.history[i].testingReported)l.push(d+": "+this.history[i].testingReported[d]);l.length>0&&t.push({dates:e.date,customData:{category:"testing",class:""}})}}return t}}),methods:{dayClicked:function(t){var e=this.$moment(t.id).format("MM/DD/YYYY");this.dateSelected=e}},mounted:function(){this.$refs.calendar;this.dateSelected=this.$moment().format("MM/DD/YYYY")}},m=(o(299),o(8)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full h-full flex flex-col bg-page-pattern bg-no-repeat bg-cover bg-right-top min-h-screen pb-18"},[o("div",{staticClass:"max-w-md mx-auto flex flex-col flex-grow h-full w-full pt-8"},[o("app-powered-by-statement"),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"flex-grow my-auto bg-light-background p-4 rounded-t-4xl mt-4 text-primary pb-24"},[t.attributes.length>0?o("div",{},[o("v-calendar",{staticClass:"w-128 mx-auto",attrs:{color:"#081E3A",attributes:t.attributes,"max-date":new Date,"is-expanded":"","is-dark":""},on:{dayclick:t.dayClicked},scopedSlots:t._u([{key:"day-content",fn:function(e){var n=e.day,r=e.dayEvents,c=e.attributes;return[o("div",t._g({staticClass:"h-full z-10 overflow-hidden brounded cursor-pointer"},r),[o("div",{staticClass:"w-full overflow-y-auto overflow-x-auto"},[o("span",{staticClass:"day-label text-xs text-gray-200 flex flex-col justify-center text-center h-6 w-6 mx-auto",class:{"bg-white text-dark-text rounded font-bold":n.id==t.$moment(t.todaysDate).format("YYYY")+"-"+t.$moment(t.todaysDate).format("MM")+"-"+t.$moment(t.todaysDate).format("DD")}},[o("span",[t._v(t._s(n.day)+" ")])]),t._v(" "),o("span",{staticClass:"content block mx-auto text-center"},t._l(c,(function(e,n){return o("span",{key:n},[e.customData?o("span",["feeling"===e.customData.category?o("span",{staticClass:"block mx-auto text-center text-xl",class:e.customData.class},[o("font-awesome-icon",{attrs:{icon:["fa",e.customData.icon]}})],1):t._e(),t._v(" "),o("span",{staticClass:"inline-block"},["symptoms"===e.customData.category?o("span",{staticClass:"text-xs text-tertiary"},[o("font-awesome-icon",{attrs:{icon:["fa","thermometer-full"]}})],1):t._e(),t._v(" "),"vaccination"===e.customData.category?o("span",{staticClass:"text-xs text-tertiary"},[o("font-awesome-icon",{attrs:{icon:["fa","syringe"]}})],1):t._e(),t._v(" "),"testing"===e.customData.category?o("span",{staticClass:"text-xs text-tertiary"},[o("font-awesome-icon",{attrs:{icon:["fa","microscope"]}})],1):t._e()])]):t._e()])})),0)])])]}}],null,!1,3552465845)})],1):t._e(),t._v(" "),o("div",{staticClass:"mt-4 mx-auto p-4 bg-gray-100 rounded-2xl"},[t.selectedDay?o("div",{staticClass:"text-dark-text leading-loose"},[o("div",{staticClass:"flex flex-row items-center"},[o("h3",{staticClass:"text-secondary-text font-bold text-lg"},[t._v(t._s(t.$moment(t.selectedDay.date).format("MMMM"))+" "+t._s(t.$moment(t.selectedDay.date).format("D")))]),t._v(" "),t.selectedDay.overallFeeling?o("span",{staticClass:"flex flex-row items-center"},[o("span",{staticClass:"flex h-1 w-1 bg-primary rounded-full mx-2"}),t._v(" "),o("p",[t._v("You reported feeling "),o("span",{staticClass:"font-bold"},[t._v(t._s(t.selectedDay.overallFeeling))])])]):t._e()]),t._v(" "),t.selectedDay.overallFeeling||Object.keys(t.selectedDay.symptomsReported).length>0||Object.keys(t.selectedDay.vaccinationReported).length>0||Object.keys(t.selectedDay.testingReported).length>0?o("span",[Object.keys(t.selectedDay.symptomsReported).length>0?o("span",[t._v("\n              You documented "+t._s(t.selectedDay.symptomsReported.Symptoms.length)+" "),o("span",{staticClass:"font-bold"},[t._v("symptoms")]),t._v(":\n              "),o("span",{staticClass:"flex flex-row flex-wrap items-center"},t._l(t.selectedDay.symptomsReported.Symptoms,(function(e,n){return o("span",{key:n,staticClass:"bg-highlight text-primary font-bold rounded mt-2 px-2 py-1 mr-2"},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),Object.keys(t.selectedDay.vaccinationReported).length>0?o("span",{staticClass:"block mt-4"},[o("font-awesome-icon",{staticClass:"mr-1 text-tertiary",attrs:{icon:["fa","syringe"]}}),t._v(" You received the "+t._s(t.selectedDay.vaccinationReported.Dose)+" dose of "),o("span",{staticClass:"font-bold"},[t._v(t._s(t.selectedDay.vaccinationReported["Vaccination Type"]))]),t._v(".\n            ")],1):t._e(),t._v(" "),Object.keys(t.selectedDay.testingReported).length>0?o("span",{staticClass:"block mt-4"},[o("font-awesome-icon",{staticClass:"mr-1 text-tertiary",attrs:{icon:["fa","microscope"]}}),t._v(" You received a "),o("span",{staticClass:"lowercase font-bold"},[t._v(t._s(t.selectedDay.testingReported["Testing Type"]))]),t._v(" at a/an "+t._s(t.selectedDay.testingReported.Location)+":\n              "),"no"===t.selectedDay.testingReported["Results Received"]?o("span",[t._v("and did not reveive a result at this time")]):t._e(),t._v(" "),"yes"===t.selectedDay.testingReported["Results Received"]?o("span",[t._v("you received a \n                "),o("span",{staticClass:"lowercase"},[t._v(t._s(t.selectedDay.testingReported.Results))]),t._v(" result\n              ")]):t._e()],1):t._e()]):o("p",[t._v("Nothing reported on this day.")])]):o("div",{staticClass:"text-gray-400 italic"},[t._v("\n          Select a day to see your recorded symptoms\n        ")])])])],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",{staticClass:"px-4 text-2xl md:text-4xl text-white font-light pt-12"},[t._v("Your "),o("span",{staticClass:"font-bold"},[t._v("history")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AppPoweredByStatement:o(267).default})}}]);