(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4,5,6,7,10],{262:function(t,e,r){var content=r(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("d00ffdb2",content,!0,{sourceMap:!1})},266:function(t,e,r){"use strict";r.r(e);r(87);var n={props:{icon:{type:String,default:"syringe"},type:{type:String,default:"symptom"},text:{type:String,default:""},size:{type:String,default:"regular"}},computed:{btnClass:function(){var t=[];return"symptom"===this.type&&t.push("text-symptom"),"vaccination"===this.type&&t.push("text-vaccination"),"testing"===this.type&&t.push("text-testing"),"tertiary"===this.type&&t.push("text-tertiary"),"regular"===this.size&&t.push("icon-button"),"large"===this.size&&t.push("icon-button-large"),t.join(" ")}}},o=(r(272),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"rounded-2xl hover:bg-white focus:bg-white flex flex-col items-center justify-center",class:t.btnClass,on:{click:function(e){return t.$emit("clicked")}}},[r("div",[r("div",{staticClass:"rounded-full h-6 w-6 absolute flex items-center justify-center bg-tertiary bg-opacity-25 mt-4"}),t._v(" "),r("font-awesome-icon",{staticClass:"mx-auto text-5xl mb-2 relative",attrs:{icon:t.icon}})],1),t._v(" "),r("p",{staticClass:"text-dark-text text-sm"},[t._v(t._s(t.text))])])}),[],!1,null,"0af39274",null);e.default=component.exports},267:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"text-sm uppercase text-light-text text-opacity-70 tracking-wide justify-end pr-4 font-light flex flex-row items-center"},[t._v("Powered by Astute Canary "),n("img",{staticClass:"ml-2",attrs:{src:r(268),width:"20"}})])])}],o=r(8),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},268:function(t,e,r){t.exports=r.p+"img/Astute-Canary-Logo.d999f71.svg"},272:function(t,e,r){"use strict";r(262)},273:function(t,e,r){var n=r(44)((function(i){return i[1]}));n.push([t.i,".icon-button[data-v-0af39274]{\n  width:100px;\n  height:100px\n}\n.icon-button[data-v-0af39274],.icon-button-large[data-v-0af39274]{\n  box-shadow:2px 2px 25px rgba(0,0,0,.06),2px 2px 25px rgba(0,0,0,.06)\n}\n.icon-button-large[data-v-0af39274]{\n  width:125px;\n  height:125px\n}",""]),t.exports=n},275:function(t,e,r){var content=r(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("8b730b88",content,!0,{sourceMap:!1})},279:function(t,e,r){"use strict";r.r(e);var n={props:{weekday:String,day:String,month:String,feeling:String}},o=(r(282),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box w-24 rounded-t text-center h-full border-b-16 border-transparent"},[r("div",{staticClass:"inner-box w-full bg-opacity-75 bg-light-background pt-2 px-4 rounded-xl border-b-8 border-transparent",class:{"border-success":"good"===t.feeling,"border-warning":"fair"===t.feeling,"border-danger":"poor"===t.feeling}},[r("p",{staticClass:"text-gray-500 text-xs capitalize"},[t._v(t._s(t.weekday))]),t._v(" "),r("p",{staticClass:"text-2xl text-dark-text font-bold"},[t._v(t._s(t.day))]),t._v(" "),r("p",{staticClass:"uppercase text-dark-text font-bold -mt-1"},[t._v(t._s(t.month))]),t._v(" "),r("p",{staticClass:"italic text-gray-500 text-xs h-6 capitalize"},[t._v(t._s(t.feeling))])]),t._v(" "),r("div",{staticClass:"left-corner hidden"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 65.98 129.61"}},[r("defs",[r("style",[t._v(".cls-1{fill:#fff;}")])]),r("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[r("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[r("path",{staticClass:"cls-1",attrs:{d:"M66,0V129.06l-66,.55a271.47,271.47,0,0,0,39.33-55.5A271.82,271.82,0,0,0,66,0Z"}})])])])]),t._v(" "),r("div",{staticClass:"right-corner hidden"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 65.98 129.61"}},[r("defs",[r("style",[t._v(".cls-1{fill:#fff;}")])]),r("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[r("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[r("path",{staticClass:"cls-1",attrs:{d:"M0,0V129.06l66,.55a271.08,271.08,0,0,1-39.33-55.5A271.82,271.82,0,0,1,0,0Z"}})])])])])])}),[],!1,null,"0d393f40",null);e.default=component.exports},281:function(t,e,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("86c196c8",content,!0,{sourceMap:!1})},282:function(t,e,r){"use strict";r(275)},283:function(t,e,r){var n=r(44)((function(i){return i[1]}));n.push([t.i,".is-active>.box[data-v-0d393f40]{\n  --tw-border-opacity:1;\n  border-color:rgba(255, 255, 255, var(--tw-border-opacity));\n  position:relative\n}\n.is-active>.box>.inner-box[data-v-0d393f40]{\n  --tw-bg-opacity:1;\n  border-bottom-right-radius:0px;\n  border-bottom-left-radius:0px;\n  border-color:transparent\n}\n.is-active>.box>.left-corner[data-v-0d393f40]{\n  display:block;\n  position:absolute;\n  left:0px;\n  margin-left:-1rem;\n  margin-bottom:-2rem;\n  bottom:0px;\n  width:1rem\n}\n.is-active>.box>.right-corner[data-v-0d393f40]{\n  display:block;\n  position:absolute;\n  right:0px;\n  margin-right:-1rem;\n  margin-bottom:-2rem;\n  bottom:0px;\n  width:1rem\n}\n.border-b-16[data-v-0d393f40]{\n  border-bottom-width:12px\n}",""]),t.exports=n},284:function(t,e,r){var content=r(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("3b7c2ba2",content,!0,{sourceMap:!1})},286:function(t,e,r){"use strict";r(281)},287:function(t,e,r){var n=r(44)((function(i){return i[1]}));n.push([t.i,".button-shadow[data-v-bb787e60]{\n  box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.16);\n  height:85px;\n  width:85px\n}",""]),t.exports=n},288:function(t,e,r){"use strict";r(284)},289:function(t,e,r){var n=r(44)((function(i){return i[1]}));n.push([t.i,".splide__pagination{\n  display:none!important\n}",""]),t.exports=n},290:function(t,e,r){"use strict";r.r(e);r(87);var n={props:{icon:{type:String,default:"smile"},type:{type:String,default:"success"},text:{type:String,default:""},prefix:{type:String,default:"fas"}},computed:{btnClass:function(){var t=[];return"success"===this.type&&t.push("border-b-8 border-success"),"warning"===this.type&&t.push("border-b-8 border-warning"),"danger"===this.type&&t.push("border-b-8 border-danger"),t.join(" ")}}},o=(r(286),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"py-2 w-full rounded-md bg-white button-shadow hover:bg-white hover:bg-opacity-25 focus:bg-white focus:bg-opacity-25 flex flex-col text-center justify-center",class:t.btnClass,on:{click:function(e){return t.$emit("clicked")}}},[r("p",{staticClass:"text-dark-text text-center text-sm mb-2 mx-auto font-light"},[t._v(t._s(t.text))]),t._v(" "),r("font-awesome-icon",{staticClass:"mx-auto text-4xl mb-2 text-tertiary",attrs:{icon:[t.prefix,t.icon]}})],1)}),[],!1,null,"bb787e60",null);e.default=component.exports},291:function(t,e,r){"use strict";r.r(e);r(39),r(27),r(38),r(56),r(28),r(57);var n=r(25),o=r(55);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={components:{AppCalendarDateBox:r(279).default},props:{dates:Array},data:function(){return{options:{type:"slide",width:"100%",autoWidth:!0,start:this.getStartIndex(),perMove:1,focus:0,direction:"rtl",gap:"0.5rem",arrows:!1,rewind:!0,pagination:!1,padding:{right:"1.5rem",left:"2rem"}}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({history:"reporting/allReportingHistory"})),methods:{slideClicked:function(t,e){this.$refs.splide.go(e.index),this.$emit("changedDate",this.dates[e.index])},slideActive:function(t,e){this.$emit("changedDate",this.dates[e.index])},getWeekday:function(t){return this.$moment(t).format("ddd")},getDay:function(t){return this.$moment(t).format("DD")},getMonth:function(t){return this.$moment(t).format("MMM")},getFeeling:function(t){for(var e=void 0,i=0;i<this.history.length;i++)this.history[i].date===t&&(e=this.history[i].overallFeeling?this.history[i].overallFeeling:void 0);return e},getStartIndex:function(){for(var t=0,i=0;i<this.dates.length;i++)this.dates[i]===this.$store.state.reporting.activeDate&&(t=i);return t}}},d=(r(288),r(8)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("splide",{ref:"splide",attrs:{options:t.options},on:{"splide:click":t.slideClicked,"splide:active":t.slideActive}},t._l(t.dates,(function(e,n){return r("splide-slide",{key:n},[r("app-calendar-date-box",{attrs:{weekday:t.getWeekday(e),day:t.getDay(e),month:t.getMonth(e),feeling:t.getFeeling(e),history:t.history}})],1)})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppCalendarDateBox:r(279).default})},293:function(t,e,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("bad8e090",content,!0,{sourceMap:!1})},301:function(t,e,r){"use strict";r(293)},302:function(t,e,r){var n=r(44)((function(i){return i[1]}));n.push([t.i,".rounded-t-4xl{\n  border-top-left-radius:3rem;\n  border-top-right-radius:3rem\n}\n.border-b-18{\n  border-bottom-width:18px\n}",""]),t.exports=n},314:function(t,e,r){"use strict";r.r(e);r(39),r(27),r(38),r(56),r(28),r(57);var n=r(25),o=(r(60),r(55)),l=r(290),c=r(267),d=r(291);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={head:function(){return{title:this.$store.state.general.appName+" | Home"}},components:{AppFeelingButton:l.default,AppPoweredByStatement:c.default,AppDateSlide:d.default},data:function(){return{value:0,appName:"",importantInformation:"",daysDate:this.$moment().format("MM/DD/YYYY"),todaysDate:this.$moment().format("MM/DD/YYYY"),feelingIcon:"smile",feeling:void 0,weekOfDates:[],selectedDay:void 0}},methods:{setFeeling:function(t){this.$store.commit("reporting/SET_DAY_OVERALL_FEELING",t),this.feelingIcon="poor"===t?"frown":"fair"===t?"meh":"smile",this.getWeekOfDates()},resetFeeling:function(){this.$store.commit("reporting/RESET_DAY_OVERALL_FEELING",this.daysDate),this.getWeekOfDates()},reportSymptoms:function(){this.$router.push("/track/symptoms")},reportVaccination:function(){this.$router.push("/track/vaccination")},reportTesting:function(){this.$router.push("/track/testing")},setDate:function(t){this.$store.commit("reporting/SET_SELECTED_DATE",t),this.selectedDay=this.getReportedDayHistory(t)},getWeekOfDates:function(){var t=this.daysDate;this.weekOfDates=[],this.weekOfDates.push(t);for(var i=0;i<6;i++)t=this.$moment(t).subtract(1,"days").format("MM/DD/YYYY"),this.weekOfDates.push(t)},getReportedDayHistory:function(t){for(var e={date:t,overallFeeling:void 0,symptomsReported:{},vaccinationReported:{},testingReported:{}},i=0;i<this.history.length;i++)this.history[i].date===t&&(e=this.history[i]);return e}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({firstname:function(){return this.$store.state.profile.profile.firstname}},Object(o.b)({history:"reporting/allReportingHistory",daySelected:"reporting/daySelected"})),mounted:function(){this.$store.commit("general/SET_PAGE_TITLE","Home"),this.appName=this.$store.state.general.appName,this.importantInformation=this.$store.state.general.importantInformation,this.getWeekOfDates(),this.$store.state.reporting.todayDate!==this.todaysDate&&(this.$store.commit("reporting/SET_SELECTED_DATE",this.daysDate),this.$store.commit("reporting/SET_TODAY_DATE",this.todaysDate)),this.$store.state.reporting.activeDate||this.$store.commit("reporting/SET_SELECTED_DATE",this.daysDate),this.$store.state.reporting.activeDate?this.setDate(this.$store.state.reporting.activeDate):this.setDate(this.daysDate)}},m=(r(301),r(8)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full h-full flex flex-col min-h-screen mx-auto bg-home-pattern bg-no-repeat bg-cover bg-center pb-16"},[r("div",{staticClass:"max-w-md mx-auto flex flex-col flex-grow h-full w-full pt-8"},[r("app-powered-by-statement"),t._v(" "),t.weekOfDates.length>0?r("div",{staticClass:"mt-8 w-full"},[r("client-only",[r("app-date-slide",{attrs:{dates:t.weekOfDates},on:{changedDate:t.setDate}})],1)],1):t._e(),t._v(" "),t.daySelected?r("div",{staticClass:"bg-light-background h-48 pt-4 rounded-2xl px-8 border-b-18 border-transparent",class:{"border-success":"good"===t.daySelected.overallFeeling,"border-warning":"fair"===t.daySelected.overallFeeling,"border-danger":"poor"===t.daySelected.overallFeeling}},[t.daySelected.overallFeeling||t.daySelected.date!==t.todaysDate?t._e():r("span",[r("h2",{staticClass:"text-xl tracking-wide text-dark-text letter font-light"},[t._v("Welcome back "+t._s(t.firstname))]),t._v(" "),r("h3",{staticClass:"font-bold text-xl tracking-wide text-dark-text"},[t._v("How are you feeling today?")])]),t._v(" "),t.daySelected.overallFeeling||t.daySelected.date===t.todaysDate?t._e():r("span",[r("h3",{staticClass:"font-bold text-xl tracking-wide text-dark-text"},[t._v("How were you feeling?")])]),t._v(" "),t.daySelected.overallFeeling?r("div",{staticClass:"flex flex-col justify-center h-full w-full text-dark-text text-lg py-2"},[r("span",{staticClass:"text-2xl font-light"},[r("p",{staticClass:"mt-4"},[t._v("Thanks for checking in"),t.daySelected.date===t.todaysDate?r("span",[t._v(" today")]):t._e(),t._v("! You reported that you \n                "),t.daySelected.date===t.todaysDate?r("span",[t._v("feel")]):r("span",[t._v("felt")]),t._v(" "),r("span",{staticClass:"font-bold"},[t._v(t._s(t.daySelected.overallFeeling))]),t._v(".\n              ")])]),t._v(" "),r("div",{staticClass:"mt-4 text-sm text-right self-end"},[r("button",{staticClass:"uppercase font-bold text-dark-text",on:{click:t.resetFeeling}},[t._v("change status")])])]):r("div",{staticClass:"flex flex-row justify-center items-center w-full mt-4"},[r("app-feeling-button",{attrs:{icon:"smile",type:"success",prefix:"fa",text:"Good"},on:{clicked:function(e){return t.setFeeling("good")}}}),t._v(" "),r("app-feeling-button",{staticClass:"ml-4",attrs:{icon:"meh",type:"warning",prefix:"fa",text:"Fair"},on:{clicked:function(e){return t.setFeeling("fair")}}}),t._v(" "),r("app-feeling-button",{staticClass:"ml-4",attrs:{icon:"frown",type:"danger",prefix:"fa",text:"Poor"},on:{clicked:function(e){return t.setFeeling("poor")}}})],1)]):t._e(),t._v(" "),r("div",{staticClass:"flex-grow bg-light-background p-4 rounded-t-4xl mt-4 text-primary pb-24"},[r("div",{},[t._m(0),t._v(" "),r("div",{staticClass:"mt-4 flex flex-col justify-center self-center my-auto"},[r("div",{staticClass:"flex flex-row flex-wrap w-full items-center justify-center"},[r("app-icon-button",{staticClass:"mt-4",attrs:{type:"tertiary",icon:"thermometer-full",text:"Symptoms"},on:{clicked:t.reportSymptoms}}),t._v(" "),r("app-icon-button",{staticClass:"mt-4 ml-4",attrs:{type:"tertiary",icon:"syringe",text:"Vaccination"},on:{clicked:t.reportVaccination}},[t._v("Vaccination Experience")]),t._v(" "),r("app-icon-button",{staticClass:"mt-4 ml-4",attrs:{type:"tertiary",icon:"microscope",text:"Testing"},on:{clicked:t.reportTesting}},[t._v("Testing & Diagnosis")])],1)])])])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"text-xl px-4 pt-4 tracking-wide text-dark-text letter font-light"},[t._v("Need to "),r("span",{staticClass:"font-bold"},[t._v("track")]),t._v("?")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AppPoweredByStatement:r(267).default,AppDateSlide:r(291).default,AppFeelingButton:r(290).default,AppIconButton:r(266).default})}}]);