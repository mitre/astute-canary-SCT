(window.webpackJsonp=window.webpackJsonp||[]).push([[25,10],{267:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticClass:"text-sm uppercase text-light-text text-opacity-70 tracking-wide justify-end pr-4 font-light flex flex-row items-center"},[t._v("Powered by Astute Canary "),r("img",{staticClass:"ml-2",attrs:{src:o(268),width:"20"}})])])}],n=o(8),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,null,null);e.default=component.exports},268:function(t,e,o){t.exports=o.p+"img/Astute-Canary-Logo.d999f71.svg"},310:function(t,e,o){"use strict";o.r(e);o(39),o(27),o(38),o(56),o(28),o(57);var r=o(25),n=(o(58),o(70),o(55));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={head:function(){return{title:this.$store.state.general.appName+" | Trends"}},data:function(){return{symptomOptions:{tooltips:{callbacks:{label:function(t,data){var label=data.datasets[t.datasetIndex].label||"";return label&&(label+=": "),label+=t.value+" day",(t.value>1||t.value<1)&&(label+="s"),label}}},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Days Experienced"},ticks:{beginAtZero:!0,min:0}}],yAxes:[{title:{display:!0,text:"Days Experienced"},ticks:{callback:function(t){return t.length>20?t.substr(0,20)+"...":t}}}]}}}},mounted:function(){this.$store.commit("general/SET_PAGE_TITLE","Analysis")},computed:m(m({},Object(n.b)({history:"reporting/allReportingHistory"})),{},{lineData:function(){return{labels:["Good","Fair","Poor"],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[40,20]}]}},symptomChartData:function(){var t={labels:[],datasets:[{data:[],backgroundColor:[],label:this.$moment().format("MMM YYYY")},{data:[],backgroundColor:[],label:this.$moment().subtract(1,"months").format("MMM YYYY")},{data:[],backgroundColor:[],label:this.$moment().subtract(2,"months").format("MMM YYYY")}]},e=this.$moment().format("MM"),o=this.$moment().subtract(1,"months").format("MM"),r=this.$moment().subtract(2,"months").format("MM");if(this.history.length>0)for(var i=0;i<this.history.length;i++)if(this.history[i].symptomsReported.Symptoms)for(var n=0;n<this.history[i].symptomsReported.Symptoms.length;n++)t.labels.includes(this.history[i].symptomsReported.Symptoms[n])?this.$moment(this.history[i].date).format("MM")===e?t.datasets[0].data[t.labels.indexOf(this.history[i].symptomsReported.Symptoms[n])]++:this.$moment(this.history[i].date).format("MM")===o?t.datasets[1].data[t.labels.indexOf(this.history[i].symptomsReported.Symptoms[n])]++:this.$moment(this.history[i].date).format("MM")===r&&t.datasets[2].data[t.labels.indexOf(this.history[i].symptomsReported.Symptoms[n])]++:this.$moment(this.history[i].date).format("MM")===e?(t.labels.push(this.history[i].symptomsReported.Symptoms[n]),t.datasets[0].data.push(1),t.datasets[1].data.push(0),t.datasets[2].data.push(0),t.datasets[0].backgroundColor.push("#312E81"),t.datasets[1].backgroundColor.push("#4F46E5"),t.datasets[2].backgroundColor.push("#818CF8")):this.$moment(this.history[i].date).format("MM")===o?(t.labels.push(this.history[i].symptomsReported.Symptoms[n]),t.datasets[0].data.push(0),t.datasets[1].data.push(1),t.datasets[2].data.push(0),t.datasets[0].backgroundColor.push("#312E81"),t.datasets[1].backgroundColor.push("#4F46E5"),t.datasets[2].backgroundColor.push("#818CF8")):this.$moment(this.history[i].date).format("MM")===r&&(t.labels.push(this.history[i].symptomsReported.Symptoms[n]),t.datasets[0].data.push(0),t.datasets[1].data.push(0),t.datasets[2].data.push(1),t.datasets[0].backgroundColor.push("#312E81"),t.datasets[1].backgroundColor.push("#4F46E5"),t.datasets[2].backgroundColor.push("#818CF8"));return t}})},h=o(8),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full h-full flex flex-col bg-page-pattern bg-no-repeat bg-cover bg-right-top min-h-screen pb-16"},[o("div",{staticClass:"max-w-md mx-auto flex flex-col flex-grow h-full w-full pt-8"},[o("app-powered-by-statement"),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"flex-grow bg-light-background p-4 rounded-t-4xl mt-4 md:mt-12 text-primary"},[o("div",{staticClass:"w-full mt-8"},[o("h2",{staticClass:"text-primary font-bold uppercase"},[t._v("Symptoms")]),t._v(" "),o("p",{staticClass:"pb-2 text-gray-600 text-sm"},[t._v("Symptoms recorded during the past three months")]),t._v(" "),o("client-only",[o("horizontal-bar-chart",{attrs:{data:t.symptomChartData,options:t.symptomOptions}})],1)],1)])],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",{staticClass:"px-4 text-2xl md:text-3xl text-white font-light pt-12"},[t._v("Here's what's been "),o("span",{staticClass:"font-bold"},[t._v("happening")]),t._v(":")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AppPoweredByStatement:o(267).default})}}]);