(window.webpackJsonp=window.webpackJsonp||[]).push([[24,2,3,7,10,12,15],{261:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("8030bbda",content,!0,{sourceMap:!1})},262:function(t,e,n){"use strict";n.r(e);n(263),n(269),n(87);var r={props:{round:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},uppercase:{type:Boolean,default:!1},type:{type:String,default:"primary"},textType:{type:String,default:"light-text"},border:{type:Boolean,default:!1},borderType:{type:String,default:""},borderThickness:{type:Number},tailwind:{type:Boolean,default:!1},tailwindBackgroundOpacity:{type:Number,default:900}},computed:{btnClass:function(){var t=[];return this.round&&t.push("rounded-full"),this.uppercase&&t.push("uppercase"),this.bold&&t.push("font-bold"),this.border&&(this.borderThickness?t.push("border-"+this.borderThickness):t.push("border"),this.borderType&&t.push("border-"+this.borderType)),t.push("text-"+this.textType),"white"===this.type&&t.push("bg-white"),"black"===this.type&&t.push("bg-black"),"primary"===this.type&&t.push("bg-primary"),"secondary"===this.type&&t.push("bg-secondary"),"tertiary"===this.type&&t.push("bg-tertiary"),"accent"===this.type&&t.push("bg-accent"),"success"===this.type&&t.push("bg-success"),"warning"===this.type&&t.push("bg-warning"),"danger"===this.type&&t.push("bg-danger"),"primary"===this.textType&&t.push("text-primary"),"secondary"===this.textType&&t.push("text-secondary"),"tertiary"===this.textType&&t.push("text-tertiary"),"accent"===this.textType&&t.push("text-accent"),"success"===this.textType&&t.push("text-success"),"warning"===this.textType&&t.push("text-warning"),"danger"===this.textType&&t.push("text-danger"),"light-text"===this.textType&&t.push("text-light-text"),"dark-text"===this.textType&&t.push("text-dark-text"),t.join(" ")}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"py-2 rounded px-4 hover:shadow-xl focus:shadow-xl",class:t.btnClass,on:{click:function(e){return t.$emit("clicked")}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){"use strict";var r=n(10),o=n(4),c=n(88),l=n(16),d=n(12),f=n(46),h=n(188),m=n(67),x=n(5),y=n(69),v=n(68).f,_=n(34).f,w=n(15).f,k=n(264).trim,C="Number",T=o.Number,E=T.prototype,S=f(y(E))==C,$=function(t){var e,n,r,o,c,l,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=k(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(C,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var I,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(S?x((function(){E.valueOf.call(n)})):f(n)!=C)?h(new T($(e)),n,N):$(e)},j=r?v(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;j.length>A;A++)d(T,I=j[A])&&!d(N,I)&&w(N,I,_(T,I));N.prototype=E,E.constructor=N,l(o,C,N)}},264:function(t,e,n){var r=n(19),o="["+n(265)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},265:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},266:function(t,e,n){"use strict";n.r(e);n(87);var r={props:{icon:{type:String,default:"syringe"},type:{type:String,default:"symptom"},text:{type:String,default:""},size:{type:String,default:"regular"}},computed:{btnClass:function(){var t=[];return"symptom"===this.type&&t.push("text-symptom"),"vaccination"===this.type&&t.push("text-vaccination"),"testing"===this.type&&t.push("text-testing"),"tertiary"===this.type&&t.push("text-tertiary"),"regular"===this.size&&t.push("icon-button"),"large"===this.size&&t.push("icon-button-large"),t.join(" ")}}},o=(n(272),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"rounded-2xl bg-white hover:bg-white focus:bg-white flex flex-col items-center justify-center",class:t.btnClass,on:{click:function(e){return t.$emit("clicked")}}},[n("div",[n("div",{staticClass:"rounded-full h-6 w-6 absolute flex items-center justify-center bg-tertiary bg-opacity-25 mt-4"}),t._v(" "),n("font-awesome-icon",{staticClass:"mx-auto text-5xl mb-2 relative",attrs:{icon:t.icon}})],1),t._v(" "),n("p",{staticClass:"text-dark-text text-sm"},[t._v(t._s(t.text))])])}),[],!1,null,"3b5acdf2",null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"text-sm uppercase text-light-text text-opacity-70 tracking-wide justify-end pr-4 font-light flex flex-row items-center"},[t._v("Powered by Astute Canary "),r("img",{staticClass:"ml-2",attrs:{src:n(268),width:"20"}})])])}],o=n(8),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,null,null);e.default=component.exports},268:function(t,e,n){t.exports=n.p+"img/Astute-Canary-Logo.d999f71.svg"},269:function(t,e,n){"use strict";var r=n(2),o=n(270);r({target:"String",proto:!0,forced:n(271)("bold")},{bold:function(){return o(this,"b","","")}})},270:function(t,e,n){var r=n(19),o=/"/g;t.exports=function(t,e,n,c){var l=String(r(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(c).replace(o,"&quot;")+'"'),d+">"+l+"</"+e+">"}},271:function(t,e,n){var r=n(5);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},272:function(t,e,n){"use strict";n(261)},273:function(t,e,n){var r=n(44)((function(i){return i[1]}));r.push([t.i,".icon-button[data-v-3b5acdf2]{\n  width:100px;\n  height:100px\n}\n.icon-button[data-v-3b5acdf2],.icon-button-large[data-v-3b5acdf2]{\n  box-shadow:2px 2px 25px rgba(0,0,0,.06),2px 2px 25px rgba(0,0,0,.06)\n}\n.icon-button-large[data-v-3b5acdf2]{\n  width:139px;\n  height:139px\n}",""]),t.exports=r},274:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("9e04e26c",content,!0,{sourceMap:!1})},276:function(t,e,n){"use strict";n(274)},277:function(t,e,n){var r=n(44)((function(i){return i[1]}));r.push([t.i,".sv_qstn .sv_q_checkbox.sv-q-col-1{\n  width:auto;\n  padding-right:.5em\n}\n.sv_q_radiogroup.checked>label{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 223, 73, var(--tw-bg-opacity));\n  --tw-text-opacity:1;\n  color:rgba(65, 90, 121, var(--tw-text-opacity));\n  font-weight:700\n}\n.sv_q_text_root{\n  --tw-bg-opacity:1;\n  background-color:rgba(116, 133, 252, var(--tw-bg-opacity));\n  border-radius:5px;\n  padding:5px 3px\n}\n.sv_qcbx .checkbox-material{\n  margin-right:0!important\n}\n.form-tick:checked{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E\");\n  background-size:100% 100%;\n  background-position:50%;\n  background-repeat:no-repeat\n}\n.sv_nav{\n  padding-left:2rem;\n  padding-right:2rem\n}\n.sv_q_checkbox.checked>label{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 223, 73, var(--tw-bg-opacity));\n  font-weight:700\n}\n.sv_q_description{\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:100;\n  font-style:italic;\n  margin-bottom:1rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}",""]),t.exports=r},278:function(t,e,n){"use strict";n.r(e);var r=n(123),o={props:{json:{type:Object},results:{type:Object}},data:function(){var t=this,e=this.json,n=new r.Model(e);return n.onComplete.add((function(e){t.result=e.data,t.sendResults()})),n.css={errors:"text-white",headerText:"text-xl",navigationButton:"border py-2 px-4 rounded mt-4 right",navigation:{complete:"bg-secondary border-none text-white"},question:{header:"text-2xl text-light-text px-4",content:"px-8 text-lg"},checkbox:{label:"inline-block text-sm items-center bg-accent py-2 px-4 text-primary rounded-lg mb-2 hover:bg-opacity-75 focus:bg-opacity-75 checked:bg-highlight",itemControl:"form-tick appearance-none w-0 bg-accent focus:bg-secondary checked:bg-secondary"},radiogroup:{label:"inline-block text-sm items-center bg-accent py-2 px-4 text-primary rounded-lg mb-2 hover:bg-opacity-75 focus:bg-opacity-75 checked:bg-highlight",itemControl:"opacity-0 fixed w-0 bg-accent focus:bg-secondary checked:bg-secondary"},input:{label:"text-gray-500",itemControl:"border rounded"}},{surveyRender:n,result:[]}},methods:{sendResults:function(){this.$emit("resultsCaptured",this.result)}},created:function(){}},c=(n(276),n(8)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full",attrs:{id:"surveyElement"}},[n("survey",{attrs:{survey:t.surveyRender}})],1)}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var r=n(8),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"text-accent uppercase",on:{click:function(e){return t.$emit("clicked")}}},[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"arrow-left"}}),t._v("\n  Back\n")],1)}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);var r={components:{Button:n(262).default},methods:{goToSymptoms:function(){this.$router.push("/track/symptoms")},goToTesting:function(){this.$router.push("/track/testing")},goToHome:function(){this.$router.push("/")}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-grow flex flex-col justify-start text-center bg-light-background p-8 rounded-t-4xl mt-4 text-primary"},[t._m(0),t._v(" "),n("div",{staticClass:"mt-12 flex flex-row mx-auto"},[n("app-icon-button",{staticClass:"w-full",attrs:{size:"large",type:"tertiary",icon:"thermometer-full",text:"Symptoms"},on:{clicked:t.goToSymptoms}}),t._v(" "),n("app-icon-button",{staticClass:"w-full ml-4",attrs:{icon:"microscope",size:"large",type:"tertiary",text:"Testing"},on:{clicked:t.goToTesting}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-2xl text-dark-text font-light"},[t._v("Need to "),n("span",{staticClass:"font-bold"},[t._v("track")]),t._v(" something else?")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AppIconButton:n(266).default})},313:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(47),n(262)),c=n(278),l=n(298),d=n(59),f=n.n(d),h={head:function(){return{title:this.$store.state.general.appName+" | Track Vaccination"}},components:{AppButton:o.default,Survey:c.default,VaccinationComplete:l.default},data:function(){return{json:{},reportedVaccination:{},myCss:{navigationButton:"bg-primary text-light-text"},surveyCreated:!1,checkInComplete:!1}},computed:{activeDate:function(){return this.$store.state.reporting.activeDate},todayDate:function(){return this.$store.state.reporting.todayDate}},methods:{createSurvey:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"/astute-canary-SCT/","/astute-canary-SCT//survey-configs/vaccination.json",f.a.get("/astute-canary-SCT//survey-configs/vaccination.json").then((function(e){t.json=e.data,t.surveyCreated=!0})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},setVaccination:function(t){this.$store.commit("reporting/SET_DAY_VACCINATION",t),this.checkInComplete=!0},goBack:function(){this.$router.go(-1)}},created:function(){this.createSurvey()},mounted:function(){this.$store.commit("general/SET_PAGE_TITLE","Track - Vaccination")}},m=n(8),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full flex flex-col bg-page-pattern bg-no-repeat bg-cover bg-right-top min-h-screen"},[n("div",{staticClass:"max-w-md mx-auto flex flex-col flex-grow h-full w-full"},[n("div",{staticClass:"flex flex-row w-full justify-between items-center mx-auto pt-8 px-4"},[n("app-back-button",{attrs:{type:"secondary"},on:{clicked:t.goBack}},[t._v("Back")]),t._v(" "),n("app-powered-by-statement")],1),t._v(" "),t.surveyCreated&&!t.checkInComplete?n("div",{staticClass:"w-auto mx-auto mt-8 pb-24"},[n("p",{staticClass:"px-4 text-sm text-gray-200 font-light mb-4"},[t._v("\n        Filling in vaccination information for \n        "),t.todayDate===t.activeDate?n("span",[n("span",{staticClass:"font-bold"},[t._v(" today:")]),t._v("\n          "+t._s(t.$moment(t.activeDate).format("dddd"))+", "+t._s(t.$moment(t.activeDate).format("MMMM"))+" "+t._s(t.$moment(t.activeDate).format("Do"))+"\n        ")]):n("span",[n("span",{staticClass:"font-bold ml-1"},[t._v(t._s(t.$moment(t.activeDate).format("dddd"))+", "+t._s(t.$moment(t.activeDate).format("MMMM"))+" "+t._s(t.$moment(t.activeDate).format("Do")))])])]),t._v(" "),n("client-only",[n("survey",{attrs:{json:t.json,results:t.reportedVaccination},on:{resultsCaptured:t.setVaccination}})],1)],1):t._e(),t._v(" "),t.checkInComplete?n("h2",{staticClass:"mt-12 text-2xl text-gray-200 font-light px-4",staticStyle:{"margin-top":"20%"}},[t._v("Thank you for "),n("span",{staticClass:"font-bold"},[t._v("logging your vaccination!")])]):t._e(),t._v(" "),t.checkInComplete?n("vaccination-complete",{staticClass:"mt-24"}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppBackButton:n(280).default,AppPoweredByStatement:n(267).default})}}]);