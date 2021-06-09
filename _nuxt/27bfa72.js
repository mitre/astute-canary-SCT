(window.webpackJsonp=window.webpackJsonp||[]).push([[21,7,10],{261:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("857e39a4",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";n.r(e);n(87);var o={props:{icon:{type:String,default:"syringe"},type:{type:String,default:"symptom"},text:{type:String,default:""},size:{type:String,default:"regular"}},computed:{btnClass:function(){var t=[];return"symptom"===this.type&&t.push("text-symptom"),"vaccination"===this.type&&t.push("text-vaccination"),"testing"===this.type&&t.push("text-testing"),"tertiary"===this.type&&t.push("text-tertiary"),"regular"===this.size&&t.push("icon-button"),"large"===this.size&&t.push("icon-button-large"),t.join(" ")}}},r=(n(272),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"rounded-2xl bg-white hover:bg-white focus:bg-white flex flex-col items-center justify-center",class:t.btnClass,on:{click:function(e){return t.$emit("clicked")}}},[n("span",{staticClass:"rounded-full h-6 w-6 absolute flex items-center justify-center bg-tertiary bg-opacity-25 mt-4"}),t._v(" "),n("font-awesome-icon",{staticClass:"mx-auto text-5xl mb-2 relative",attrs:{icon:t.icon}}),t._v(" "),n("span",{staticClass:"text-dark-text text-sm"},[t._v(t._s(t.text))])],1)}),[],!1,null,"209fef34",null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("span",{staticClass:"text-xs uppercase font-bold text-primary text-opacity-70 tracking-wide justify-end pr-4 flex flex-row items-center"},[t._v("Powered by Astute Canary "),o("img",{staticClass:"ml-2",attrs:{src:n(268),width:"20"}})])])}],r=n(8),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,null,null);e.default=component.exports},268:function(t,e,n){t.exports=n.p+"img/Astute-Canary-Logo.d999f71.svg"},272:function(t,e,n){"use strict";n(261)},273:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".icon-button[data-v-209fef34]{\n  width:100px;\n  height:100px\n}\n.icon-button[data-v-209fef34],.icon-button-large[data-v-209fef34]{\n  box-shadow:2px 2px 25px rgba(0,0,0,.06),2px 2px 25px rgba(0,0,0,.06)\n}\n.icon-button-large[data-v-209fef34]{\n  width:139px;\n  height:139px\n}",""]),t.exports=o},309:function(t,e,n){"use strict";n.r(e);var o={components:{AppIconButton:n(266).default},head:function(){return{title:this.$store.state.general.appName+" | Track"}},data:function(){return{loggedSymptoms:!1}},methods:{reportSymptoms:function(){this.$router.push("/track/symptoms")},reportVaccination:function(){this.$router.push("/track/vaccination")},reportTesting:function(){this.$router.push("/track/testing")}},mounted:function(){this.$store.commit("general/SET_PAGE_TITLE","Track")}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full h-full flex flex-col min-h-screen mx-auto  pb-18"},[n("div",{staticClass:"w-full bg-page-pattern bg-no-repeat bg-cover bg-bottom"},[n("div",{staticClass:"max-w-md mx-auto flex flex-col flex-grow h-full w-full pt-8 pb-32"},[n("app-powered-by-statement"),t._v(" "),t._m(0)],1)]),t._v(" "),n("div",{staticClass:"max-w-md mx-auto flex flex-col flex-grow h-full w-full"},[n("div",{staticClass:"flex-grow my-auto p-4 pb-24"},[n("div",{staticClass:"mx-auto mt-12",staticStyle:{width:"300px"}},[n("div",{staticClass:"grid grid-cols-2 gap-4"},[n("app-icon-button",{attrs:{type:"tertiary",size:"large",icon:"thermometer-full",text:"Symptoms"},on:{clicked:t.reportSymptoms}}),t._v(" "),n("app-icon-button",{attrs:{type:"tertiary",size:"large",icon:"syringe",text:"Vaccination"},on:{clicked:t.reportVaccination}},[t._v("Vaccination Experience")]),t._v(" "),n("app-icon-button",{attrs:{type:"tertiary",size:"large",icon:"microscope",text:"Testing"},on:{clicked:t.reportTesting}},[t._v("Testing & Diagnosis")])],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-3xl text-primary font-light pt-12 px-4"},[t._v("What would you like to "),n("span",{staticClass:"font-bold"},[t._v("track")]),t._v(" today?")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AppPoweredByStatement:n(267).default,AppIconButton:n(266).default})}}]);